const express = require("express");
const app = express();

const PORT = 3000;

// Root route with an interactive modern search interface
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>06 - Query Strings Demo</title>
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
                .search-card {
                    background: rgba(30, 41, 59, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem;
                    width: 100%;
                    max-width: 480px;
                    text-align: center;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
                }
                h1 { font-size: 2rem; margin-bottom: 0.5rem; }
                p { color: #94a3b8; margin-bottom: 1.5rem; font-size: 0.95rem; }
                form { display: flex; gap: 0.5rem; }
                input[type="text"] {
                    flex: 1;
                    padding: 0.75rem 1rem;
                    border-radius: 10px;
                    border: 1px solid #475569;
                    background: #0f172a;
                    color: white;
                    outline: none;
                    font-size: 1rem;
                }
                input[type="text"]:focus {
                    border-color: #38bdf8;
                    box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
                }
                button {
                    padding: 0.75rem 1.25rem;
                    background: linear-gradient(135deg, #38bdf8, #6366f1);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                button:hover { opacity: 0.9; }
                .sample-links {
                    margin-top: 1.5rem;
                    font-size: 0.85rem;
                    color: #94a3b8;
                }
                .sample-links a {
                    color: #38bdf8;
                    text-decoration: none;
                    margin: 0 0.35rem;
                }
                .sample-links a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="search-card">
                <h1>🔍 Query Strings</h1>
                <p>Search using Express query parameters (<code>req.query</code>)</p>
                <form action="/search" method="GET">
                    <input type="text" name="q" placeholder="Search JavaScript, Node, CSS..." required />
                    <button type="submit">Search</button>
                </form>
                <div class="sample-links">
                    Quick test:
                    <a href="/search?q=javascript">JavaScript</a> &bull;
                    <a href="/search?q=express">Express</a> &bull;
                    <a href="/search?q=nodemon">Nodemon</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Search route handling query parameters
app.get("/search", (req, res) => {
    // req.query parses URL query string after '?' (e.g., /search?q=apple -> { q: 'apple' })
    const { q } = req.query;

    if (!q) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>No Query Provided</title>
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
                        background: rgba(30, 41, 59, 0.8);
                        border: 1px solid #ef4444;
                        border-radius: 20px;
                        padding: 2.5rem;
                        max-width: 450px;
                        text-align: center;
                    }
                    h2 { color: #ef4444; margin-bottom: 0.75rem; }
                    p { color: #94a3b8; margin-bottom: 1.5rem; }
                    a { color: #38bdf8; text-decoration: none; font-weight: 500; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>⚠️ Nothing Searched!</h2>
                    <p>No search parameter was received. Please query with <code>?q=yourSearchTerm</code>.</p>
                    <a href="/">&larr; Return to Search Page</a>
                </div>
            </body>
            </html>
        `);
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Search Results: ${q}</title>
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
                .result-card {
                    background: rgba(30, 41, 59, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 2.5rem;
                    width: 100%;
                    max-width: 480px;
                    text-align: center;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
                }
                .badge {
                    display: inline-block;
                    background: #38bdf8;
                    color: #0f172a;
                    font-weight: 700;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    margin-bottom: 1rem;
                }
                h1 { font-size: 1.85rem; margin-bottom: 0.75rem; }
                .query-pill {
                    display: inline-block;
                    background: #0f172a;
                    border: 1px solid #38bdf8;
                    color: #38bdf8;
                    font-family: monospace;
                    font-size: 1.1rem;
                    padding: 0.5rem 1.25rem;
                    border-radius: 8px;
                    margin: 1rem 0 1.5rem;
                }
                .meta-note { color: #94a3b8; font-size: 0.9rem; margin-bottom: 1.5rem; }
                .back-btn {
                    display: inline-block;
                    text-decoration: none;
                    color: #94a3b8;
                    font-size: 0.9rem;
                    transition: color 0.2s;
                }
                .back-btn:hover { color: #f8fafc; }
            </style>
        </head>
        <body>
            <div class="result-card">
                <span class="badge">Results Found</span>
                <h1>Search Query Received</h1>
                <div class="query-pill">${q}</div>
                <p class="meta-note">Extracted dynamically via <code>req.query.q</code></p>
                <a class="back-btn" href="/">&larr; Try another search</a>
            </div>
        </body>
        </html>
    `);
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
