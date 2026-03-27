const CULTUREWORKS_EVENTS_URL =
  "https://calendar.richmondcultureworks.org/api/2/events?per_page=50";

const sources = [
  {
    name: "CultureWorks Localist API",
    url: "https://calendar.richmondcultureworks.org/api/2/events",
    notes: "Primary arts source for Richmond event discovery (anonymous public API)."
  },
  {
    name: "Eventbrite (org/venue based)",
    url: "https://www.eventbrite.com/",
    notes: "Use org_id or venue_id lookups; avoid deprecated location search."
  },
  {
    name: "Partner RSS Feeds",
    url: "https://www.rssboard.org/rss-specification",
    notes: "Venue and media feeds where available."
  }
];

const seedEvents = [
  {
    id: "seed-cw-1001",
    title: "First Friday Gallery Walk",
    datetime: "2026-03-28T18:00:00",
    neighborhood: "Arts District",
    venue: "Broad Street Arts Corridor",
    category: "Visual Art",
    cost: "free",
    lat: 37.5486,
    lng: -77.4456,
    sourceName: "Bundled demo (offline fallback)",
    sourceUrl: "https://calendar.richmondcultureworks.org/"
  },
  {
    id: "seed-cw-1002",
    title: "Jackson Ward Jazz Night",
    datetime: "2026-03-29T19:30:00",
    neighborhood: "Jackson Ward",
    venue: "Historic Theater RVA",
    category: "Music",
    cost: "paid",
    lat: 37.5512,
    lng: -77.436,
    sourceName: "Bundled demo (offline fallback)",
    sourceUrl: "https://calendar.richmondcultureworks.org/"
  },
  {
    id: "seed-eb-2001",
    title: "Scott's Addition Mural Tour",
    datetime: "2026-03-28T11:00:00",
    neighborhood: "Scott's Addition",
    venue: "Workshop RVA",
    category: "Tour",
    cost: "paid",
    lat: 37.5658,
    lng: -77.4673,
    sourceName: "Bundled demo (offline fallback)",
    sourceUrl: "https://www.eventbrite.com/"
  },
  {
    id: "seed-rss-3001",
    title: "Community Poetry Open Mic",
    datetime: "2026-03-30T18:30:00",
    neighborhood: "Church Hill",
    venue: "Neighborhood Arts Space",
    category: "Literary",
    cost: "free",
    lat: 37.5359,
    lng: -77.4098,
    sourceName: "Bundled demo (offline fallback)",
    sourceUrl: "https://example.org/feed"
  },
  {
    id: "seed-cw-1003",
    title: "Family Clay Workshop",
    datetime: "2026-04-01T14:00:00",
    neighborhood: "Southside",
    venue: "Cultural Center Annex",
    category: "Workshop",
    cost: "paid",
    lat: 37.5,
    lng: -77.49,
    sourceName: "Bundled demo (offline fallback)",
    sourceUrl: "https://calendar.richmondcultureworks.org/"
  }
];

const regionCentroids = {
  "Arts District": { lat: 37.5486, lng: -77.4456 },
  "Jackson Ward": { lat: 37.5512, lng: -77.436 },
  "Scott's Addition": { lat: 37.5658, lng: -77.4673 },
  Church Hill: { lat: 37.5359, lng: -77.4098 },
  Southside: { lat: 37.5, lng: -77.49 },
  "RVA Downtown": { lat: 37.541, lng: -77.433 },
  "RVA Southside": { lat: 37.49, lng: -77.49 },
  "Fan District": { lat: 37.548, lng: -77.459 },
  "Museum District": { lat: 37.558, lng: -77.475 },
  Chesterfield: { lat: 37.4, lng: -77.55 },
  Henrico: { lat: 37.65, lng: -77.45 },
  Petersburg: { lat: 37.233, lng: -77.405 },
  "Richmond Area": { lat: 37.5407, lng: -77.436 }
};

let events = [];
let dataMode = "loading";

const filters = {
  neighborhood: "all",
  category: "all",
  cost: "all",
  date: "all"
};

