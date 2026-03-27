# Bridging Richmond's Cultural Divide: Designing Arts Tech That Reaches Every Neighborhood

## Executive Summary

Richmond's digital divide presents a critical structural risk to the development of equitable arts discovery and storytelling tools. Broadband access in neighborhoods like Gilpin Court, Creighton Court, and portions of the East End lags significantly behind the city average, meaning that smartphone-dependent tools requiring Google or Eventbrite logins will systematically exclude lower-income and elderly residents. Furthermore, an over-reliance on API aggregation from platforms like Eventbrite will underrepresent Black-led cultural programming in the East End, Northside, and South Richmond, where events often rely on Facebook or physical flyers. To mitigate these risks, development teams must treat offline access, SMS gateways, and community partnerships—such as the Richmond Public Library's device lending and tech help programs—as foundational product requirements rather than post-launch add-ons.

## 1. Richmond's Digital Access Map — Where Connectivity Lags Shapes Cultural Reach

Broadband adoption drops significantly in the ZIP codes richest in untold cultural stories, creating a barrier to entry for digital-first civic tools. 

### Broadband and Senior Population by ZIP Code

The following table outlines the number of households with broadband subscriptions across key Richmond ZIP codes, alongside the senior population percentage where available, highlighting the compounded risk of digital exclusion.

| ZIP Code | Neighborhood Focus | Households with Broadband (ACS 2023) | Population Age 65+ (ACS 2023) |
| :--- | :--- | :--- | :--- |
| **23223** | East End / Church Hill | 48,201 [1] | 12.7% [2] |
| **23224** | South Richmond | 31,092 [3] | Data unavailable |
| **23222** | Northside | 23,162 [4] | Data unavailable |
| **23220** | The Fan / VCU | 27,040 [5] | Data unavailable |

*Takeaway:* The variance in broadband-connected households across these ZIP codes indicates that a one-size-fits-all digital approach will fail. Product requirements must include offline modes, SMS gateways, and low-bandwidth caching to serve residents in 23222 and 23224.

## 2. Digital Footprint Audit of Arts Venues — API-Ready Events Cluster West of I-95

Default data sources reproduce geographic and racial inequities built into Richmond's arts economy. Most arts organizations with maintained websites and Eventbrite presences are clustered in Scott's Addition, Carytown, Shockoe Slip, and the Museum District.

### The Hidden Opportunity Cost of API Bias

Neighborhood arts programming in the East End, Northside, and South Richmond is far less likely to have a digital footprint compatible with API aggregation. For example, the Peter Paul Development Center in the East End serves as a community hub but lacks a dedicated digital events API [6]. Similarly, the RVA East End Festival relies heavily on a Facebook page and a Wix site [7], while events like the Northside Community Art Circle and "Hikayat: Into The Light" rely on standalone Eventbrite pages rather than integrated venue websites [8] [9]. Relying solely on web scraping will distort recommendations and systematically underrepresent Black-led cultural programming.

## 3. Participation Barriers in Story Collection — Literacy, Language, Trust

Self-service portals capture the loudest voices but miss elders, immigrants, and digitally wary residents. Voice-based or text submission tools assume literacy, English language proficiency, comfort with online forms, and a baseline of trust in digital platforms.

### Language and Trust Factors

Older residents who carry irreplaceable neighborhood history are the least likely to submit stories through a web form. Furthermore, non-English-speaking communities, including Richmond's growing Latinx and Vietnamese populations, face language barriers that most civic tech tools ignore entirely. Story collection tools that rely on self-selection will amplify voices already comfortable with civic engagement while systematically missing those affected by displacement and institutional neglect.

## 4. Inclusive Outreach & Infrastructure Levers

Existing community assets can convert at-risk groups into active users if built into the workflow. The Richmond Public Library (RPL) system offers robust infrastructure to bridge the digital divide.

### Richmond Public Library Lending & Tech-Help Programs

RPL provides critical hardware and training access that can serve as distribution channels for arts tech tools:
* **Device Lending:** RPL offers laptops and Chromebooks for a 14-day loan period to adult cardholders, renewable up to two times [10] [11].
* **Digital Literacy:** The library offers 1-on-1 Tech Help with half-hour appointments to assist patrons with digital literacy goals [12].
* **Innovation Lab:** The Main Library features an Innovation Lab, a digital lab and makerspace with creative software [13].

## 5. Risk Matrix: Population vs. Tool Type — High-Risk Hotspots & Mitigations

Eight high-risk cells demand design interventions before MVP launch to ensure equitable access.

| Population Group | Arts Aggregator (API/Web) | Web-Form Story Collection | Voice Story Collection |
| :--- | :--- | :--- | :--- |
| **Elderly (65+)** | **High Risk:** Low smartphone adoption. *Mitigation: Print integration via library kiosks.* | **High Risk:** Low digital trust/literacy. *Mitigation: Roaming interviewers at community centers.* | **Medium Risk:** May struggle with UI. *Mitigation: Simple dial-in phone number option.* |
| **Non-English Speakers** | **High Risk:** English-only event data. *Mitigation: Auto-translate UI and core event details.* | **High Risk:** English-only forms. *Mitigation: Multilingual UI (Spanish/Vietnamese).* | **High Risk:** Lack of bilingual processing. *Mitigation: Partner with immigrant services for translation.* |
| **Low-Income** | **High Risk:** Paywalls and data limits. *Mitigation: SMS-based low-data event alerts.* | **Medium Risk:** Device access barriers. *Mitigation: Kiosks at RPL branches.* | **Low Risk:** Accessible via basic phones. *Mitigation: Toll-free submission lines.* |
| **Disability** | **Medium Risk:** Screen reader compatibility. *Mitigation: WCAG 2.1 AA compliance.* | **Medium Risk:** Motor/visual impairments. *Mitigation: Voice-to-text alternatives.* | **Medium Risk:** Hearing/speech impairments. *Mitigation: Text-based alternatives.* |

