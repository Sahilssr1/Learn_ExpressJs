const express = require("express");
const app = express();

const PORT = 3000;

// Reusable modern HTML page renderer
const renderPage = (title, emoji, description, accentColor = "#38bdf8") => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Express Routing</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }
        .card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2.5rem;
            max-width: 520px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }
        .emoji { font-size: 3.5rem; margin-bottom: 0.5rem; }
        h1 { font-size: 2rem; margin-bottom: 0.75rem; }
        p { color: #94a3b8; font-size: 1rem; line-height: 1.5; margin-bottom: 2rem; }
        .nav-links { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .nav-link {
            text-decoration: none;
            color: #f8fafc;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 0.6rem 1.2rem;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        .nav-link:hover {
            background: ${accentColor};
            color: #0f172a;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="emoji">${emoji}</div>
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="nav-links">
            <a class="nav-link" href="/">🏠 Home</a>
            <a class="nav-link" href="/apple">🍎 Apple</a>
            <a class="nav-link" href="/orange">🍊 Orange</a>
            <a class="nav-link" href="/undefined-route">❌ Test 404</a>
        </div>
    </div>
</body>
</html>
`;

// 1. Root route
app.get("/", (req, res) => {
    res.send(renderPage("Root Path (/)", "🌐", "Welcome to the root path! Use the navigation buttons below to test Express route matching."));
});

// 2. /apple route
app.get("/apple", (req, res) => {
    res.send(renderPage("Apple Path (/apple)", "🍎", "You have successfully connected to the /apple endpoint.", "#ef4444"));
});

// 3. /orange route
app.get("/orange", (req, res) => {
    res.send(renderPage("Orange Path (/orange)", "🍊", "You have successfully connected to the /orange endpoint.", "#f97316"));
});

// 4. Wildcard 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).send(renderPage("404 - Not Found", "🔍", `The route <code>${req.originalUrl}</code> was not found on this server.`, "#f43f5e"));
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
