# ISDS 3100: Information Systems Foundations
## AI Lab: Vibe Coding & Personal Portfolio Website
**Course:** ISDS 3100 &bull; Fall 2026 &bull; E. J. Ourso College of Business &bull; Louisiana State University  
**Developer:** Stephanie Villatoro (B.S. Information Systems & Decision Sciences)  

---

### 🌐 Project Submission Links
- **Live Hosted Website URL:** [https://stephanievillatoro.github.io/Stephanie-Website/](https://stephanievillatoro.github.io/Stephanie-Website/)
- **GitHub Repository URL:** [https://github.com/Stephanievillatoro/Stephanie-Website](https://github.com/Stephanievillatoro/Stephanie-Website)

---

### 📁 Architecture & File Structure
This project implements a **hybrid layout** developed natively in Google Antigravity IDE without the use of website builders (Wix, Squarespace) or hosted backend platforms (Lovable, Supabase). The codebase consists of clean, semantic HTML5, Vanilla CSS3, and modern JavaScript:

```
├── index.html         # Single-page hub: Profile, Skills, Experience, and Contact
├── resume.html        # Standalone expanded Resume & Coursework (Print/PDF optimized)
├── project.html       # Standalone Featured Project Case Study (Supply Chain Analytics)
├── README.md          # Technical specifications, architecture, and GenAI reflection
├── favicon.svg        # Custom SVG brand favicon
├── css/
│   └── styles.css     # Unified CSS design system (tokens, responsive grid, dark mode, print rules)
├── js/
│   └── main.js        # Mobile navigation toggle, scroll observer, and form handling
└── images/
    ├── stephanie_portrait.jpg     # Professional headshot asset
    └── supply_chain_dashboard.jpg # Power BI executive telemetry visualization asset
```

#### Hybrid Layout Component Breakdown:
1. **`index.html` (Single-Page Hub):**
   - **Profile (`#about`):** Background narrative, academic focus at LSU, and career objectives.
   - **Skills (`#skills`):** Categorized competency matrix spanning Programming, Analytics & BI, Systems Analysis, and Tools.
   - **Experience (`#experience`):** Employment timeline detailing campus IT support and university practicum work.
   - **Contact (`#contact`):** Direct communication channels and an interactive message form with JavaScript validation.
   - **Interactive Bridges:** Teaser callouts linking directly to dedicated subpages.

2. **`resume.html` (Standalone Resume):**
   - Expands on academic coursework across Database Management (ISDS 3110), Systems Analysis (ISDS 4120), and Business Intelligence (ISDS 4141).
   - Details employment achievements, certifications (Excel for Business), and AIS leadership.
   - Integrates print stylesheet (`@media print`) and a one-click **"Print / Save as PDF"** action for recruiters.

3. **`project.html` (Standalone Project Deep-Dive):**
   - In-depth case study: *Enterprise Supply Chain Analytics & Relational Database Optimization*.
   - Documents business problem framing (1,200 SKUs, spreadsheet fragmentation).
   - Technical relational architecture with an Entity-Relationship Diagram (ERD) adhering to Third Normal Form (3NF).
   - Production SQL analytical queries for stockout risk identification.
   - Power BI executive dashboard visualization tracking lead times and OTIF fulfillment.
   - Measurable ROI metrics (14.2% holding cost reduction, 85% reporting acceleration).

---

### 💡 GenAI Managerial Reflection: Directing the Agent
*A reflection on technical pair programming and directing an AI coding agent in Antigravity IDE:*

Directing a generative AI coding agent highlighted the core managerial transition occurring in modern enterprise IT: **the shift from manual code authoring to system specification, architectural governance, and quality judgment.**

In this project, the AI agent served as the "driver"—synthesizing HTML structure, CSS custom properties, and JavaScript listeners at high velocity. However, the system cannot function autonomously without clear managerial constraints. For example, during database modeling for the featured project and designing the hybrid layout, the critical task was defining unambiguous specifications:
1. **Architectural Precision:** Directing the agent required enforcing strict relational normalization (Third Normal Form) to eliminate transitive dependencies between suppliers, purchase orders, and warehouse inventory, rather than accepting unconstrained flat tables.
2. **Environment & Path Constraints:** When transitioning between local preview and GitHub Pages hosting, relative URL path resolution across root-level subpages (`resume.html`, `project.html`) and assets (`images/`, `css/`) had to be audited and maintained to prevent 404 deployment errors.
3. **User-Centric Refinements:** Instructing the agent to implement recruiter-focused features—such as `@media print` CSS overrides that strip dark-mode ink for physical resume printing, and sticky navigation observers that highlight current scroll sections—demonstrated that managerial judgment is essential to guide AI output toward real-world usability standards.

As a future Information Systems manager, this exercise proved that while AI automates repetitive technical synthesis, human judgment remains the decisive element: formulating the strategy, verifying data fidelity, and holding software deliverables accountable to organizational objectives.
