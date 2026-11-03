const express = require("express");
const app = express();

const PORT = 3000;

// app.use() acts as middleware executed for ANY incoming HTTP request
// req: the HTTP Request object (method, headers, url, body, etc.)
// res: the HTTP Response object used to send data back to the client
app.use((req, res) => {
    console.log("Request received!");
    console.log(`Method: ${req.method} | URL: ${req.url}`);

    // Sending a modern CSS-styled response back to the browser
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>02 - Handling Requests</title>
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
                .badge {
                    display: inline-block;
                    background: #34d399;
                    color: #0f172a;
                    font-weight: 700;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    margin-bottom: 1.25rem;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 0.75rem;
                    background: linear-gradient(to right, #34d399, #38bdf8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p { color: #94a3b8; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem; }
                .meta-container {
                    background: #0f172a;
                    border-radius: 12px;
                    padding: 1rem;
                    text-align: left;
                    font-family: monospace;
                    font-size: 0.875rem;
                }
                .meta-row { display: flex; justify-content: space-between; margin-bottom: 0.4rem; }
                .meta-row:last-child { margin-bottom: 0; }
                .label { color: #64748b; }
                .val { color: #34d399; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="card">
                <span class="badge">Lesson 02 &bull; Handling Requests</span>
                <h1>Incoming Request Intercepted!</h1>
                <p><code>app.use()</code> listens to all incoming HTTP requests regardless of path or method.</p>
                <div class="meta-container">
                    <div class="meta-row"><span class="label">HTTP Method:</span> <span class="val">${req.method}</span></div>
                    <div class="meta-row"><span class="label">Requested URL:</span> <span class="val">${req.url}</span></div>
                    <div class="meta-row"><span class="label">Server Status:</span> <span class="val">200 Handled</span></div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
