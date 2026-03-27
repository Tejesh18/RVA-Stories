# Consent and Privacy Blueprint for Civic Storytelling Tools

## Executive Summary
Launching a civic storytelling tool requires balancing the public's desire to share neighborhood histories with strict legal and ethical privacy mandates. This blueprint outlines the necessary safeguards to protect residents—especially minors and vulnerable populations—while collecting valuable civic narratives. Key findings indicate that under the Children's Online Privacy Protection Act (COPPA), allowing minors to post stories publicly constitutes a "disclosure" requiring verifiable parental consent [1]. Furthermore, federal guidelines classify all voice recordings, photos, and videos as Personally Identifiable Information (PII) [2]. To mitigate risks, cities must implement granular consent mechanisms, strict data minimization protocols, and robust access controls, ensuring that sensitive stories about displacement or criminal justice do not inadvertently expose residents to harm.

## Purpose and Scope — A practical playbook to collect civic stories without creating privacy liabilities
The goal of a civic storytelling tool is to gather rich, authentic neighborhood histories that inform city planning and cultural exhibits. However, collecting personal narratives inherently involves privacy risks, such as identifying living individuals or revealing the locations of vulnerable residents. This playbook provides actionable guidelines on consent, data minimization, and child-safety design, ensuring that the tool can operate effectively without creating legal liabilities or ethical breaches.

## Legal and Ethical Foundations — What rules really apply to a civic storytelling tool
Even "general audience" municipal tools face strict regulatory and ethical duties when collecting user-generated content. Understanding these foundations is critical for compliance and community trust.

### COPPA rules that reshape public story tools: actual knowledge, disclosure via public posting, and deletion
The FTC enforces strict rules under COPPA for collecting data from children under 13. If a general audience site acquires "actual knowledge" that a user is a child—such as a user stating their age in a post—the operator must either obtain parental consent or delete the information [1]. 
* **Disclosure via Public Posting:** COPPA defines "disclosure" broadly to include making a child's personal information publicly available through message boards or public postings [1]. Operators must give parents the option to consent to data collection without consenting to public disclosure [1].
* **One-Time Response Exception:** Operators can reply to a child's inquiry once without parental consent, but must promptly delete the child's online contact information afterward and cannot re-contact them [1].
* **Third-Party Plug-ins:** The exception allowing third-party plug-ins without consent is narrow; it does not apply if the plug-in collects user-generated content or anything beyond a persistent identifier [1].

### Ethical safeguards from UNICEF for minors and sensitive cases
UNICEF's ethical reporting guidelines emphasize a "do no harm" approach when collecting stories from children and vulnerable populations [3] [4]. 
* **Location Privacy:** Storytellers must ensure that a child is not endangered by showing their home, community, or general whereabouts [3] [4].
* **Identity Protection:** Names must be changed and visual identities obscured for high-risk categories, including victims of abuse, perpetrators, those charged with crimes, and refugees [3] [4].
* **Informed Consent:** Permission must be obtained without coercion, ideally in the participant's native language, ensuring they understand how the story will be used locally and globally [3] [4].

### Government PII handling norms (18F/GSA)
Federal digital service guidelines from 18F and the GSA provide a baseline for handling civic data. 
* **Defining PII:** What constitutes PII depends on context, but recordings of people's voices, photos, and videos are *always* considered PII [2]. 
* **Risk Minimization:** Each piece of collected PII increases privacy risks; agencies should refrain from collecting or storing PII whenever possible [2]. GSA mandates protecting PII through strict access controls and security technologies [5].

## Consent Framework — Required elements and why they matter
Valid informed consent must be clear, granular, and language-appropriate. Providing specific choices reduces risk and increases community trust.

| Consent Element | Purpose & Requirement | Actionable Implementation |
| :--- | :--- | :--- |
| **Purpose of Collection** | Explains why the data is needed. | State clearly (e.g., "To inform City programs and exhibits"). |
| **Visibility & Disclosure** | Defines who sees the story (internal vs. public). | Offer choices: internal only, public with pseudonym, or public with real name. For <13, require parental consent for public disclosure [1]. |
| **Storage & Security** | Builds trust regarding data protection. | Note that data is stored on City-controlled, encrypted systems [5]. |
| **Retention & Deletion** | Complies with data lifecycle laws. | State how long data is kept and that it will be securely deleted when no longer needed. |
| **Right to Withdraw** | Aligns with ethical best practices [3]. | Provide a clear process for pre-publication withdrawal and post-publication takedown. |
| **Third-Party Risks** | Prevents collateral privacy exposure. | Warn users not to include private details of others (addresses, medical info). |

