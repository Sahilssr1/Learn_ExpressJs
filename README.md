# 🚀 Learn Express.js — Hands-on Guide to Modern Backend Development

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Nodemon](https://img.shields.io/badge/Nodemon-Live%20Reload-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)
[![CSS3](https://img.shields.io/badge/Modern%20CSS-Glassmorphism%20%26%20Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

<p align="center">
  <b>A structured, beginner-to-advanced practical walkthrough of Express.js core fundamentals.</b><br>
  Featuring interactive route handlers, dynamic path parameters, query string parsing, automated live reload with <b>Nodemon</b>, and <b>Modern CSS</b> UI responses.
</p>

[Quick Start](#-quick-start) • [Nodemon Guide](#-nodemon-live-reload-guide) • [Modern CSS in Express](#-modern-css-styling-in-express) • [Curriculum](#-curriculum--lesson-breakdown) • [Code Fixes & Improvements](#-code-fixes--improvements)

---

</div>

## 📖 Table of Contents

1. [Project Overview](#-project-overview)
2. [Architecture & Request Lifecycle](#-architecture--request-lifecycle)
3. [Nodemon Live Reload Guide](#-nodemon-live-reload-guide)
   - [What is Nodemon?](#what-is-nodemon)
   - [Why Use Nodemon?](#why-use-nodemon)
   - [Installation Options](#installation-options)
   - [Running with Nodemon](#running-with-nodemon)
   - [Configuration (`nodemon.json`)](#configuration-nodemonjson)
4. [Modern CSS Styling in Express](#-modern-css-styling-in-express)
   - [Glassmorphism & Gradients](#glassmorphism--gradients)
   - [CSS Custom Properties (Variables)](#css-custom-properties-variables)
   - [Flexbox & CSS Grid](#flexbox--css-grid)
5. [Curriculum & Lesson Breakdown](#-curriculum--lesson-breakdown)
   - [01 — Server Initialization (`01_index.js`)](#01--server-initialization-01_indexjs)
   - [02 — Request Interception (`02_handling_request.js`)](#02--request-interception-02_handling_requestjs)
   - [03 — Response Formats (`03_send_response.js`)](#03--response-formats-03_send_responsejs)
   - [04 — Path-Based Routing (`04_routing.js`)](#04--path-based-routing-04_routingjs)
   - [05 — Dynamic Path Parameters (`05_path_parameter.js`)](#05--dynamic-path-parameters-05_path_parameterjs)
   - [06 — Query Strings (`06_query_string.js`)](#06--query-strings-06_query_stringjs)
6. [Code Fixes & Improvements](#-code-fixes--improvements)
7. [Quick Start & Setup](#-quick-start)
8. [Express.js Best Practices Cheat Sheet](#-expressjs-best-practices-cheat-sheet)
9. [Author & License](#-author--license)

---

## 📌 Project Overview

This repository is a hands-on curriculum designed to learn **Express.js (v5.x)** step-by-step. Rather than returning plain, unstyled text strings, each lesson is paired with **Modern CSS** (featuring dark-mode slate palettes, glassmorphism, flexbox, and dynamic CSS variables) so that testing endpoints in the browser provides an immediate visual feedback loop.

### 📁 Directory Layout

```text
Learn_ExpressJs/
├── 01_index.js             # Basic server setup, port configuration & app.listen()
├── 02_handling_request.js  # Request cycle & app.use() middleware handling
├── 03_send_response.js     # res.send() capabilities (Text, JSON, Modern CSS HTML)
├── 04_routing.js           # Multi-route handling (/, /apple, /orange) & custom 404
├── 05_path_parameter.js    # Dynamic parameters with req.params (/:username/:id)
├── 06_query_string.js      # URL queries with req.query (/search?q=value)
├── nodemon.json            # Nodemon watcher configuration
├── package.json            # Dependencies, devDependencies & convenience scripts
├── .gitignore              # Ignores node_modules, logs, and sensitive files
└── README.md               # Complete project documentation
```

---

## 🔄 Architecture & Request Lifecycle

When a client (browser, Postman, mobile app) sends an HTTP request to your Express server, it moves through the following pipeline:

```text
 Client (Browser / Mobile / cURL)
               │
               ▼
   [ http://localhost:3000 ]
               │
               ▼
   Express Application Instance
               │
   ┌───────────┴──────────────────────────────┐
   │                                          │
   ▼                                          ▼
[ app.use() Middleware ]              [ Route Matching ]
 - Intercepts all requests             - app.get('/', ...)
 - Logs method & path                  - app.get('/apple', ...)
 - Authentication / Parsing            - app.get('/:user/:id', ...)
   │                                          │
   └───────────┬──────────────────────────────┘
               │
               ▼
      [ res.send() Handler ]
       ├── Plain Text: "Hello"
       ├── JSON Object: { status: 200 }
       └── Modern CSS HTML: <div class="card">...</div>
               │
               ▼
   Client receives formatted HTTP Response
```

---

## ⚡ Nodemon (Live Reload) Guide

### What is Nodemon?

**Nodemon** is a utility tool that monitors for any changes in your source files and automatically restarts your Node.js application process. 

### Why Use Nodemon?

In standard Node development:
```bash
node 01_index.js
```
Whenever you edit code, add a new route, or tweak CSS:
1. You must switch to your terminal.
2. Press `Ctrl + C` to kill the process.
3. Re-run `node 01_index.js`.
4. Refresh your browser.

With **Nodemon**:
1. Run `npx nodemon 01_index.js` once.
2. Whenever you press `Ctrl + S` in your editor, **Nodemon automatically detects the file save and reboots your server in milliseconds!**

### Installation Options

#### 1. Local Dev Dependency (Recommended — Already Configured in this Repo)
```bash
npm install --save-dev nodemon
```
*Why local?* It keeps your project dependencies self-contained and reproducible across any machine or team member.

#### 2. Global Installation
If you want `nodemon` available across your entire computer terminal:
```bash
npm install -g nodemon
```

### Running with Nodemon

#### Using NPM Scripts (Fastest):
Convenience scripts are pre-configured in `package.json`:

```bash
# Run 01_index.js
npm run dev

# Run specific lesson files:
npm run dev:01    # 01_index.js
npm run dev:02    # 02_handling_request.js
npm run dev:03    # 03_send_response.js
npm run dev:04    # 04_routing.js
npm run dev:05    # 05_path_parameter.js
npm run dev:06    # 06_query_string.js
```

#### Direct Terminal Command:
```bash
# Using npx (uses local devDependency)
npx nodemon 01_index.js

# Or if installed globally
nodemon 01_index.js
```

### Configuration (`nodemon.json`)

This repository includes a pre-configured `nodemon.json` file in the root directory:

```json
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "verbose": true,
  "execMap": {
    "js": "node"
  },
  "watch": [
    "*.js"
  ],
  "ext": "js,json,html,css",
  "delay": 300
}
```

* **`restartable`**: Type `rs` in the terminal to manually trigger a restart without restarting the terminal command.
* **`watch`**: Monitors all JavaScript files in the workspace.
* **`ext`**: Detects changes across `.js`, `.json`, `.html`, and `.css` files.
* **`delay`**: Adds a 300ms debounce to prevent multiple restarts during rapid successive saves.

---

## 🎨 Modern CSS Styling in Express

Sending responses in Express is not limited to plain black-and-white text. In this repository, server responses render modern web pages utilizing contemporary CSS design patterns:

### Glassmorphism & Gradients
Translucent cards with blurred backdrops create depth and visual hierarchy:
```css
.card {
    background: rgba(30, 41, 59, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

### CSS Custom Properties (Variables)
Centralized color themes and reusable values:
```css
:root {
    --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    --accent-gradient: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
}
```

### Flexbox & CSS Grid
Clean, centered, and fully responsive layouts that adapt cleanly across mobile and desktop screens:
```css
body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    font-family: system-ui, -apple-system, sans-serif;
}
```

---

## 📚 Curriculum & Lesson Breakdown

### 01 — Server Initialization (`01_index.js`)

**Concepts Covered:**
* Requiring the `express` module.
* Creating an Express application instance (`const app = express()`).
* Binding to a network port and listening with `app.listen(port, callback)`.
* Basic middleware registration with `app.use()`.

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res) => {
    res.send("<h1>Express Server is Live!</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```

* **Run Command:** `npm run dev:01`
* **Test URL:** [http://localhost:3000](http://localhost:3000)

---

### 02 — Request Interception (`02_handling_request.js`)

**Concepts Covered:**
* Understanding the Request (`req`) and Response (`res`) objects.
* Inspecting incoming HTTP metadata: `req.method` (GET, POST, etc.) and `req.url`.
* Ensuring every request receives a terminated response so the client does not hang.

```javascript
app.use((req, res) => {
    console.log(`Method: ${req.method} | URL: ${req.url}`);
    res.send("Request successfully handled!");
});
```

* **Run Command:** `npm run dev:02`
* **Test URL:** [http://localhost:3000](http://localhost:3000)

---

### 03 — Response Formats (`03_send_response.js`)

**Concepts Covered:**
* `res.send()` polymorphic capability:
  1. **Plain Text:** `res.send("Hello World")`
  2. **JSON Data:** `res.send({ status: "success", data: [...] })` (Sets `Content-Type: application/json`)
  3. **HTML with Modern CSS:** Sending full HTML documents styled with modern CSS gradients, glassmorphism, and responsive grids.

```javascript
// Express automatically sets Content-Type header based on input
res.send(modernHtml);
```

* **Run Command:** `npm run dev:03`
* **Test URL:** [http://localhost:3000](http://localhost:3000)

---

### 04 — Path-Based Routing (`04_routing.js`)

**Concepts Covered:**
* Method-specific route matching using `app.get(path, handler)`.
* Exact path matching: `/`, `/apple`, `/orange`.
* Catch-all 404 handler for undefined routes using `app.use()` and `res.status(404)`.

```javascript
// 1. Root Route
app.get("/", (req, res) => res.send("Home Page"));

// 2. Exact Path Routes
app.get("/apple", (req, res) => res.send("Apple Endpoint"));
app.get("/orange", (req, res) => res.send("Orange Endpoint"));

// 3. 404 Catch-All Handler (must be defined AFTER all valid routes)
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});
```

* **Run Command:** `npm run dev:04`
* **Test URLs:**
  * Root: [http://localhost:3000/](http://localhost:3000/)
  * Apple: [http://localhost:3000/apple](http://localhost:3000/apple)
  * Orange: [http://localhost:3000/orange](http://localhost:3000/orange)
  * 404 Test: [http://localhost:3000/unknown-path](http://localhost:3000/unknown-path)

---

### 05 — Dynamic Path Parameters (`05_path_parameter.js`)

**Concepts Covered:**
* Defining parameterized routes with colons (e.g. `/:username/:id`).
* Extracting path variables from `req.params`.
* Destructuring parameters: `const { username, id } = req.params;`.
* Dynamically personalizing HTML pages based on URL parameters.

```javascript
app.get("/:username/:id", (req, res) => {
    const { username, id } = req.params;
    res.send(`<h1>Welcome @${username}</h1><p>ID: ${id}</p>`);
});
```

* **Run Command:** `npm run dev:05`
* **Test URLs:**
  * Root with sample links: [http://localhost:3000/](http://localhost:3000/)
  * User 1: [http://localhost:3000/sahil/101](http://localhost:3000/sahil/101)
  * User 2: [http://localhost:3000/developer/999](http://localhost:3000/developer/999)

---

### 06 — Query Strings (`06_query_string.js`)

**Concepts Covered:**
* Accessing URL query strings via `req.query`.
* Difference between path parameters (`/users/123`) and query parameters (`/search?q=nodejs&sort=asc`).
* Graceful validation: Handling scenarios where the query parameter is omitted or empty.
* Integrating an interactive HTML search form.

```javascript
app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.send("Please provide a search term (?q=...)");
    }
    res.send(`Results for query: ${q}`);
});
```

* **Run Command:** `npm run dev:06`
* **Test URLs:**
  * Search Page: [http://localhost:3000/](http://localhost:3000/)
  * Query Test: [http://localhost:3000/search?q=express](http://localhost:3000/search?q=express)
  * Empty Query Test: [http://localhost:3000/search](http://localhost:3000/search)

---

## 🛠️ Code Fixes & Improvements

During the review of the original codebase, several critical bugs and omissions were identified and resolved:

| File | Original State / Issue | Resolution & Enhancement |
| :--- | :--- | :--- |
| **`02_handling_request.js`** | ❌ **Runtime Crash**: Contained only an `app.use()` call without importing Express, initializing `app`, setting a port, calling `app.listen()`, or sending a response (causing client timeout). | ✅ Fixed into a complete, standalone runnable server with request method/URL logging, modern CSS UI, and `app.listen()`. |
| **`05_path_parameter.js`** | ⚠️ Typo: `"Welcome to the page pf @${username}"`. `id` was extracted but never used in the response. No root route existed. | ✅ Fixed typo to `"page of"`, included both `username` and `id` in a profile card, and added a navigation home route with test links. |
| **`06_query_string.js`** | ⚠️ Navigating to `/` resulted in a 404. Navigating to `/search` without `?q=` printed `"undefined"`. | ✅ Added an interactive search form on `/`, handled empty queries with a clean error alert, and rendered results with modern badges. |
| **All Files** | ⚠️ Inconsistent placement where `app.listen()` was called before routes/middleware were registered. | ✅ Refactored to standard Express architecture: Imports &rarr; App Setup &rarr; Routes/Middleware &rarr; `app.listen()`. |
| **All Files** | ⚠️ Responses were plain, unstyled text strings. | ✅ Integrated **Modern CSS** across every lesson (dark-mode glassmorphic styling, CSS variables, flexbox/grid, and smooth transitions). |
| **Project Setup** | ❌ Missing `.gitignore` (unnecessary tracking of `node_modules`). | ✅ Created comprehensive `.gitignore`. |
| **Project Setup** | ❌ Missing Nodemon scripts in `package.json`. | ✅ Added `nodemon` dev dependency, pre-configured `npm run dev:*` scripts, and `nodemon.json` configuration file. |

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/Sahilssr1/Learn_ExpressJs.git
cd Learn_ExpressJs
```

### 3. Install Dependencies
Install Express and Nodemon:
```bash
npm install
```

### 4. Run Any Lesson
Start the development server with live reload:

```bash
# Start Lesson 01
npm run dev:01

# Or start any specific lesson
npm run dev:04
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 💡 Express.js Best Practices Cheat Sheet

1. **Order Matters:** Express evaluates routes in the exact order they are declared in code. Always place specific routes (`/apple`) before generic parameterized routes (`/:id`), and place the wildcard 404 handler at the very end.
2. **Always Terminate the Cycle:** Every request must end with `res.send()`, `res.json()`, `res.render()`, or `res.end()`. If you omit this, the browser will wait until it times out.
3. **Use Environment Variables for Ports:**
   ```javascript
   const PORT = process.env.PORT || 3000;
   ```
4. **Use `return` When Sending Early Responses:**
   ```javascript
   if (!user) {
       return res.status(404).send("User not found");
   }
   ```
   This prevents the infamous `"Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"`.

---

## 👤 Author & License

* **Author:** Sahil ([@Sahilssr1](https://github.com/Sahilssr1))
* **License:** [ISC License](https://opensource.org/licenses/ISC)
* **Contributions:** PRs, issues, and feature suggestions are welcome!

