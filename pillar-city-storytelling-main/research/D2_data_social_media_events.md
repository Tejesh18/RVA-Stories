# Richmond Arts Aggregation in 2026: What Social Event Data You Can Actually Use

## Executive Summary
For a hackathon team building a Richmond arts aggregator, the most critical strategic decision is abandoning the assumption that social media APIs will provide structured event data. **Facebook and Instagram events are effectively closed to third-party developers.** Meta has locked down event access exclusively to Facebook Marketing Partners, and the required App Review and Business Verification processes are impossible to clear within a hackathon timeframe. 

Instead of fighting gated social APIs, the fastest and most reliable path to a working MVP is leveraging Richmond's existing local arts calendars. Platforms like CultureWorks, VisitRichmondVA, and VPM Artsline already aggregate, curate, and structure the exact data you need. By pivoting from a "social API scraper" to a "local calendar syndicator," your team can bypass Meta's restrictions, avoid Nextdoor's waitlists, and ship a fully populated, highly relevant arts aggregator in 48 hours.

## What Changed on Facebook (2018–2019) and Why It Still Matters in 2026

Following the Cambridge Analytica fallout in 2018, Meta fundamentally restructured its Graph API, permanently altering how third-party apps access event data. 

### The Lockdown of Public Events
The assumption that "public events are public data" is false under Meta's current architecture. The Graph API reference for the Event node explicitly states: "Access to Events on Users and Pages is only available to Facebook Marketing Partners" [1]. The `/page/events` edge has been restricted since 2018, meaning normal third-party app developers cannot request access to it [2]. 

Currently, the only events you can read via the API without being a Marketing Partner are:
* Events created directly by your app [1].
* Group events where the user access token belongs to an Admin of the Event [1].

### App Review and Business Verification Blockers
Even if you attempt to use standard Page permissions (like `pages_read_engagement` to read content posted by a Page [3]), the bureaucratic overhead is a hard blocker for a hackathon:
* **Review Timelines:** Meta states that App Review usually takes less than 72 hours, but "extended review" can take around seven days or until enough app traffic is evaluated [4]. 
* **Developer Reality:** Anecdotal reports from developers highlight the opacity of the process, with some waiting 15 days and facing up to 6 rejections just to get basic permissions approved [5].
* **Business Verification:** Advanced features like Page Public Content Access (PPCA) and Page Public Metadata Access (PPMA)—which allow apps to read public data for Pages without direct admin permissions—require both App Review and formal Business Verification [6] [7]. Business Verification requires receiving a verification code via a business phone number/email or verifying a business portfolio's domain [8].

**Strategic Takeaway:** Do not plan to ingest Facebook Events for the general public. If you must demonstrate Facebook integration for a hackathon, keep your app in Development Mode and only pull data from test events you directly administer using app-role testers.

## Instagram Reality Check — No Structured Event Objects

Instagram does not offer a structured "events" API. The platform is fundamentally designed around unstructured media.

### Media-Only API Access
The Meta Graph API for Instagram focuses on media, comments, insights, and messaging. There is no documented event object or edge. The closest feature available is the **Meta oEmbed Read**, which allows an app to get embed HTML and basic metadata to provide front-end views of public Facebook and Instagram pages, posts, and videos [9]. 

**Strategic Takeaway:** Treat Instagram strictly as a promotional channel or a source for unstructured visual content. If you want to feature Instagram content in your aggregator, use oEmbed to display specific posts from Richmond arts organizations, but do not rely on it for machine-readable event parameters (dates, times, venues, ticketing).

## Nextdoor and Meetup — Local Signal vs. Practical Access

Alternative social platforms offer better local signals than Meta, but they come with their own integration hurdles.

### Nextdoor's Gated Content APIs
Nextdoor has launched a Developer Site offering "Display Content APIs" to help organizations access public posts, events, and marketplace listings [10]. However, this is not a plug-and-play solution for a weekend hackathon:
* **Access is Gated:** Developers must fill out a form to request access to the APIs [11].
* **Events are "Coming Soon":** While the Search API allows developers to query posts and marketplace listings by geography, the specific endpoint for "Events" (which would return descriptions, start/end dates, and locations) is officially listed as "coming soon" [11].
* **Public Agency Feed:** Nextdoor does offer a Public Agency Feed API that retrieves local updates from over 5,500 verified public agencies [11]. 

