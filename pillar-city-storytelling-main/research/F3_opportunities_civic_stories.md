# Richmond Civic Storytelling MVP: A Credible, Trust-First Demo Blueprint

## Executive Summary
Building a civic storytelling prototype for Richmond requires balancing technical simplicity with profound historical sensitivity. Trust-by-design is non-negotiable: staged, plain-language consent significantly boosts participation, as evidenced by best practices from the Oral History Association and StoryCorps [1] [2]. To ensure the demo resonates immediately, prompts must be place-based rather than abstract, anchoring on highly visible sites like St. John's Church and the Richmond Slave Trail [3] [4]. 

Because live submissions during a hackathon are often sparse, credibility depends on pre-seeding the map with respected local archives, such as The Valentine and VCU Libraries [5] [6]. Furthermore, handling hard histories—like the displacement of nearly 3,000 individuals during the Fulton neighborhood urban renewal [7] —demands trauma-informed guardrails, including content notices and explicit options to anonymize submissions. Ultimately, a successful MVP will demonstrate a seamless, respectful capture flow, convincing seeded stories, a transparent "use pathway," and bilingual accessibility that proves the tool is ready for real community deployment.

## Purpose and Success Criteria
The primary goal of this hackathon prototype is to deliver a credible, trust-first Minimum Viable Product (MVP) that functions flawlessly even with low live user volume. Success is defined by a simple, respectful capture flow, convincing seeded stories, a clear use pathway, and Richmond-specific prompts that feel authentically "of this place." The demo must prove that the technology can safely and ethically steward community memory.

## Minimum Viable Feature Set
To build a compelling demo without over-engineering, the prototype should focus on eight essential features across four core areas that demonstrate end-to-end value.

### Intake Essentials: Who, What, Where, When, and Consent
* **1-Screen Capture:** A streamlined form collecting a name or alias, neighborhood/site (via dropdown and map pin), a short title, and 60–180 seconds of audio.
* **Optional Text Summary:** A brief text field for users who prefer to write or want to summarize their audio.
* **Tiered Consent:** Clear options for public, community-only, or private sharing [2].
* **Language Toggle:** An immediate switch between English and Spanish UI.

### Playback Essentials: Map and List Views
* **Interactive Map:** A map pre-populated with 5–7 seeded pins at key Richmond locations (e.g., St. John's Church, Lumpkin's Jail, Fulton).
* **List View:** A secondary feed with filters for site and theme to aid discovery.

### Trust Essentials: Plain Language "What Happens Next"
* **Use Pathway:** A highly visible 3-sentence explanation of where the story goes, who moderates it, and how it will be used.
* **Control Mechanisms:** Moderation standards and a clear link to request removal or editing of a submitted story.

### Admin Essentials: Seed Management and Moderation
* **Content Management:** The ability to upload seeded audio and metadata.
* **Moderation Queue:** A simple approve/hold dashboard with a toggle to redact names before publishing.

## Richmond-Tailored Guided Prompts
Prompts rooted in specific Richmond places and historical moments increase recall and participation. These prompts are designed to be dignity-forward, uplifting agency and community repair.

### 5 Suggested Prompts for the Demo
1. **Church Hill / St. John's Church:** "Standing near St. John's, where Patrick Henry spoke in 1775, what does 'liberty' mean in your life today? Tell a time you had to choose courage." [4] [8]
2. **Shockoe Bottom & Lumpkin's Jail:** "When you pass Shockoe Bottom, what story from your family or community rises up? How should this place be remembered?" [9] [10]
3. **African Burial Ground / Slave Trail:** "Share a moment when you felt the weight—or the healing—of Richmond's Slave Trail. Who were you with? What did you learn?" [3]
4. **Fulton (East End):** "If you or your family lived in Fulton, what was 'home' like before the bulldozers—and what should return if we rebuild?" [11] [7]
5. **James River Crossings:** "Tell us about a crossing—a bridge, a move, a change—that shaped your life in Richmond. Who helped you make it?"

## Consent Flow Content
Staged, plain-language consent lowers friction and signals respect. Bilingual consent is a baseline requirement for inclusion in Richmond, mirroring best practices from institutional review boards [12] [13].

### English (In-App Concise Version)
* **Your Control:** You're in control. You can stop anytime, skip questions, or choose not to share [1].
* **Use Options:** How we may use your story: 1) Public archive and map (anyone can hear), 2) Community-only listening (events and partners), or 3) Private to the project team (not shared) [2].
* **Removal:** You can ask us to remove your story later. Use the link we'll email or call/text [number].
* **Agreements:** 
 * [Checkbox] I agree to record and share my story as I've selected.
 * [Checkbox] I am over 18. (If not, a parent/guardian must consent).
 * [Checkbox] I allow my first name/alias to be displayed.
 * [Checkbox] I prefer to stay anonymous in public displays.
* **Note:** Sensitive content is okay. Please avoid full legal names or addresses of others without permission.

