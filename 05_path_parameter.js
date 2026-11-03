const express = require("express");
const app = express();

const PORT = 3000;

// Root path with helpful test links
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>05 - Path Parameters</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: system-ui, -apple-system, sans-serif;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #f8fafc;
                    padding: 1.5rem;
                }
                .card {
                    background: rgba(30, 41, 59, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem;
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
                }
                h1 { font-size: 2rem; margin-bottom: 0.75rem; }
                p { color: #94a3b8; font-size: 1rem; margin-bottom: 1.5rem; }
                .links { display: flex; flex-direction: column; gap: 0.75rem; }
                .param-link {
                    display: block;
                    padding: 0.75rem 1rem;
                    background: #0f172a;
                    border: 1px solid #334155;
                    border-radius: 10px;
                    color: #38bdf8;
                    text-decoration: none;
                    font-weight: 600;
                    font-family: monospace;
                    transition: all 0.2s ease;
                }
                .param-link:hover {
                    border-color: #38bdf8;
                    background: rgba(56, 189, 248, 0.1);
                    transform: translateY(-2px);
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Path Parameters Demo</h1>
                <p>Express extracts dynamic variables from the URL path via <code>req.params</code>.</p>
                <div class="links">
                    <a class="param-link" href="/sahil/101">👉 /sahil/101</a>
                    <a class="param-link" href="/alex/500">👉 /alex/500</a>
                    <a class="param-link" href="/developer/777">👉 /developer/777</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Dynamic path parameters route: /:username/:id
app.get("/:username/:id", (req, res) => {
    // req.params contains all URL parameter variables
    const { username, id } = req.params;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile of @${username}</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: system-ui, -apple-system, sans-serif;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #f8fafc;
                    padding: 1rem;
                }
                .profile-card {
                    background: rgba(30, 41, 59, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem;
                    width: 100%;
                    max-width: 420px;
                    text-align: center;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
                }
                .avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1, #a855f7);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
                }
                h1 { font-size: 1.75rem; margin-bottom: 0.25rem; }
                .handle { color: #818cf8; font-size: 1.1rem; margin-bottom: 1.5rem; }
                .meta-badge {
                    display: inline-block;
                    background: #0f172a;
                    border: 1px solid #334155;
                    border-radius: 8px;
                    padding: 0.5rem 1rem;
                    font-family: monospace;
                    font-size: 0.9rem;
                    color: #38bdf8;
                    margin-bottom: 1.5rem;
                }
                .back-btn {
                    display: block;
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.2s;
                }
                .back-btn:hover { color: #f8fafc; }
            </style>
        </head>
        <body>
            <div class="profile-card">
                <div class="avatar">${username.charAt(0).toUpperCase()}</div>
                <h1>Welcome to the page of</h1>
                <div class="handle">@${username}</div>
                <div class="meta-badge">User ID: #${id}</div>
                <a class="back-btn" href="/">&larr; Back to Parameters Demo</a>
            </div>
        </body>
        </html>
    `);
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