*Takeaway:* A modular consent form that separates internal data collection from public disclosure is legally required for minors and highly recommended for adults.

## Sensitive Content Handling — Reducing harm for displacement, discrimination, hardship, and justice narratives
Neighborhood histories often touch on sensitive topics. Treating these details as high-risk PII is essential to prevent retaliation or stigmatization.

| Sensitive Category | Primary Privacy Risks | Required Handling & Mitigation |
| :--- | :--- | :--- |
| **Displacement & Evictions** | Identifying landlords, tenants, or specific addresses. | Redact full names; reduce map precision to the block or neighborhood level. |
| **Discrimination Incidents** | Naming specific employers, schools, or accused individuals. | Use pseudonyms; require editorial review to prevent defamation or retaliation. |
| **Family Hardship & Health** | Exposing third-party medical or financial information. | Strip third-party identifiers; focus on the emotional narrative rather than specific data points. |
| **Criminal Justice** | Exposing victims, accused individuals, or ongoing cases. | Change names and obscure visual identities (faces/voices), aligning with UNICEF guidelines for high-risk individuals [3] [4]. |

*Takeaway:* Implement a mandatory human-in-the-loop editorial review for any story flagged as containing sensitive themes before public release.

## Data Minimization Guidelines — Only collect what you can protect and need
Data minimization is the most effective way to reduce privacy liability. If you do not collect it, you cannot leak it.

| Data Element | Collection Status | Guidelines & Safeguards |
| :--- | :--- | :--- |
| **Story Text** | **Collect** | Core purpose. Scan and redact third-party PII before publishing. |
| **Name** | **Minimize** | Default to a pseudonym or first name only for public display. |
| **Contact Info (Email/Phone)** | **Minimize** | Optional. Store in a separate, token-linked database. Delete if unused after a set period. |
| **Age** | **Minimize** | Ask "Are you under 13?" (Yes/No) to trigger COPPA workflows. Do not collect full Date of Birth. |
| **Location** | **Minimize** | Collect neighborhood or nearest intersection. Avoid exact street addresses. Strip EXIF data from uploads. |
| **Media (Photos/Audio/Video)** | **Minimize** | Always treat as PII [2]. Make optional, require separate consent, and offer blurring/voice alteration. |

*Takeaway:* Default to anonymous or pseudonymized text stories. Treat all multimedia as high-risk PII requiring explicit, separate consent.

## Storage and Access Recommendations — Where stories live and who can see them
To align with GSA privacy standards, the City must implement strict technical safeguards [5].
* **Storage Architecture:** Use a City-managed cloud environment with AES-256 encryption at rest. Separate the database containing contact information from the database containing the story content, linking them only via secure tokens.
* **Access Controls:** Implement Role-Based Access Control (RBAC) based on the principle of least privilege. Only designated moderators should access raw submissions. 
* **Audit and Retention:** Maintain full audit logs of who accesses the data. Implement automated retention timers that securely delete contact information once the purpose of collection has been fulfilled.

## Operational Workflows and Controls — Making compliance routine
Compliance must be built into the tool's user experience and backend processes.
* **Age-Gating & Actual Knowledge:** Implement a simple age screen. If a user indicates they are under 13, or if moderation flags "actual knowledge" of a child's age in the text [1], route the submission to a verifiable parental consent workflow or delete it immediately.
* **Moderation:** Use automated tools to scan for addresses, SSNs, and EXIF data, followed by human review for sensitive narratives.
* **Takedown Process:** Provide an easily accessible web form for users to request the removal of their stories post-publication.

## Templates — Consent Language (Plain English)