const neighborhoodFilter = document.getElementById("neighborhoodFilter");
const categoryFilter = document.getElementById("categoryFilter");
const costFilter = document.getElementById("costFilter");
const dateFilter = document.getElementById("dateFilter");
const eventsList = document.getElementById("eventsList");
const resultsMeta = document.getElementById("resultsMeta");
const sourcesList = document.getElementById("sourcesList");
const lastUpdated = document.getElementById("lastUpdated");
const dataStatus = document.getElementById("dataStatus");
const pilotScope = document.getElementById("pilotScope");
const tonightBtn = document.getElementById("tonightBtn");
const resetBtn = document.getElementById("resetBtn");
const personalizedMessage = document.getElementById("personalizedMessage");

let map;
let markersLayer;

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function toDate(value) {
  return new Date(value);
}

function isThisWeekend(date, now) {
  const day = now.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7;
  const saturday = new Date(now);
  saturday.setDate(now.getDate() + daysUntilSaturday);
  saturday.setHours(0, 0, 0, 0);

  const sundayEnd = new Date(saturday);
  sundayEnd.setDate(saturday.getDate() + 1);
  sundayEnd.setHours(23, 59, 59, 999);

  return date >= saturday && date <= sundayEnd;
}

function isWithin7Days(date, now) {
  const in7 = new Date(now);
  in7.setDate(now.getDate() + 7);
  return date >= now && date <= in7;
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(toDate(dateValue));
}

function formatDistanceMiles(distanceKm) {
  const miles = distanceKm * 0.621371;
  return `${miles.toFixed(1)} mi`;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function normalizeLocalistEntry(entry) {
  const e = entry.event || entry;
  const inst = e.event_instances?.[0]?.event_instance;
  const start =
    inst?.start || (e.first_date ? `${e.first_date}T12:00:00` : null);
  if (!start) {
    return null;
  }

  const regions = e.filters?.event_region?.map((r) => r.name) || [];
  const topics = e.filters?.event_topic?.map((t) => t.name) || [];
  const types = e.filters?.event_type?.map((t) => t.name) || [];
  const neighborhood = regions[0] || "Richmond Area";
  const category = topics[0] || types[0] || "Arts & Culture";

  let lat = parseFloat(e.geo?.latitude);
  let lng = parseFloat(e.geo?.longitude);
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    const h = hashString(String(e.id));
    lat = 37.5407 + (h % 200) / 10000;
    lng = -77.436 + ((h >> 8) % 200) / 10000;
  }

  const cost = e.free ? "free" : "paid";
  const sourceUrl =
    e.url && String(e.url).trim().length > 0 ? e.url : e.localist_url;
  const venue = e.location_name || e.address || "Venue TBD";

  return {
    id: `cw-${e.id}`,
    title: e.title,
    datetime: start,
    neighborhood,
    venue,
    category,
    cost,
    lat,
    lng,
    sourceName: "CultureWorks Localist API",
    sourceUrl
  };
}

async function fetchCultureWorksEvents() {
  const res = await fetch(CULTUREWORKS_EVENTS_URL, { mode: "cors" });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const json = await res.json();
  const raw = json.events || [];
  const normalized = raw
    .map(normalizeLocalistEntry)
    .filter(Boolean)
    .filter((ev) => toDate(ev.datetime) >= new Date(Date.now() - 86400000));
  return normalized;
}

function optionize(selectEl, values, keepAll = true) {
  const current = selectEl.value;
  selectEl.innerHTML = "";
  if (keepAll) {
    const all = document.createElement("option");
    all.value = "all";
    all.textContent = "All";
    selectEl.appendChild(all);
  }
  values.forEach((value) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    selectEl.appendChild(opt);
  });
  if ([...selectEl.options].some((o) => o.value === current)) {
    selectEl.value = current;
  }
}

function renderSources() {
  sourcesList.innerHTML = "";
  sources.forEach((source) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${source.url}" target="_blank" rel="noreferrer">${source.name}</a> - ${source.notes}`;
    sourcesList.appendChild(li);
  });
  lastUpdated.textContent = new Date().toLocaleString();
}

