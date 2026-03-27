# Mapping Richmond’s Arts Footprint — Official Districts, Reliable Boundaries, and Smart Overlays

## Executive Summary
Richmond GeoHub provides a robust foundation for mapping the city's arts and cultural landscape, offering authoritative layers for both official districts and citywide neighborhoods. The city maintains a specific "Arts and Cultural District" feature layer (updated in 2022) [1], alongside a comprehensive "Neighborhoods" layer containing 148 distinct boundaries [2]. All primary datasets are accessible via ArcGIS FeatureServer endpoints and can be downloaded in standard formats, including GeoJSON and Shapefile [1] [2]. 

For a map-based arts tool, a **hybrid boundary strategy is highly recommended**: use the 148 Neighborhood boundaries as the primary framework for equitable, citywide arts discovery, while applying the single Arts and Cultural District polygon as a branded overlay to highlight official incentives and downtown identity. Relying solely on the official Arts District would artificially restrict the map's scope, excluding vibrant cultural activity in areas like Scott's Addition, Manchester, or Church Hill. If the primary Arts District layer becomes unavailable, developers can fall back on the 2019 "Arts and Cultural District Incentive Zones" layer or cross-reference the city's Special Assessment Districts web map [3] [4].

## Decision Context — Choose boundaries that serve both incentives and discovery

When building a map-based arts tool for Richmond, the primary challenge is balancing official policy boundaries with the reality of where arts and culture actually thrive. The tool must solve two practical problems:
1. **Clarify incentives and identity**: It must accurately represent the official Arts and Cultural District to inform businesses and visitors about designated zones and potential economic incentives.
2. **Ensure citywide arts inclusion**: It must facilitate the discovery of cultural venues across the entire city, rather than artificially confining "the arts" to a single downtown corridor. 

Furthermore, the map needs to provide cultural context—such as historic preservation areas, parks, and libraries—without conflating these civic amenities with dedicated arts venues.

## Confirmed Authoritative GIS Layers — What’s available, who owns it, how to get it

Richmond GeoHub hosts several authoritative layers that are directly relevant to this pillar. While there is no single "museums and theaters" point layer, the available polygon data provides excellent structural boundaries and contextual overlays.

| Layer Name | Type & Record Count | Last Data Update | Department / Tags | Access & Integration |
| :--- | :--- | :--- | :--- | :--- |
| **Arts and Cultural District** | Feature Layer (1 record) | Jan 12, 2022 | Economic Development | Hub Download / FeatureServer [1] |
| **Arts and Cultural District Incentive Zones** | Feature Layer (1 record) | Nov 4, 2019 | Economic Development | Hub Download / FeatureServer [3] |
| **Neighborhoods** | Feature Layer (148 records) | Nov 4, 2019 | Neighborhood Planning | Hub Download / FeatureServer [2] |
| **City Old and Historic Districts** | Feature Layer (45 records) | Feb 29, 2020 | Zoning / Historic Preservation | Hub Download / FeatureServer [5] |
| **Parks** | Feature Layer (169 records) | Sep 11, 2020 | Parks & Recreation | Hub Download / FeatureServer [6] |
| **Public Libraries** | Feature Layer (9 records) | Apr 15, 2020 | Points of Interest | Hub Download / FeatureServer [7] |
| **SAD - Special Assessment Districts** | Web Map (N/A) | Feb 8, 2023 | Real Estate / Assessor | View-only Web Map [4] |

*Table 1: Core GIS layers available on Richmond GeoHub relevant to arts and cultural mapping. All Feature Layers offer direct download capabilities and API access.*

## Data Currency & Stewardship — How current is "current" here?

The geographic boundaries in Richmond GeoHub are relatively static, which is typical for municipal boundary data. The primary "Arts and Cultural District" layer was last updated on January 12, 2022 [1]. The "Neighborhoods" layer data was last updated on November 4, 2019, with metadata info updated in August 2020 [2]. 

Because incentives and service-district lines can change via city ordinance, publishing stale incentive boundaries can misguide users and businesses. To maintain trust, developers should add a "Data as of" badge in the UI for the Arts District layer and schedule an annual automated check against the ArcGIS item's `lastEditDate` metadata to detect any silent updates from the Economic Development department.

## Boundary Strategy Recommendation — Hybrid approach to maximize clarity and coverage

A map-based arts tool should **not** force a choice between arts district boundaries and neighborhood boundaries; it must use both for different functional purposes. 

* **Primary Filter (Neighborhoods)**: Default to the "Neighborhoods" layer (148 polygons) for general arts discovery, list segmentation, and navigation [2]. This ensures that a gallery in the Fan District or a studio in Manchester is easily discoverable and accurately categorized.
* **Prominent Overlay (Arts District)**: Present the "Arts and Cultural District" polygon as a distinct, toggleable overlay [1]. This layer should be used specifically to trigger UI callouts regarding economic incentives, district branding, and policy-specific messaging.

