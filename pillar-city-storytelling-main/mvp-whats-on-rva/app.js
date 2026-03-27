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
    budgetTier: "free",
    priceMax: 0,
    numAttending: 8,
    sponsored: false,
    familyFriendly: true,
    wheelchairAccessible: true,
    firstTimeFriendly: true,
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
    budgetTier: "paid",
    priceMax: 25,
    numAttending: 120,
    sponsored: false,
    familyFriendly: false,
    wheelchairAccessible: true,
    firstTimeFriendly: false,
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
    budgetTier: "under10",
    priceMax: 8,
    numAttending: 4,
    sponsored: false,
    familyFriendly: true,
    wheelchairAccessible: false,
    firstTimeFriendly: true,
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
    budgetTier: "free",
    priceMax: 0,
    numAttending: 3,
    sponsored: false,
    familyFriendly: true,
    wheelchairAccessible: true,
    firstTimeFriendly: true,
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
    budgetTier: "paid",
    priceMax: 35,
    numAttending: 15,
    sponsored: true,
    familyFriendly: true,
    wheelchairAccessible: true,
    firstTimeFriendly: true,
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
  "Richmond Area": { lat: 37.5407, lng: -77.436 },
  VCU: { lat: 37.5495, lng: -77.451 }
};

let events = [];
let dataMode = "loading";