### Meetup's Niche Arts Coverage
While Meetup provides API access (typically requiring OAuth and subject to rate limits), its content in Richmond skews heavily toward hobbyist gatherings, tech meetups, and classes rather than institutional arts events or gallery openings. 

**Strategic Takeaway:** Nextdoor is a strong medium-term bet for hyperlocal neighborhood events once their Events API goes live and you secure access. Meetup can be used as a supplemental feed for workshops, but neither should serve as the primary data backbone for your MVP.

## Platform Feasibility for a Hackathon Arts Aggregator

The following table outlines the viability of social platforms for a 48-hour hackathon build.

| Platform | Data Type | Access Without Review | Access With Review | Hackathon Feasibility | Strategic Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Facebook** | Events | Only events your app created or where you are a group admin [1]. | General Page/User events remain restricted to Marketing Partners [1]. | **Red** | Use only for mocked "owned events" in Dev Mode to show UI parity. |
| **Instagram** | Events | None (no structured event objects exist). | N/A | **Red** | Treat as unstructured media; use oEmbed for featured posts [9]. |
| **Nextdoor** | Events | None (requires application and approval) [11]. | "Events" endpoint is currently marked "coming soon" [11]. | **Red/Yellow** | Highly relevant local signal, but blocked by access requests and API maturity. |
| **Meetup** | Events | OAuth required to fetch public group/upcoming events. | N/A | **Yellow** | Good for supplemental content (classes/workshops); timebox integration to avoid OAuth friction. |

*Key Takeaway:* Green-light local calendars and direct submissions; yellow-light Meetup; red-light Facebook and Instagram events.

## Richmond-Specific Alternative Backbones

Since social media APIs are inaccessible or unstructured, local Richmond arts calendars must serve as your primary data sources. These platforms already do the heavy lifting of curating and structuring event data.

| Source | Coverage & Content | Access Method | Pros | Cons |
| :--- | :--- | :--- | :--- | :--- |
| **CultureWorks (Localist)** | Broad arts/culture across RVA; features daily listings, venues, and ticket links [12]. | Request JSON/CSV/ICS export; explore Localist endpoints; scrape with permission. | Highly structured, curated, includes a "Submit an event" workflow [12]. | Formal data export may require a partnership agreement. |
| **VisitRichmondVA** | Region-wide events, including a dedicated Arts & Culture section (art walks, historic theaters, ballet) [13] [14]. | Request partner feed or scrape with permission. | Tourism-backed breadth and reliability. | Schema may vary; includes non-arts events that require filtering. |
| **VPM Artsline** | Weekly curated arts listings broadcasted on VPM and published online [15] [16]. | Align on weekly export from Style Weekly/VPM. | High editorial credibility; sponsored by Modlin Center for the Arts [15]. | Weekly cadence rather than a live, real-time stream. |
| **Major Venues** | High-value institutional events (VMFA, ICA at VCU, local galleries). | ICS/RSS feeds; press pages. | Authoritative, direct-from-source information. | Fragmented; requires building multiple individual connectors. |

*Key Takeaway:* CultureWorks is your most valuable target. Their calendar is built on the Localist platform, which inherently structures data well, and they actively solicit community submissions [12]. 

## MVP Data Pipeline Blueprint — Ship in 48 Hours

To succeed in a hackathon environment, bypass API gatekeeping entirely and build a partner-first ingestion pipeline.

### 1. Ingestion Layer
* **Primary:** Build CSV/ICS importers for CultureWorks, VisitRichmondVA, and major venue calendars. 
* **Secondary:** Implement a public Google Form for direct community submissions.
* **Optional:** Timebox a Meetup OAuth adapter (maximum 2 hours) to pull in local arts classes.

### 2. Normalization & Enrichment
* Map all incoming feeds to a common schema: `Title`, `Start_Time`, `End_Time`, `Venue_Name`, `Address`, `Cost`, `Ticket_URL`, and `Source_Attribution`.
* Geocode venues once per unique place to enable map-based UI features.

### 3. De-duplication
* Implement fuzzy matching based on `Title` + `Start_Time` + `Venue`. 
* If duplicates are found, prioritize institutional sources (e.g., direct venue ICS) over aggregated sources.

