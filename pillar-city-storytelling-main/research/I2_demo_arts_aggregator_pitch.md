# Winning the Richmond Arts Demo: Real Data, Real Users, Real Differentiation

## Executive Summary
To win the Richmond arts event discovery demo, the presentation must prove that cross-source aggregation solves a genuine local pain point in just 90 seconds. The core differentiator is that no single platform currently captures the entire Richmond arts scene. Eventbrite misses institutional site-only events, while individual gallery calendars require users to check multiple websites. By leveraging a "new to Richmond" persona and showcasing 8-12 real, upcoming events pulled from at least two distinct sources (e.g., Eventbrite and the ICA at VCU website), the demo will immediately establish credibility. A robust fallback strategy using cached data will mitigate live API risks, ensuring a flawless presentation that highlights aggregation over curation.

## Demo Objective and Win Criteria
The primary objective of the 90-second demo is to prove that cross-source aggregation solves a real Richmond discovery pain. Success is achieved when judges clearly see the tool as the "one place to look." 

To win, the demo must display 8–12 real events from at least two different sources, feature 3+ recognized local venues, and successfully demonstrate a live data pull (with a visible fallback mechanism). 

## User Persona Selection
The "new to Richmond" persona is the most strategic choice for a mixed judging panel. It universally resonates and bypasses the common insider objection of "I already follow these galleries on Instagram." 

### Persona Comparison and Demo Fit
| Persona | Core Pain | Likely Judge Bias Risk | Demo Fit |
| --- | --- | --- | --- |
| New to Richmond | Doesn't know sources/neighborhoods | Low (universal appeal) | Strong |
| Local arts supporter | Misses events after-the-fact | Medium ("I already know channels") | Medium |
| Parent seeking family arts | Overwhelmed by scattered sites | Medium (niche audience) | Medium-Strong |

**[Inference]** The "new to Richmond" persona will resonate more broadly with a mixed judging panel than the "arts insider" persona, which assumes judges share the same arts-going habits as the target user. The Valentine explicitly markets its "I Know Richmond" program to those "brand new to Richmond" [1], validating this demographic's active search for local connection.

## Source Strategy and Proof
Relying solely on Eventbrite is insufficient because many anchor arts organizations post exclusively on their own calendars. For example, the ICA at VCU lists multiple events directly on its site [2]. 

### Source Inventory and Feed Status
| Source | Type | Example Events/Dates | ICS/Feed Status |
| --- | --- | --- | --- |
| Eventbrite | Platform | The Valentine "Richmond History Makers," 4/23/2026 [3] | Public listing; API auth needed |
| ICA at VCU | Institutional calendar | 5+ events, 3/20–4/4/2026 [2] | HTML structured; no ICS confirmed |
| The Valentine | Institutional calendar | Multiple events Mar–Apr 2026 [4] | HTML structured; no ICS confirmed |
| Visual Arts Center | Institutional site | Richmond Poetry Fest 4/10–11 [5] | HTML structured; no ICS confirmed |
| 1708 Gallery | Institutional calendar | Calendar present [6] | Occasional Eventbrite usage [7] |

**[Inference]** A demo showing 8-12 real, upcoming Richmond arts events from at least two different data sources (e.g., Eventbrite + one institutional feed) will be more compelling to judges than a demo showing 30 events from a single source, because multi-source aggregation is the core value claim.

## Sample Events to Demo
Using real, recognizable data beats mock content for credibility. The following facts represent specific upcoming Richmond arts events current as of March 2026 that serve as compelling demo data points.

### Verified Upcoming Richmond Arts Events
| Date/Time | Event | Venue | Source |
| --- | --- | --- | --- |
| Fri Mar 20, 5:00 PM - 9:00 PM | 2026 VCUarts MFA Thesis Exhibition, Round 1 Opening | ICA at VCU | icavcu.org [2] |
| Thu Mar 19, 6:00 PM - 6:45 PM | Women in the Wickham House | The Valentine | thevalentine.org [4] |
| Sun Mar 22, 1:00 PM - 5:00 PM | I Know Richmond | The Valentine | thevalentine.org [4] |
| Sat Mar 28, 10:00 AM - 11:30 AM | Mindful Mornings: Beyond Looking | ICA at VCU | icavcu.org [2] |
| Fri Apr 10 - Sat Apr 11 | Richmond Poetry Fest | Visual Arts Center | visarts.org [5] |
| Thu Apr 23, 5:30 PM - 7:30 PM | 2026 Dominion Energy Richmond History Makers | The Valentine | Eventbrite [3] |