const filters = {
  neighborhood: "all",
  category: "all",
  cost: "all",
  date: "all",
  eqFamily: false,
  eqWheelchair: false,
  eqFirstTime: false
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
const tonightRvaBtn = document.getElementById("tonightRvaBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const resetBtn = document.getElementById("resetBtn");
const personalizedMessage = document.getElementById("personalizedMessage");
const chatInput = document.getElementById("chatInput");
const chatSearchBtn = document.getElementById("chatSearchBtn");
const chatHint = document.getElementById("chatHint");
const hiddenGemsList = document.getElementById("hiddenGemsList");
const surpriseBanner = document.getElementById("surpriseBanner");
const eqFamily = document.getElementById("eqFamily");
const eqWheelchair = document.getElementById("eqWheelchair");
const eqFirstTime = document.getElementById("eqFirstTime");

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

function extractPriceMaxFromLocalist(e) {
  if (e.free) {
    return 0;
  }
  const tc = e.ticket_cost;
  if (tc == null || String(tc).trim() === "") {
    return null;
  }
  const s = String(tc);
  if (/free/i.test(s)) {
    return 0;
  }
  const nums = [];
  const re = /\$?\s*(\d+(?:\.\d+)?)/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    nums.push(parseFloat(m[1]));
  }
  if (nums.length === 0) {
    return null;
  }
  return Math.min(...nums);
}

function computeBudgetTier(e, priceMax) {
  if (e.free || priceMax === 0) {
    return "free";
  }
  if (priceMax != null && priceMax <= 10) {
    return "under10";
  }
  return "paid";
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

function isWithinNextHours(date, now, hours) {
  const end = new Date(now.getTime() + hours * 3600000);
  return date >= now && date <= end;
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
  const audiences = e.filters?.event_target_audience?.map((a) => a.name) || [];
  const neighborhood = regions[0] || "Richmond Area";
  const category = topics[0] || types[0] || "Arts & Culture";

  let lat = parseFloat(e.geo?.latitude);
  let lng = parseFloat(e.geo?.longitude);
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    const h = hashString(String(e.id));
    lat = 37.5407 + (h % 200) / 10000;
    lng = -77.436 + ((h >> 8) % 200) / 10000;
  }

  const priceMax = extractPriceMaxFromLocalist(e);
  const budgetTier = computeBudgetTier(e, priceMax);
  const cost = budgetTier === "free" ? "free" : "paid";

  const familyFriendly = audiences.some((a) => /family/i.test(a));
  const wheelchairAccessible = audiences.some((a) => /wheelchair/i.test(a));
  const firstTimeFriendly =
    familyFriendly ||
    audiences.some((a) => /all ages/i.test(a)) ||
    /open\s*mic|gallery|exhibit|family/i.test(e.title || "");

  const sourceUrl =
    e.url && String(e.url).trim().length > 0 ? e.url : e.localist_url;
  const venue = e.location_name || e.address || "Venue TBD";
  const numAttending = inst?.num_attending ?? -1;

  return {
    id: `cw-${e.id}`,
    title: e.title,
    datetime: start,
    neighborhood,
    venue,
    category,
    cost,
    budgetTier,
    priceMax,
    numAttending,
    sponsored: !!e.sponsored,
    familyFriendly,
    wheelchairAccessible,
    firstTimeFriendly,
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

function matchesCostFilter(event) {
  if (filters.cost === "all") {
    return true;
  }
  if (filters.cost === "free") {
    return event.budgetTier === "free";
  }
  if (filters.cost === "under10") {
    return event.budgetTier === "free" || event.budgetTier === "under10";
  }
  if (filters.cost === "paid") {
    return event.budgetTier === "paid";
  }
  return true;
}

function matchesDateFilter(date, now) {
  if (filters.date === "weekend") {
    return isThisWeekend(date, now);
  }
  if (filters.date === "7days") {
    return isWithin7Days(date, now);
  }
  if (filters.date === "tonight6h") {
    return isWithinNextHours(date, now, 6);
  }
  return date >= now;
}

function matchesEquityFilters(event) {
  if (filters.eqFamily && !event.familyFriendly) {
    return false;
  }
  if (filters.eqWheelchair && !event.wheelchairAccessible) {
    return false;
  }
  if (filters.eqFirstTime && !event.firstTimeFriendly) {
    return false;
  }
  return true;
}

function getFilteredEvents() {
  const now = new Date();
  return events.filter((event) => {
    const date = toDate(event.datetime);
    const neighborhoodMatch =
      filters.neighborhood === "all" || event.neighborhood === filters.neighborhood;
    const categoryMatch = filters.category === "all" || event.category === filters.category;
    const costMatch = matchesCostFilter(event);
    const dateMatch = matchesDateFilter(date, now);
    const equityMatch = matchesEquityFilters(event);
    return neighborhoodMatch && categoryMatch && costMatch && dateMatch && equityMatch;
  });
}

function getUpcomingEvents() {
  const now = new Date();
  return events.filter((e) => toDate(e.datetime) >= now);
}

function getHiddenGems(pool) {
  return [...pool]
    .filter((e) => !e.sponsored)
    .sort((a, b) => {
      const na = a.numAttending >= 0 ? a.numAttending : 50;
      const nb = b.numAttending >= 0 ? b.numAttending : 50;
      return na - nb;
    })
    .slice(0, 5);
}

function renderBadges(event) {
  const badges = [];
  if (event.firstTimeFriendly) {
    badges.push('<span class="badge badge-first">First-time friendly</span>');
  }
  if (event.familyFriendly) {
    badges.push('<span class="badge badge-family">Family friendly</span>');
  }
  if (event.wheelchairAccessible) {
    badges.push('<span class="badge badge-a11y">Wheelchair accessible</span>');
  }
  if (event.budgetTier === "free" || event.budgetTier === "under10") {
    badges.push('<span class="badge badge-budget">Budget-friendly</span>');
  }
  if (
    event.numAttending >= 0 &&
    event.numAttending < 15 &&
    !event.sponsored
  ) {
    badges.push('<span class="badge badge-gem">Hidden gem</span>');
  }
  return badges.length ? `<p class="event-badges">${badges.join(" ")}</p>` : "";
}

function plainLanguageBlurb(event) {
  const bits = [event.category, event.neighborhood].filter(Boolean);
  return `${escapeHtml(event.title)} — ${bits.join(" · ")}. Source-linked listing; see original site for full details.`;
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

function renderEventCard(event) {
  const card = document.createElement("article");
  card.className = "event-card";
  card.dataset.eventId = event.id;
  const priceLine =
    event.priceMax != null && event.priceMax > 0
      ? `Est. from listing: around $${event.priceMax}`
      : event.budgetTier === "free"
        ? "Free"
        : "See listing for price";
  card.innerHTML = `
        <div class="event-top">
          <h3 class="event-title">${escapeHtml(event.title)}</h3>
          <span class="event-chip">${escapeHtml(event.budgetTier === "free" ? "free" : event.budgetTier === "under10" ? "≤$10" : "paid")}</span>
        </div>
        ${renderBadges(event)}
        <p class="event-meta">
          ${formatDate(event.datetime)} | ${escapeHtml(event.neighborhood)} | ${escapeHtml(
            event.venue
          )}
        </p>
        <p class="event-plain">${plainLanguageBlurb(event)}</p>
        <p class="event-meta">${escapeHtml(priceLine)}</p>
        <p class="event-links">
          Source: ${escapeHtml(event.sourceName)} -
          <a href="${event.sourceUrl}" target="_blank" rel="noreferrer">View original listing</a>
        </p>
      `;
  return card;
}

function renderHiddenGems() {
  const pool = getFilteredEvents();
  const base = pool.length ? pool : getUpcomingEvents();
  const gems = getHiddenGems(base);
  hiddenGemsList.innerHTML = "";
  if (gems.length === 0) {
    hiddenGemsList.innerHTML =
      "<p class=\"note\">No hidden gems match right now — try widening filters.</p>";
    return;
  }
  gems.forEach((event) => {
    hiddenGemsList.appendChild(renderEventCard(event));
  });
}

function renderEvents() {
  const filtered = getFilteredEvents();

  resultsMeta.textContent = `${filtered.length} event(s) found`;
  eventsList.innerHTML = "";
  surpriseBanner.innerHTML = "";

  if (filtered.length === 0) {
    eventsList.innerHTML = "<p>No events found for current filters.</p>";
    renderMap([]);
    renderPersonalizedMessage([]);
    renderHiddenGems();
    return;
  }

  filtered
    .sort((a, b) => toDate(a.datetime) - toDate(b.datetime))
    .forEach((event) => {
      eventsList.appendChild(renderEventCard(event));
    });

  renderMap(filtered);
  renderPersonalizedMessage(filtered);
  renderHiddenGems();
}

function applyChatQuery(raw) {
  const q = raw.toLowerCase().trim();
  if (!q) {
    chatHint.textContent = "";
    return;
  }

  chatHint.textContent = "";
  filters.neighborhood = "all";
  filters.category = "all";
  filters.cost = "all";
  filters.date = "all";
  filters.eqFamily = false;
  filters.eqWheelchair = false;
  filters.eqFirstTime = false;

  if (/\b(free|no cost)\b/.test(q)) {
    filters.cost = "free";
  }
  if (/\b(under\s*\$?10|under\s*ten|cheap|budget|student)\b/.test(q)) {
    filters.cost = "under10";
  }
  if (/\bweekend\b/.test(q)) {
    filters.date = "weekend";
  } else if (/\btonight\b/.test(q) || /\b(next\s*6|6\s*hour)\b/.test(q)) {
    filters.date = "tonight6h";
  }
  let hint = "";
  if (/\bfriday\b/.test(q)) {
    hint =
      "Tip: use “This weekend” and scan by date for Friday — day-of-week filter can be a stretch goal.";
  }
  if (/\bmusic|jazz|concert\b/.test(q)) {
    const music = [...new Set(events.map((e) => e.category))].find((c) =>
      /music|concert|perform/i.test(c)
    );
    if (music) {
      filters.category = music;
    }
  }
  if (/\bart|gallery|visual\b/.test(q)) {
    const art = [...new Set(events.map((e) => e.category))].find((c) =>
      /visual|art|exhibit/i.test(c)
    );
    if (art) {
      filters.category = art;
    }
  }
  if (/\bvcu\b/.test(q)) {
    filters.neighborhood = events.some((e) => e.neighborhood === "Fan District")
      ? "Fan District"
      : "RVA Downtown";
  }
  if (/\b(downtown|broad street|arts district)\b/.test(q)) {
    const d = [...new Set(events.map((e) => e.neighborhood))].find((n) =>
      /downtown|broad|arts/i.test(n)
    );
    if (d) {
      filters.neighborhood = d;
    }
  }
  if (/\bjackson ward\b/.test(q)) {
    const j = [...new Set(events.map((e) => e.neighborhood))].find((n) =>
      /jackson/i.test(n)
    );
    if (j) {
      filters.neighborhood = j;
    }
  }
  if (/\bfamily|kids\b/.test(q)) {
    filters.eqFamily = true;
  }
  if (/\bwheelchair|accessible\b/.test(q)) {
    filters.eqWheelchair = true;
  }
  if (/\bfirst.?time|newcomer|beginner\b/.test(q)) {
    filters.eqFirstTime = true;
  }
  if (/\b(friends|group)\b/.test(q) && /\bfree\b/.test(q) && /\bmusic\b/.test(q)) {
    filters.cost = "free";
    filters.date = "tonight6h";
    const downtown = [...new Set(events.map((e) => e.neighborhood))].find((n) =>
      /downtown|jackson|broad/i.test(n)
    );
    if (downtown) {
      filters.neighborhood = downtown;
    }
  }

  neighborhoodFilter.value = filters.neighborhood;
  categoryFilter.value = filters.category;
  costFilter.value = filters.cost;
  dateFilter.value = filters.date;
  eqFamily.checked = filters.eqFamily;
  eqWheelchair.checked = filters.eqWheelchair;
  eqFirstTime.checked = filters.eqFirstTime;

  chatHint.textContent =
    hint ||
    "Applied filters from your message (smart rules — works offline; swap in an API later for full AI).";
  setTimeout(() => {
    chatHint.textContent = "";
  }, 6000);
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

  eqFamily.addEventListener("change", (e) => {
    filters.eqFamily = e.target.checked;
    renderEvents();
  });
  eqWheelchair.addEventListener("change", (e) => {
    filters.eqWheelchair = e.target.checked;
    renderEvents();
  });
  eqFirstTime.addEventListener("change", (e) => {
    filters.eqFirstTime = e.target.checked;
    renderEvents();
  });

  chatSearchBtn.addEventListener("click", () => {
    applyChatQuery(chatInput.value);
    renderEvents();
  });
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      applyChatQuery(chatInput.value);
      renderEvents();
    }
  });

  surpriseBtn.addEventListener("click", () => {
    const pool = getFilteredEvents();
    const fallback = getUpcomingEvents();
    const pickFrom = pool.length ? pool : fallback;
    if (!pickFrom.length) {
      surpriseBanner.textContent = "No events to pick from — relax filters.";
      return;
    }
    const choice = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    surpriseBanner.innerHTML = `<strong>Surprise pick:</strong> ${escapeHtml(choice.title)} — ${formatDate(
      choice.datetime
    )} · <a href="${choice.sourceUrl}" target="_blank" rel="noreferrer">View listing</a>`;
    const el = document.querySelector(`[data-event-id="${choice.id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("event-card-spotlight");
      setTimeout(() => el.classList.remove("event-card-spotlight"), 2500);
    }
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

  tonightRvaBtn.addEventListener("click", () => {
    filters.date = "tonight6h";
    dateFilter.value = "tonight6h";
    renderEvents();
    resultsMeta.textContent =
      "Tonight in RVA: showing events starting in the next 6 hours (best with live CultureWorks data).";
  });

  resetBtn.addEventListener("click", () => {
    filters.neighborhood = "all";
    filters.category = "all";
    filters.cost = "all";
    filters.date = "all";
    filters.eqFamily = false;
    filters.eqWheelchair = false;
    filters.eqFirstTime = false;
    neighborhoodFilter.value = "all";
    categoryFilter.value = "all";
    costFilter.value = "all";
    dateFilter.value = "all";
    eqFamily.checked = false;
    eqWheelchair.checked = false;
    eqFirstTime.checked = false;
    chatInput.value = "";
    chatHint.textContent = "";
    surpriseBanner.innerHTML = "";
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
