const express = require("express");
const app = express();

const PORT = 3000;

// Middleware executed for every incoming request
app.use((req, res) => {
    console.log("Request received!");

    // Modern CSS-styled HTML response
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>01 - Getting Started with Express</title>
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
                    max-width: 500px;
                    width: 100%;
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
                    letter-spacing: 0.05em;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    margin-bottom: 1.25rem;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 0.75rem;
                    background: linear-gradient(to right, #38bdf8, #818cf8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p { color: #94a3b8; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem; }
                .status-box {
                    background: #0f172a;
                    border-radius: 10px;
                    padding: 0.75rem 1rem;
                    font-family: monospace;
                    font-size: 0.875rem;
                    color: #38bdf8;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <span class="badge">Lesson 01 &bull; Server Setup</span>
                <h1>Express Server is Live!</h1>
                <p>Welcome to Express.js. Your basic server is running and listening for incoming HTTP requests.</p>
                <div class="status-box">Listening on Port: ${PORT} &bull; Status: 200 OK</div>
            </div>
        </body>
        </html>
    `);
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