### Español (Versión Concisa en la Aplicación)
* **Su Control:** Usted tiene el control. Puede parar en cualquier momento, saltar preguntas o decidir no compartir [1].
* **Opciones de Uso:** Cómo podemos usar su historia: 1) Archivo y mapa públicos (cualquiera puede escuchar), 2) Solo comunidad (eventos y socios), o 3) Privado para el equipo del proyecto (no se comparte).
* **Retiro:** Puede pedirnos que retiremos su historia después. Use el enlace que enviaremos por correo electrónico o llame/envíe un mensaje de texto al [número].
* **Acuerdos:**
 * [Casilla] Doy mi consentimiento para grabar y compartir mi historia según mi selección.
 * [Casilla] Tengo más de 18 años. (Si no, se necesita el consentimiento de un padre/madre/tutor).
 * [Casilla] Permito mostrar mi nombre de pila/alias.
 * [Casilla] Prefiero permanecer anónimo/a en las exhibiciones públicas.
* **Nota:** El contenido sensible está bien. Evite nombres completos o direcciones de otras personas sin permiso.

## "What Happens Next" Use Pathway
A transparent pathway increases completion rates and reduces removal requests by setting clear expectations upfront [2]. 

**In-Product Copy:** 
"After you submit, your story goes to our team for a quick review (1–3 days). If you chose Public, it appears on the map and may be shared at listening events with local partners. If you chose Community-only, we'll use it at events and with partners but not post it publicly. If you chose Private, it won't be shared. You can change your choice or ask for removal anytime via the link we email or at [URL/phone]."

## Seeded Story Strategy
To ensure the demo feels alive and credible even if live capture is light, the prototype must be seeded with curated, attributed local excerpts.

| Source | What it Offers | Example Theme/Site | Rights Step |
| :--- | :--- | :--- | :--- |
| **The Valentine "Richmond Stories"** | Curated narratives and podcasts [5] | Church Hill, citywide memory | Request excerpt license + attribution |
| **VCU Oral History Archive** | Audio interviews with local figures [6] | Institutional memory | Confirm use per item license |
| **Church Hill Oral History (DOVE/VCU)** | Neighborhood-focused voices [14] | Desegregation, East End life | Contact VCU Special Collections |
| **UR Race & Racism Project** | Campus/community experiences [15] | Equity, belonging | Follow UR usage terms |
| **Fulton Oral History (Encyclopedia Virginia)** | Urban renewal testimonies [16] | Displacement, repair | Seek EV permissions per excerpt |

**Action Plan:** Secure 5–8 clips (60–120 seconds), normalize the audio, add captions/transcripts, geotag them to map pins, and clearly label them "From the archives" to signal legitimacy.

## Map and Playback UX
A simple map aligned to existing historical frameworks makes the demo feel rooted and navigable. 

* **Map Pins:** Hardcode 5–7 pins at St. John's Church, Shockoe Bottom/Lumpkin's Jail, the African Burial Ground, James River landings, and Fulton.
* **Playback Card:** When a user clicks a pin, they should see: 1) Title, 2) 60–120s audio player with a waveform, 3) Text summary, 4) Consent tier label, and 5) A prominent "Record from here" Call-to-Action.

## Moderation and Safety
Minimal but firm guardrails prevent harm and build trust with the community.

* **Review SLA:** Approve or hold submissions within 72 hours.
* **Content Rules:** Flag slurs, doxxing, and explicit incitement. Allow personal sensitive content, but redact third-party identifiers.
* **Code of Conduct:** Publish a 5-bullet code of conduct co-signed by local partners to de-risk moderation.

## Browser Voice Capture Implementation
Keep technical constraints simple for a hackathon environment while planning for robust fallbacks.

* **Primary Method:** Use the in-browser `MediaRecorder` API to capture compressed audio client-side. Include a visible audio level meter and a 3-minute hard cap.
* **UX Elements:** Implement a mic check, countdown timer, pause/resume functionality, a retake button, and a clear recording indicator (e.g., "Recording… 02:15 / 03:00").
* **Fallback Options:** 
 1. File upload for pre-recorded audio (MP3/M4A/WAV).
 2. A phone call-in mailbox (for post-hackathon deployment).
 3. Text submission with an option to request a later call-back.

## Richmond Context Anchors
Specific historical anchors attract attention and validate the framing of the prototype.

### St. John's Church and VA250
St. John's Church draws approximately 60,000 visitors annually [17]. It is the site of Patrick Henry's March 23, 1775 "Give me liberty or give me death" speech [4] [8]. With the 250th anniversary commemorations bringing national attention [18], this site provides immediate recognition.

### Shockoe Bottom, Lumpkin's Jail, and the Slave Trail
Operating from the 1830s until 1865, Lumpkin's Jail was a notorious slave-trading complex in Shockoe Bottom [9] [10]. Today, the site is interpreted as part of the 17-site Richmond Slave Trail [9] [3]. Tying stories to this geography aligns with how residents physically experience these histories.

### Fulton Neighborhood
In the late 1960s and 1970s, the Fulton Urban Renewal Plan led to the demolition of nearly 800 homes, displacing approximately 785 households and nearly 3,000 individuals in a predominantly Black community [7] [19]. Residents actively fought the demolition [20], and the deep community memory of this displacement requires careful, trauma-informed prompt design.