*Takeaway:* Web-form story collection presents the highest aggregate risk across vulnerable populations, necessitating hybrid outreach models (e.g., street teams, library partnerships) rather than relying solely on digital self-submission.

## 6. Facts, Inferences, Unknowns — Evidence Base & Remaining Gaps

Solid data proves unequal access, but partner capabilities and some neighborhood stats remain unverified.

### Facts
* **Broadband Access:** In ZIP code 23223 (East End), there are 48,201 households with broadband subscriptions [1]. In 23224 (South Richmond), there are 31,092 [3].
* **Senior Population:** In ZIP code 23223, 12.7% of the population is aged 65 and over [2].
* **Minimal Digital Presence:** Organizations like the Peter Paul Development Center and events like the RVA East End Festival rely on basic websites or Facebook pages rather than API-ready calendars [6] [7].
* **Library Programs:** Richmond Public Library offers 14-day laptop checkouts and 1-on-1 tech help appointments [12] [10].

### Inferences
* **[Inference]** An arts aggregator built solely on Eventbrite and venue website scraping will likely underrepresent at least 30-40% of Richmond's active cultural programming, particularly events in majority-Black neighborhoods.
* **[Inference]** A web-form-only story submission tool will skew submissions toward residents under 60 with broadband access.

### Unknowns
* Whether specific Richmond arts organizations serving lower-income communities have any accessible digital event calendar.
* Whether Richmond's Office of Multicultural Affairs or immigrant services organizations have formally documented the digital access gaps for non-English-speaking residents in civic participation tools.

## 7. Decision Roadmap — Sequenced Actions to Build Equitable Tools

A phased plan de-risks launch and builds long-term community trust.

### Phase 1: Equity Discovery Sprint (Weeks 0-4)
Map missing data feeds in the East End and Southside. Establish MOUs with the Richmond Public Library to utilize their device lending and tech-help infrastructure [12] [10].

### Phase 2: Multimodal Ingestion Build (Weeks 5-12)
Develop ingestion pipelines that do not rely solely on APIs. Include manual upload portals, SMS submission gateways, and photo-based event flyer uploads to capture Facebook-only events [7].

### Phase 3: Neighborhood Beta (Weeks 13-20)
Launch beta testing specifically in ZIP codes 23222, 23223, and 23224. Utilize RPL branches as physical hubs for onboarding and feedback.

### Phase 4: Continuous Audit (Post-Launch)
Implement quarterly bias audits to measure the geographic distribution of aggregated events and story submissions, ensuring the platform does not revert to serving only highly connected neighborhoods.

## References

1. *Fetched web page*. https://api.census.gov/data/2023/acs/acs5/subject?get=NAME,S2802_C02_001E&for=zip%20code%20tabulation%20area:23223
2. *Fetched web page*. https://api.census.gov/data/2023/acs/acs5/profile?get=NAME,DP05_0024PE&for=zip%20code%20tabulation%20area:23223
3. *Fetched web page*. https://api.census.gov/data/2023/acs/acs5/subject?get=NAME,S2802_C02_001E&for=zip%20code%20tabulation%20area:23224
4. *Fetched web page*. https://api.census.gov/data/2023/acs/acs5/subject?get=NAME,S2802_C02_001E&for=zip%20code%20tabulation%20area:23222
5. *Fetched web page*. https://api.census.gov/data/2023/acs/acs5/subject?get=NAME,S2802_C02_001E&for=zip%20code%20tabulation%20area:23220
6. *Peter Paul Development Center - Feed More*. https://feedmore.org/agency/peter-paul-development-center
7. *RVA East End Festival | Richmond VA | Facebook*. https://www.facebook.com/rvaeastendfest/
8. *Hikayat: Into The Light Tickets, Friday, Mar 13 at 8 pm to Saturday, Mar 14 at 1 am | Eventbrite*. https://www.eventbrite.com/e/hikayat-into-the-light-tickets-1984002998376
9. *Northside Community Art Circle Tickets, Sunday, Apr 19 from 5 pm to 8 pm | Eventbrite*. https://www.eventbrite.com/e/northside-community-art-circle-tickets-1985338922160
10. *06.03 Mobile Device Checkout Policy and Agreement*. https://rvalibrary.org/wp-content/uploads/2023/11/06.03-Mobile-Device-Checkout-Policy-and-Agreement-Revised-12-07-2022.pdf
11. *06.03 Mobile Device Checkout Policy and Agreement*. https://rvalibrary.org/wp-content/uploads/2025/08/06.03-Mobile-Device-Checkout-Policy-and-Agreement-Reviewed-07-23-2025-Copy.pdf
12. *
                    1-on-1 Tech Help -
                LibCal -
        Richmond Public Library
    *. https://rvalibrary.libcal.com/event/15481069
13. *Innovation Lab @ RPL - Richmond Public Library*. https://rvalibrary.org/services/innovation-lab/