*Fact Check on Eventbrite/iCal Feeds*: The Black History Museum and Cultural Center of Virginia has events listed on Eventbrite [8]. 1708 Gallery has utilized Eventbrite for past workshops (e.g., InLight Lantern Making Workshop) [7], but maintains its primary calendar on its website [6]. The Visual Arts Center promotes events like the Richmond Poetry Fest directly on its site [5].

## Live vs Cached Data Strategy
Live-data risk is real; a failed API call kills trust faster than mock data. Teams must pre-fetch JSON snapshots the morning of the demo. On load, the app should attempt a live fetch and display a "Live pull: OK" badge. If it fails, it should auto-swap to a "Cached [Time]" badge. 

## Differentiation Narrative vs Do Richmond & Eventbrite
The tool's value is aggregation across sources, not curation. Eventbrite only shows Eventbrite-listed events. Do Richmond has its own curatorial calendar that requires manual submission, meaning many events are missing. 

## UX Walkthrough Blueprint (90-Second Script)

**[0-15 seconds] Problem Framing**
"Meet Sarah. She just moved to Richmond and wants to explore the Arts District this weekend. But right now, finding out what's happening means checking Eventbrite, then the ICA website, then 1708 Gallery's Instagram. It's scattered and frustrating. We built a single aggregator to fix this."

**[15-45 seconds] Tool Walkthrough**
*(Action: Open app, show feed of 8-12 events. Point to the 'Live Pull: OK' badge.)*
"Here is our live feed, pulling real data this morning. Notice these source tags. Here's the VCUarts MFA Thesis Opening at the ICA this Friday at 5 PM, pulled directly from their site. Right below it is the Richmond History Makers event at The Valentine, pulled from Eventbrite. *(Action: Click the ICA event card)*. Clicking in gives Sarah the exact time, venue, and a map pin for Jackson Ward."

**[JUDGE QUESTION]** *Judge: "Why would someone use this instead of just going to Do Richmond or checking Eventbrite?"*
*Response:* "Great question. Eventbrite only shows events ticketed on Eventbrite—it completely misses site-only listings like the ICA's Mindful Mornings. Do Richmond is fantastic, but it relies on manual editorial submissions, so it doesn't catch everything. We provide raw, automated aggregation across multiple sources so you only have to look in one place."

**[45-75 seconds] Value Proposition Articulation**
*(Action: Toggle a filter to show 'Eventbrite Only' vs 'Aggregated View')*
"Look at the difference when we only look at Eventbrite versus our aggregated view. We instantly double the discovery surface. Now, to be clear about what we *don't* do: we don't manually verify event accuracy, and we don't replace the galleries' own channels. We just get people to the door."

**[JUDGE QUESTION]** *Judge: "What happens if the gallery's website changes or the API goes down right now?"*
*Response:* "We built for resilience. *(Action: Toggle 'Offline Mode')*. If a live pull fails, the app instantly falls back to a cached snapshot taken this morning, ensuring users always have weekend plans available."

**[75-90 seconds] Closing Ask**
"In just 90 seconds, Sarah found three events across two neighborhoods without opening five tabs. Our next step is piloting data-sharing MOUs with the ICA and The Valentine, and adding a 'family-friendly' filter. Thank you."

## Risks, Unknowns, and Validation Plan
**Unknowns (what cannot be verified publicly):** 
* Whether Do Richmond's event calendar has any API access or is purely editorial.
* Whether the hackathon judging panel includes Richmond arts community members who would recognize specific venue names in the demo data.

To mitigate these risks, the demo relies on universally recognized anchor institutions (ICA, The Valentine) and maintains a transparent "What we don't do" slide to build trust through honesty.

## References

1. *I Know Richmond - The Valentine Museum*. https://thevalentine.org/explore/programs/i-know-richmond/
2. *Calendar - Institute for Contemporary Art - ICA.vcu.edu*. https://icavcu.org/calendar/
3. *2026 Dominion Energy Richmond History Makers Tickets, Thursday, Apr 23 from 5:30 pm to 7:30 pm | Eventbrite*. https://www.eventbrite.com/e/2026-dominion-energy-richmond-history-makers-tickets-1982298094964
4. *Events from March 19 – April 18 – The Valentine Museum*. https://thevalentine.org/events/
5. *Visual Arts Center of Richmond*. https://www.visarts.org/
6. *Calendar | 1708 Gallery | A Nonprofit Space for New Art | Richmond, VA*. https://www.1708gallery.org/events/calendar.php
7. *InLight Lantern Making Workshop @1708 Tickets, Wednesday, Oct 15, 2025 from 5:30 pm to 9 pm | Eventbrite*. https://www.eventbrite.com/e/inlight-lantern-making-workshop-1708-tickets-1788319755529
8. *
    Discover Black History Museum Events & Activities in Richmond, VA | Eventbrite
*. https://www.eventbrite.com/d/va--richmond/black-history-museum/