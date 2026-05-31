# Field Ops Dashboard

A locally-hosted web dashboard for managing field operations data across distributed NGO teams.

## Features
- **Multi-form data entry** — Activity logs, incident reports, site surveys, and route logs
- **Hierarchical entity selector** — Org structure from region down to field unit, configurable by admin
- **Live map overlay** — Leaflet.js coordinate plotting for all geotagged entries
- **Analytics dashboard** — Chart.js visualizations: log volume over time, form type breakdown, office/unit frequency
- **Admin config panel** — Customize all dropdown fields and options without touching code
- **JSON import/export** — Archive and restore records across sessions
- **Local AI analysis** — Ollama integration (Phi3/LLaMA3) for batch log summarization and pattern detection
- **LocalStorage-based** — No backend required, runs entirely in the browser

## Stack
HTML5 · CSS3 · Vanilla JavaScript · Leaflet.js · Chart.js · Ollama (local LLM)

## Usage
Clone the repo and open `index.html` in a browser. No build step required.
For AI analysis, run Ollama locally with your preferred model before using the AI Workbench.

## Forms
| Form | Purpose |
|------|---------|
| Activity Log | Field visits, communications, community meetings |
| Incident Report | Aid delivery issues, security incidents, asset tracking |
| Site Survey | Camp/base assessments with GPS coordinates |
| Route Log | Movement logs with waypoints and transport details |