**Consent to Share Your Story**
**Who we are:** This project is run by the City of [Name] to collect neighborhood stories.
**What you’re sharing:** Your story text and any optional photos/audio you choose to upload.
**How we use your story:** To inform City programs and, if you choose, to share with the public (website, exhibits, reports).
**Who can see it:**
* City staff only (private, internal use)
* Public (City websites/displays) — choose name to show: full first name, initials, or a pseudonym
**Where and how it’s stored:** On City-controlled, encrypted systems with limited, logged access.
**How long we keep it:** We keep stories only as long as needed for the purposes you select above, then we securely delete or permanently de-identify them.
**Publishing choices:**
* [ ] Internal use only (not public)
* [ ] Public with my chosen display name
* [ ] Public, but remove/blur any faces/voices/precise locations in media I upload
**Your choices about others:** Please don’t include other people’s private information (like full names, addresses, or medical/financial details). We may edit or remove such details to protect privacy.
**Your rights:** You can withdraw your consent before publication at any time. After publication, you can ask us to take your story down; we will remove it from our sites.
**If you are under 13:** A parent or legal guardian must give permission before we collect, use, or make your story public.
**Questions:** Contact [email/phone]. By checking this box and submitting, you confirm you understand and agree to these terms. 
[Checkbox] I agree.

## Plantillas — Lenguaje de Consentimiento (Español)

**Consentimiento para Compartir su Historia**
**Quiénes somos:** Este proyecto es dirigido por la Ciudad de [Nombre] para recopilar historias de los vecindarios.
**Qué compartirá:** Su relato en texto y cualquier foto/audio opcional que decida subir.
**Cómo usaremos su historia:** Para informar programas de la Ciudad y, si usted lo elige, para compartirla con el público (sitio web, exhibiciones, informes).
**Quién puede verla:**
* Solo personal de la Ciudad (uso interno, no público)
* Público (sitios/exhibiciones de la Ciudad) — nombre a mostrar: nombre, iniciales o seudónimo
**Dónde y cómo se guarda:** En sistemas controlados por la Ciudad, cifrados y con acceso limitado y registrado.
**Cuánto tiempo la conservamos:** Solo el tiempo necesario para los fines que usted seleccione; después la borramos de forma segura o la desidentificamos permanentemente.
**Opciones de publicación:**
* [ ] Solo uso interno (no público)
* [ ] Pública con el nombre para mostrar que elija
* [ ] Pública, pero eliminar/difuminar rostros/voces/ubicaciones precisas en los medios que suba
**Sus opciones sobre terceras personas:** Por favor, no incluya información privada de otras personas (por ejemplo, nombres completos, direcciones o datos médicos/financieros). Podemos editar o quitar esos datos para proteger la privacidad.
**Sus derechos:** Puede retirar su consentimiento en cualquier momento antes de la publicación. Después de publicada, puede pedir que retiremos su historia; la quitaremos de nuestros sitios.
**Si es menor de 13 años:** Un padre/madre o tutor legal debe autorizar antes de que recojamos, usemos o hagamos pública su historia.
**Preguntas:** Contacto [correo/teléfono]. Al marcar esta casilla y enviar, confirma que entiende y acepta estos términos.
[Casilla] Acepto.

## Appendix A — COPPA Scenarios and Decisions

| Scenario | COPPA Trigger | Required Next Step |
| :--- | :--- | :--- |
| Child posts "I'm 11" within their story text. | Actual Knowledge [1] | Obtain verifiable parental consent or delete the data immediately [1]. |
| Child emails a question to the story help inbox. | One-Time Response [1] | Reply once, then promptly delete the contact info; do not re-contact [1]. |
| Public story gallery includes a social media "Like" plug-in. | Disclosure + Third-Party Collection [1] | Remove plug-in, or ensure it only collects persistent identifiers with prior age-screening [1]. |

## Appendix B — Glossary
* **PII (Personally Identifiable Information):** Any data that can identify a person. Context matters, but recordings of voices, photos, and videos are always considered PII [2].
* **Disclosure (COPPA):** Making personal information collected from a child publicly available in identifiable form, such as through a public posting or message board [1].
* **Actual Knowledge (COPPA):** When an operator learns that a specific visitor is a child, triggering compliance requirements [1].

## References

1. *Complying with COPPA: Frequently Asked Questions | Federal Trade Commission*. https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
2. *ux-guide/_pages/research/privacy.md at main · 18F/ux-guide · GitHub*. https://github.com/18F/ux-guide/blob/main/_pages/research/privacy.md
3. *Ethical reporting guidelines | UNICEF*. https://www.unicef.org/media/reporting-guidelines
4. *Ethical guidelines for reporting on children | UNICEF Montenegro*. https://www.unicef.org/montenegro/en/ethical-guidelines-reporting-children
5. *GSA Privacy Program | GSA*. https://www.gsa.gov/reference/gsa-privacy-program