function setDataStatus() {
  if (dataMode === "live") {
    dataStatus.textContent =
      "Live data: events loaded from CultureWorks Localist API (last fetch shown below).";
    dataStatus.className = "data-status data-status-live";
    pilotScope.innerHTML =
      "<strong>Pilot scope:</strong> CultureWorks Localist API plus planned connectors (Eventbrite org feeds, venue RSS). Not a comprehensive list of all RVA arts events.";
  } else {
    dataStatus.textContent =
      "Demo mode: could not load live API (CORS/network or file://). Showing bundled sample events.";
    dataStatus.className = "data-status data-status-demo";
    pilotScope.innerHTML =
      "<strong>Pilot scope:</strong> Bundled sample events for offline demo. Serve this folder over HTTP (any static server) for live CultureWorks data.";
  }
}

function getFilteredEvents() {
  const now = new Date();
  return events.filter((event) => {
    const date = toDate(event.datetime);
    const neighborhoodMatch =
      filters.neighborhood === "all" || event.neighborhood === filters.neighborhood;
    const categoryMatch = filters.category === "all" || event.category === filters.category;
    const costMatch = filters.cost === "all" || event.cost === filters.cost;

    let dateMatch = true;
    if (filters.date === "weekend") {
      dateMatch = isThisWeekend(date, now);
    } else if (filters.date === "7days") {
      dateMatch = isWithin7Days(date, now);
    } else {
      dateMatch = date >= now;
    }

    return neighborhoodMatch && categoryMatch && costMatch && dateMatch;
  });
}