This hybrid approach guarantees clear incentive messaging for stakeholders who need it, while providing inclusive, equitable discovery for users looking for arts activities beyond the Broad Street corridor.

## Overlays That Matter — Heritage, parks, libraries, and service districts

Contextual layers shape user expectations and assist in trip planning. Richmond GeoHub provides several layers that enrich the map without cluttering it.

| Overlay Layer | Strategic Value | Risk / Caveat | Recommended Action |
| :--- | :--- | :--- | :--- |
| **City Old & Historic Districts** | Signals preservation context and potential zoning/permitting constraints for venues [5]. | Users might misinterpret these as dedicated "arts zones." | Add an info tooltip explaining the preservation status; keep the layer off by default. |
| **Parks** | Highlights outdoor event sites and public culture programming spaces (169 locations) [6]. | Parks are amenities, not a proxy for dedicated arts venues. | Show on-demand; link to specific park programming pages. |
| **Public Libraries** | Identifies nodes of frequent cultural programming and community access (9 locations) [7]. | Limited count; operating hours vary significantly. | Include as cultural nodes with direct links to event schedules. |
| **Special Assessment Districts** | Provides context on downtown services and taxes (e.g., Consumer Broad District, Consumer Shockoe District) [4]. | Currently published as a Web Map, not a directly downloadable feature layer [4]. | Request the underlying feature layer from the Assessor/Finance department or Venture Richmond. |

*Table 2: Recommended contextual overlays to enhance the arts mapping tool.*

## Data Access & Formats — How to pull and store the data

Richmond GeoHub is built on ArcGIS Hub, making it highly developer-friendly. Every confirmed dataset exposes an ArcGIS FeatureServer endpoint for live API access [1] [2]. Additionally, the platform supports exporting public catalogs and individual datasets in common formats, including CSV, KML, Shapefile, and GeoJSON [8].

For implementation, developers should consume the FeatureServer endpoints for live synchronization to ensure the map always reflects the city's latest published boundaries. Simultaneously, developers should use the Hub's download panel to export static GeoJSON snapshots. These static files serve as a resilient fallback in case the city's ArcGIS services experience downtime.

## Risks, Failure Modes, and Mitigations — Build trust into the map

* **Failure Mode: Exclusionary Mapping**: Over-reliance on the single Arts District polygon will exclude vibrant arts areas across the city. **Mitigation**: Implement the neighborhood-first discovery model combined with the district overlay.
* **Failure Mode: Stale Incentive Lines**: Displaying outdated incentive boundaries can mislead businesses seeking to open venues. **Mitigation**: Date-stamp the UI and implement an annual metadata check against the 2022 update date [1].
* **Failure Mode: Amenity Confusion**: Users may be confused if parks and libraries are presented identically to dedicated theaters or galleries. **Mitigation**: Clearly label parks and libraries as civic amenities and curate a separate, distinct point layer for dedicated cultural venues.

## Fallback Plan — If arts district data is missing or contested

If the primary "Arts and Cultural District" layer is removed from GeoHub or its accuracy is contested, the tool can still launch successfully using a structured fallback pathway:

1. **Rely on Neighborhoods**: Continue using the 148 Neighborhoods as the base segmentation for all venue discovery [2].
2. **Use the Incentive Zone Proxy**: Temporarily implement the "Arts and Cultural District Incentive Zones" feature layer (updated Nov 2019) as the best available proxy for the district boundary [3].
3. **Cross-Reference Official Sources**: Validate the proxy boundary against the "SAD - Special Assessment Districts" Web Map (which outlines the Consumer Broad District) [4] and official city ordinances.
4. **Digitize if Necessary**: If no GIS layer is viable, digitize the boundaries manually from official Economic Development maps, storing the file as a "Provisional Arts District" with clear QA notes and versioning until the city restores the authoritative layer.

## References

1. *Arts and Cultural District | Richmond GeoHub - ArcGIS Online*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::arts-and-cultural-district/about
2. *Neighborhoods | Richmond GeoHub - ArcGIS*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::neighborhoods/about
3. *Arts and Cultural District Incentive Zones | Richmond GeoHub*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::arts-and-cultural-district-incentive-zones/about
4. *SAD - Special Assessment Districts - Richmond GeoHub*. https://richmond-geo-hub-cor.hub.arcgis.com/maps/sad-special-assessment-districts/about
5. *City Old and Historic Districts | Richmond GeoHub - ArcGIS*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/city-old-and-historic-districts-9/about
6. *Parks | Richmond GeoHub - ArcGIS Online*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/parks-2/about
7. *Public Libraries | Richmond GeoHub - ArcGIS Online*. https://richmond-geo-hub-cor.hub.arcgis.com/datasets/cor::public-libraries/about
8. *Dataset - Richmond GeoHub - ArcGIS*. https://richmond-geo-hub-cor.hub.arcgis.com/search