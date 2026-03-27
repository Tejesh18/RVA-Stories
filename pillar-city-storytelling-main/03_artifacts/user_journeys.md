# User Journey Maps — A City That Tells Its Stories

Note: Journeys are constructed from the problem statements and rubric context. They are working hypotheses pending verification. Each friction point should reference an `evidence_log.md` id when verified.

---

## Journey 1 — Resident New to Richmond Trying to Find Arts Events This Weekend

- **User goal:** Find something interesting — a gallery opening, a live music event, a community performance — happening this weekend in Richmond without spending an hour searching.
- **User profile:** Moved to Richmond 8 months ago. Curious about the arts scene. Uses Google and Instagram mostly. Does not know the local media landscape. Is not plugged into any arts organization mailing lists yet.

### Steps taken
1. Googles "things to do in Richmond this weekend" — returns generic tourism results and Eventbrite listings; misses most gallery openings and neighborhood events
2. Checks Instagram — finds a few venues they follow but realizes they are only seeing a fraction of what is happening
3. Tries Style Weekly website — finds event listings but the interface is cluttered and hard to navigate by neighborhood or event type
4. Asks a friend — friend mentions three events they did not know about; realizes local knowledge is the real discovery mechanism
5. Checks Facebook Events — finds some things but their account is minimal and the algorithm surfaces events from accounts they already follow
6. Gives up and decides to go to a familiar bar instead; misses the gallery opening in Church Hill they would have enjoyed

### Pages and systems touched
- Google, Instagram, Style Weekly, Facebook Events, Eventbrite

### Friction points
- Event information is scattered across 8+ websites and social accounts
- No single place to see "arts and culture events this weekend in Richmond"
- Gallery and small venue events are largely absent from major aggregators
- Discovery depends heavily on who you already know and follow
- Neighborhood-based filtering does not exist on any platform they tried

### User questions by step
- Is there a single place to see everything arts-related happening in Richmond this weekend?
- How do I filter by neighborhood? I want to explore Carytown vs. Scott's Addition vs. Church Hill
- Why isn't that gallery opening showing up anywhere I looked?
- What are the "right" local sources to follow?

### Prototype opportunities
- Unified Richmond arts event aggregator pulling from Richmond CultureWorks iCal/RSS feed (calendar.richmondcultureworks.org) + additional organization RSS/iCal feeds (corrected 2026-03-18; Eventbrite public location search API deprecated Feb 2020)
- Neighborhood-filtered discovery feed
- "Arts scene 101" onboarding for new residents (which sources to follow, which districts to explore)

---

## Journey 2 — 75-Year-Old Longtime Resident of Church Hill With Rich Neighborhood History

- **User goal:** Share stories about Church Hill from the 1960s through today before her generation's memories are lost — without having to navigate complex technology or be processed by an institution.
- **User profile:** Born and raised in Church Hill. Watched the neighborhood change dramatically over six decades. Knows every house, family, business, and gathering spot that no longer exists. Her friends are passing away. She worries that the neighborhood's Black history and community life are disappearing from collective memory. She uses a smartphone for calls and WhatsApp but is not comfortable with forms or apps with many steps. She speaks English and Spanish.

### Steps taken
1. Reads an article about Richmond's rapid neighborhood change and feels the need to share her memories but does not know where to send them
2. Looks for a way to contact "the City" — finds the Richmond city website but cannot find a clear place to share neighborhood history
3. Hears about the Valentine museum — is not sure if her stories are "important enough" for a museum; does not want to be interviewed or recorded formally
4. Mentions her stories to her pastor, who suggests connecting with a local history group — but that group meets on Tuesday afternoons and she has medical appointments
5. Gives up. Her stories stay in her head.

### Pages and systems touched
- Richmond city website (rva.gov), possibly The Valentine website

### Friction points
- No visible low-barrier channel for sharing neighborhood stories with "the City"
- Formal institutions (museums, oral history programs) feel inaccessible or gatekept
- Time and mobility constraints prevent in-person participation
- Technology comfort is limited — voice is her natural medium, not typing
- No Spanish-language option on any city engagement channel she encountered
- Uncertainty about whether her stories "matter" or will be used

### User questions by step
- Is there somewhere I can share what I know about Church Hill before it's all forgotten?
- Does it have to be a formal interview? Can I just tell my story?
- Will anyone actually read or use what I share?
- Can I do this in Spanish?
- Can I do this by voice, not typing?

### Prototype opportunities
- Voice-first story collection portal (record a voice memo, optional typed response)
- Guided prompt interface that structures the story without feeling like a survey
- Multilingual support (at minimum English and Spanish)
- Clear consent and "how your story will be used" explanation before submission
- Acknowledgment and follow-up mechanism so contributors know their story was received
- Neighborhood or address tagging so stories are place-anchored

---

## Cross-Journey Observations

Both journeys share a common failure pattern: the information or the story **exists** but the **infrastructure to surface or share it is absent or inaccessible**. The user in Journey 1 would have attended the gallery opening if they had known about it. The user in Journey 2 has irreplaceable knowledge that she cannot find a way to share.

This is a discoverability and access problem, not a content or importance problem. The opportunity for technology is not to create new content but to create better pipes between existing content and people who need it.

Key design principle shared by both: **lowest viable friction**. The best MVP for either journey is the one that removes the most barriers with the fewest required steps.