## Risks, Pitfalls, and Mitigations
The biggest failure modes for civic storytelling are consent confusion, retraumatization, and thin content.

| Pitfall | Mitigation Strategy |
| :--- | :--- |
| **Vague Consent** | Implement 3 clear consent tiers and a highly visible removal path [2]. |
| **Retraumatization** | Provide content notices, skip options, and links to community resources. |
| **Sparse Live Stories** | Pre-license archival seeds [5] [16] and set up live prompt stations at pinned sites. |
| **Perceived Extraction** | Display partner logos, co-moderate, and commit to a public listening session. |

## Demo Run of Show
To prove the capture-to-playback loop in a 10-minute stakeholder walkthrough, follow this flow:
1. Land on the interactive map.
2. Play 1 seeded archival clip at the Lumpkin's Jail pin.
3. Click the "Record from here" button.
4. Record a 90-second live story.
5. Select a consent tier (e.g., Public).
6. Submit the story.
7. Switch to the Admin view to approve the submission.
8. Return to the map to show the story appearing on the pin with a "New" badge.
9. Highlight the "What happens next" transparency box.

## Metrics and Learning Agenda
During the hackathon and pilot phase, measure the following to validate trust, usability, and resonance:
* Start-to-finish form conversion rates.
* Distribution of consent tier choices (Public vs. Community vs. Private).
* Average story length.
* Playback counts on seeded map pins.
* Volume of removal or change requests.
* Qualitative feedback on the resonance of the guided prompts.

## Partnership and Archive Pathways
Early commitments make the demo real. Beyond the hackathon, target The Valentine [5], VCU Libraries [6], the Richmond Slave Trail Commission [3], and Encyclopedia Virginia [16] for curated excerpts and long-term stewardship conversations. Offering an opt-in archival deposit pathway ensures these stories become part of Richmond's permanent historical record.

## References

1. *Consent to Participate in the hear/say Oral History Project ...*. https://oralhistory.org/wp-content/uploads/2022/02/Consent-Form-Hear-Say-project_English.pdf
2. *One Small Step Participant Guide*. https://storycorps.org/discover/onesmallstep/one-small-step-participant-guide/
3. *Richmond Slave Trail*. https://www.visitrichmondva.com/listing/richmond-slave-trail/11208/
4. *Patrick Henry's Liberty or Death Speech — Historic St. John's Church, 1741*. https://www.historicstjohnschurch.org/the-speech
5. *Richmond Stories® - The Valentine Museum*. https://thevalentine.org/explore/richmond-stories
6. *
VCU Oral History Archive Interviews - VCU Libraries Digital Collections - VCU Scholars Compass - Virginia Commonwealth University | VCU Oral History Archive | Virginia Commonwealth University
*. https://scholarscompass.vcu.edu/ohi_interviews
7. *Urban Renewal in Richmond - Encyclopedia Virginia*. https://encyclopediavirginia.org/entries/urban-renewal-in-richmond/
8. *250th Anniversary of Patrick Henry's "Give Me Liberty, Or Give Me Death!" Speech – The White House*. https://www.whitehouse.gov/briefings-statements/2025/03/250th-anniversary-of-patrick-henrys-give-me-liberty-or-give-me-death-speech/
9. *Lumpkin's Jail - Encyclopedia Virginia*. https://encyclopediavirginia.org/entries/lumpkins-jail/
10. *Lumpkin's Jail - Wikipedia*. https://en.wikipedia.org/wiki/Lumpkin%27s_Jail
11. *"The Greatest Place on Earth" - Style Weekly*. https://www.styleweekly.com/the-greatest-place-on-earth/
12. *
        Short Form Consent Template (Spanish) - UW Research    *. https://www.washington.edu/research/forms-and-templates/short-spanish/
13. *Consent and Assent Form Templates | Human Research Protection Program (HRPP)*. https://irb.ucsf.edu/consent-and-assent-form-templates
14. *Church Hill [Richmond] oral history collection – Desegregation of Virginia Education (DOVE)*. https://dove.gmu.edu/index.php/2018/10/25/church-hill-richmond-oral-history-collection
15. *Oral Histories · University of Richmond Race & Racism Project*. https://memory.richmond.edu/exhibits/show/oralhistories
16. *Fulton Oral History Project - Encyclopedia Virginia*. https://encyclopediavirginia.org/primary-documents/fulton-oral-history-project/
17. *r. :: ^ : ':' • - •< • ; •.. - • ^ ^-^^^m - NPGallery*. https://npgallery.nps.gov/GetAsset/b36baba0-f262-4053-abe2-eb28c1add53f
18. *Patrick Henry's Speech - Virginia American Revolution 250 Commemoration - VA250*. https://www.va250.org/patrick-henrys-speech/
19. *Fulton | Redevelopment in Richmond*. https://experience.arcgis.com/experience/8f5ad22a5d4d406f9f9627ed81b636e0/page/Fulton
20. *"Residents Say Fulton Bottom Can Be Saved"(January 15, 1967) - Encyclopedia Virginia*. https://encyclopediavirginia.org/primary-documents/residents-say-fulton-bottom-can-be-saved-january-15-1967/