### 4. Admin & Frontend
* Route Google Form submissions through a simple Airtable or Notion queue for rapid approval before they hit the live database.
* Build the frontend with filters for date, neighborhood, and artistic discipline, ensuring every event clearly attributes its original source (e.g., "Listed via CultureWorks").

## Compliance and Risk Management — Avoid ToS Pitfalls

* **Meta ToS:** Do not attempt to scrape Facebook public events. This violates Meta's Terms of Service and will result in IP bans. Use the approved oEmbed feature for public Instagram/Facebook posts [9].
* **Nextdoor:** Respect their developer guidelines. Do not attempt to bypass the application process, and acknowledge that the Events API is not yet fully deployed [11].
* **Local Sites:** When utilizing data from CultureWorks, VisitRichmond, or VPM Artsline, request permission for CSV/ICS exports or scraping. Cache the data responsibly to avoid hitting their servers with high traffic, and always provide clear attribution and back-links to the original listing.
* **Privacy:** Store only event-level public data. Avoid scraping Personally Identifiable Information (PII) beyond public contact details provided for the event.

## Go/No-Go Decisions and Next Steps

To maximize your hackathon weekend, commit strictly to accessible local backbones and aggressively de-scope gated social APIs.

### Immediate Decisions
* **GO:** CultureWorks calendar, VisitRichmond events, VPM Artsline weekly feed, direct venue ICS/RSS feeds, and a custom public submission form.
* **CONDITIONAL:** Meetup (only if OAuth can be completed in under 2 hours and yields high-quality arts workshops).
* **NO-GO:** Facebook public/Page events, Instagram "events", and Nextdoor events.

### Next Steps (First 6-8 Hours of Hackathon)
1. **Outreach:** Immediately email CultureWorks and VisitRichmondVA requesting a CSV/ICS export or permission to utilize their public feeds for the hackathon.
2. **Build:** Construct the CSV/ICS importer and the Google Form -> Airtable ingestion pipeline.
3. **Pilot:** Manually import one week of data from CultureWorks and VisitRichmondVA to populate the database. Add 10 high-value events manually from major venues to ensure immediate UI population.
4. **Validate:** Spot-check 50 events for schema accuracy, geocoding success, and proper source attribution before shifting focus to frontend development.

## References

1. *Event - Graph API Reference - Meta for Developers*. https://developers.facebook.com/docs/graph-api/reference/event/
2. *Permission to get events from Facebook Page - Stack Overflow*. https://stackoverflow.com/questions/52640955/permission-to-get-events-from-facebook-page
3. *Permissions Reference - Graph API - Meta for Developers*. https://developers.facebook.com/docs/permissions/
4. *About app review | Meta Business Help Centre*. https://www.facebook.com/business/help/1122417471594221?locale=en_GB
5. *Navigating the Facebook App Review Process - Dancer's Code*. https://dancerscode.com/posts/navigating-the-facebook-app-review-process/
6. *Page Public Content Access - Graph API - Meta for Developers*. https://developers.facebook.com/docs/features-reference/page-public-content-access/
7. *Page Public Metadata Access - Graph API - Meta for Developers*. https://developers.facebook.com/docs/features-reference/page-public-metadata-access/
8. *About Business Verification in Meta Business Suite | Meta Business Help Center*. https://www.facebook.com/business/help/1095661473946872
9. *Features Reference - Graph API - Meta for Developers*. https://developers.facebook.com/docs/features-reference/
10. *Nextdoor Launches Developer Site | Nextdoor*. https://about.nextdoor.com/press-releases/partnerships/nextdoor-launches-developer-site-to-connect-partners-with-the-power-of-local
11. *Public Agency Feed API*. https://developer.nextdoor.com/docs/trending-posts-api-copy
12. *Events Calendar - Richmond CultureWorks*. https://calendar.richmondcultureworks.org/
13. *Calendar of Events in Richmond | Things To Do*. https://www.visitrichmondva.com/events
14. *Arts & Culture Events in Richmond, VA | Entertainment*. https://www.visitrichmondva.com/events/arts-and-culture/
15. *Artsline*. https://www.vpm.org/artsline
16. *Artsline*. https://www.vpm.org/tags/artsline