# Aroha AI Farm ERP Intelligence Platform

An enterprise-grade, multi-tenant agricultural ERP platform powered by deterministic unit-costing engines, predictive time-series forecasting, statistical anomaly detection, and a zero-hallucination conversational AI assistant.

---

## 🌾 Platform Highlights

* **Multi-Organization & Multi-Farm Scope:** Manage poultry, commercial layer, dairy cattle/buffalo, feed mill, and central processing facilities under a unified tenant-isolated architecture.
* **Exact User Interface Design:**
  * Charcoal slate icon-rail navigation sidebar with crest emblem and module search.
  * Pristine white top navigation with `☰` toggle, `Home`, `Contact`, bold red `Sign out`, notification bell (`🔔 3`), and user badge for **`BEGARI RAJU`**.
  * Quick-action buttons: Pink (`ACCESS AI INTELLIGENCE PORTAL`), Green (`DOWNLOAD & FORMS`), and Blue (`FARM DIRECTORY & VET CONTACTS`).
  * Real-time operational KPI ribbon (Milk Yield, Live Broilers, Egg Collection, Feed Inventory, Unit Costs).
  * Double-card dashboard with interactive To-Do Checklist, Autonomous Operational Notifications, Placement & Dispatch Feeds, and Biosecurity Circulars with gold date tags.
* **Core ERP Domain Modules:**
  * **Poultry Batch Management:** Batch lifecycle, mortality tracking, daily feed intake, and real-time Feed Conversion Ratio (FCR: 1.52) & EPEF calculation.
  * **Dairy Operations:** Individual animal RFID tracking, automated milking parlor shifts, Fat % (4.15) and SNF % (8.75) normalization.
  * **Feed & Nutrition:** Least-cost formulation, bin inventory monitoring, and automated feed depletion prediction.
  * **Inventory Ledger & Movements:** Multi-warehouse stock balances, reorder threshold alerts, and double-entry transaction history.
  * **Procurement & POs:** Purchase orders, 3-way matching, Goods Receipt Notes (GRN), and supplier balance tracking.
  * **Finance & Unit Economics:** Deterministic cost per litre of milk (₹28.40), cost per kg chicken (₹84.20), and cost per egg (₹3.42).
  * **Workforce & Tasks:** Attendance tracking, shift duty allocation, and direct labor cost distribution.
  * **Reports & Analytics:** Exportable consolidated P&L statements, batch efficiency summaries, and inventory valuation sheets.
* **AI Farm Intelligence Engine:**
  * 7, 15, and 30-day yield and feed demand forecasting.
  * Statistical Process Control (SPC) anomaly detection for early disease outbreak warning.
  * Zero-hallucination conversational AI Copilot querying validated PostgreSQL database records.

---

## 🛠️ Technology Stack

* **Frontend:** Single Page Application (HTML5, Tailwind CSS, PrimeNG design language, JavaScript).
* **Backend:** Node.js / NestJS architecture with modular domain structure.
* **Database & Persistence:** PostgreSQL 16 schema with Row-Level Security (RLS) for multi-tenant isolation.
* **ORM:** TypeORM with Data Mapper repository pattern.
* **Queue & Background Jobs:** BullMQ + Redis 7 for scheduled midnight rollups and anomaly detection.
* **API Documentation:** RESTful APIs with Swagger/OpenAPI specifications.

---

## 🚀 Getting Started

### Prerequisites

* Node.js v18+ or v20+
* Git

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/RajuBegari/arogafarm.git
   cd arogafarm
   ```

2. Start the integrated platform:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

* REST API Base URL: `http://localhost:4200/api/v1`

---

## 📂 Repository Layout

```
arogafarm/
├── backend/                  # NestJS API, TypeORM schemas, DTOs, entities
│   ├── src/
│   │   ├── common/           # Shared guards, interceptors, pipes
│   │   ├── config/           # Environment and DB config
│   │   ├── database/         # Database module and connection setup
│   │   ├── entities/         # 30+ 3NF normalized TypeORM entities
│   │   └── modules/          # Domain-driven NestJS modules
│   └── package.json
├── frontend/                 # Frontend presentation layer
│   ├── public/
│   │   └── index.html        # Enterprise dashboard UI matching Begari Raju's specification
│   └── package.json
├── scripts/
│   └── start-preview.js      # Integrated full-stack HTTP & REST API server
├── ARCHITECTURE.md           # Master technical architecture & implementation proposal
├── package.json              # Root orchestration scripts
└── README.md
```

---

## 🔒 Security & Data Isolation

* Multi-tenancy enforced at both database layer via PostgreSQL native **Row-Level Security (RLS)** (`SET LOCAL app.current_organization_id`) and application layer via `TenantContextMiddleware`.
* Role-Based Access Control (RBAC) governing cross-farm and farm-scoped operational permissions.
* Zero external network access to production MongoDB databases; Aroha Fresh integration handled exclusively through an isolated Anti-Corruption Layer (ACL).

---

## 👤 Author & Maintainer

* **Begari Raju** (Technical Lead / Farm Administrator)
* Project: Aroha AI Farm ERP Intelligence Platform