function renderMap(filteredEvents) {
  if (!map || !markersLayer) {
    return;
  }

  markersLayer.clearLayers();
  filteredEvents.forEach((event) => {
    const marker = L.marker([event.lat, event.lng]).bindPopup(
      `<strong>${escapeHtml(event.title)}</strong><br/>${escapeHtml(
        event.neighborhood
      )}<br/>${formatDate(event.datetime)}<br/><a href="${event.sourceUrl}" target="_blank" rel="noreferrer">Original source</a>`
    );
    markersLayer.addLayer(marker);
  });

  if (filteredEvents.length > 0) {
    const bounds = L.latLngBounds(filteredEvents.map((e) => [e.lat, e.lng]));
    map.fitBounds(bounds.pad(0.2));
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPersonalizedMessage(filteredEvents) {
  const preferredCategory = localStorage.getItem("preferredCategory");
  const preferredNeighborhood = localStorage.getItem("preferredNeighborhood");
  if (!preferredCategory || !preferredNeighborhood) {
    personalizedMessage.textContent =
      "Tip: choose a category and neighborhood to get personalized suggestions.";
    return;
  }

  const matches = filteredEvents
    .filter(
      (event) =>
        event.category === preferredCategory && event.neighborhood === preferredNeighborhood
    )
    .slice(0, 3);

  if (matches.length === 0) {
    personalizedMessage.textContent = `Because you liked ${preferredCategory} in ${preferredNeighborhood}, watch for new events when feeds refresh.`;
    return;
  }

  personalizedMessage.textContent = `Because you liked ${preferredCategory} in ${preferredNeighborhood}, here are ${matches.length} matching event(s).`;
}

function renderEvents() {
  const filtered = getFilteredEvents();

  resultsMeta.textContent = `${filtered.length} event(s) found`;
  eventsList.innerHTML = "";

  if (filtered.length === 0) {
    eventsList.innerHTML = "<p>No events found for current filters.</p>";
    renderMap([]);
    renderPersonalizedMessage([]);
    return;
  }

  filtered
    .sort((a, b) => toDate(a.datetime) - toDate(b.datetime))
    .forEach((event) => {
      const card = document.createElement("article");
      card.className = "event-card";
      card.innerHTML = `
        <div class="event-top">
          <h3 class="event-title">${escapeHtml(event.title)}</h3>
          <span class="event-chip">${escapeHtml(event.cost)}</span>
        </div>
        <p class="event-meta">
          ${formatDate(event.datetime)} | ${escapeHtml(event.neighborhood)} | ${escapeHtml(
        event.venue
      )}
        </p>
        <p class="event-meta">Category: ${escapeHtml(event.category)} | Summary: ${escapeHtml(
        event.title
      )} in ${escapeHtml(event.neighborhood)} (${escapeHtml(event.cost)} admission).</p>
        <p class="event-links">
          Source: ${escapeHtml(event.sourceName)} -
          <a href="${event.sourceUrl}" target="_blank" rel="noreferrer">View original listing</a>
        </p>
      `;
      eventsList.appendChild(card);
    });

  renderMap(filtered);
  renderPersonalizedMessage(filtered);
}

function bindFilters() {
  neighborhoodFilter.addEventListener("change", (e) => {
    filters.neighborhood = e.target.value;
    if (filters.neighborhood !== "all") {
      localStorage.setItem("preferredNeighborhood", filters.neighborhood);
    }
    renderEvents();
  });

  categoryFilter.addEventListener("change", (e) => {
    filters.category = e.target.value;
    if (filters.category !== "all") {
      localStorage.setItem("preferredCategory", filters.category);
    }
    renderEvents();
  });

  costFilter.addEventListener("change", (e) => {
    filters.cost = e.target.value;
    renderEvents();
  });

  dateFilter.addEventListener("change", (e) => {
    filters.date = e.target.value;
    renderEvents();
  });

  tonightBtn.addEventListener("click", () => {
    filters.date = "weekend";
    dateFilter.value = "weekend";

    if (!navigator.geolocation) {
      resultsMeta.textContent = "Geolocation not available. Showing this weekend events.";
      renderEvents();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let nearestRegion = "all";
        let nearestDistance = Number.POSITIVE_INFINITY;

        Object.entries(regionCentroids).forEach(([name, coords]) => {
          const distanceKm = haversineKm(userLat, userLng, coords.lat, coords.lng);
          if (distanceKm < nearestDistance) {
            nearestDistance = distanceKm;
            nearestRegion = name;
          }
        });

        const hasRegion = events.some((ev) => ev.neighborhood === nearestRegion);
        if (hasRegion) {
          filters.neighborhood = nearestRegion;
          neighborhoodFilter.value = nearestRegion;
        } else {
          filters.neighborhood = "all";
          neighborhoodFilter.value = "all";
        }

        renderEvents();
        resultsMeta.textContent = `Tonight Near Me: nearest area “${nearestRegion}” (${formatDistanceMiles(
          nearestDistance
        )})${hasRegion ? "" : " — showing all regions with events this weekend"}`;
      },
      () => {
        resultsMeta.textContent =
          "Unable to access location. Showing this weekend events for all neighborhoods.";
        renderEvents();
      }
    );
  });

  resetBtn.addEventListener("click", () => {
    filters.neighborhood = "all";
    filters.category = "all";
    filters.cost = "all";
    filters.date = "all";
    neighborhoodFilter.value = "all";
    categoryFilter.value = "all";
    costFilter.value = "all";
    dateFilter.value = "all";
    renderEvents();
  });
}

function setupMap() {
  if (typeof L === "undefined") {
    return;
  }
  map = L.map("map").setView([37.5407, -77.436], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
}

function rebuildFilterOptions() {
  const neighborhoodValues = [...new Set(events.map((e) => e.neighborhood))].sort();
  const categories = [...new Set(events.map((e) => e.category))].sort();
  optionize(neighborhoodFilter, neighborhoodValues, true);
  optionize(categoryFilter, categories, true);
}

async function init() {
  dataStatus.textContent = "Loading events…";
  setupMap();

  try {
    events = await fetchCultureWorksEvents();
    if (events.length === 0) {
      throw new Error("No events returned");
    }
    dataMode = "live";
  } catch {
    events = [...seedEvents];
    dataMode = "demo";
  }

  setDataStatus();
  rebuildFilterOptions();
  bindFilters();
  renderSources();
  renderEvents();
}

init();
