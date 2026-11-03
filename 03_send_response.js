const express = require("express");
const app = express();

const PORT = 3000;

// Express res.send() is versatile and can transmit:
// 1. Plain text / Strings
// 2. JavaScript Objects / Arrays (automatically serialized to JSON)
// 3. Dynamic HTML with modern CSS styling

app.use((req, res) => {
    console.log("Request received for response demo");

    // Tip: Uncomment below to test returning pure JSON:
    /*
    return res.send({
        status: "success",
        course: "Learn Express.js",
        lesson: "03 - Send Response",
        timestamp: new Date().toISOString()
    });
    */

    // Modern HTML with inline modern CSS (CSS Variables, Glassmorphism, Grid Layout)
    const modernHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>03 - Sending Responses with Modern CSS</title>
            <style>
                :root {
                    --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
                    --card-bg: rgba(30, 41, 59, 0.75);
                    --accent-gradient: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                    --border-glow: rgba(236, 72, 153, 0.3);
                    --text-main: #f8fafc;
                    --text-muted: #94a3b8;
                }
                * { box-sizing: border-box; margin: 0; padding: 0; }
                body {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background: var(--bg-gradient);
                    color: var(--text-main);
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    padding: 1.5rem;
                }
                .card {
                    background: var(--card-bg);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid var(--border-glow);
                    border-radius: 20px;
                    padding: 2.5rem;
                    max-width: 560px;
                    width: 100%;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(236, 72, 153, 0.15);
                    text-align: center;
                }
                .badge {
                    display: inline-block;
                    background: var(--accent-gradient);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding: 0.4rem 1rem;
                    border-radius: 9999px;
                    margin-bottom: 1.25rem;
                }
                h1 {
                    font-size: 2.25rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 1rem;
                    background: var(--accent-gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p {
                    color: var(--text-muted);
                    font-size: 1.05rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0.75rem;
                    margin-top: 1.5rem;
                }
                .feature-box {
                    background: rgba(15, 23, 42, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 1rem 0.5rem;
                    font-size: 0.85rem;
                }
                .feature-box strong {
                    display: block;
                    color: #f472b6;
                    margin-bottom: 0.25rem;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <span class="badge">Lesson 03 &bull; res.send()</span>
                <h1>Sending Styled Responses</h1>
                <p>Express effortlessly renders dynamic content styled with modern CSS features like CSS custom properties, glassmorphism, and responsive CSS grids.</p>
                <div class="grid">
                    <div class="feature-box">
                        <strong>Strings</strong>
                        Plain text / HTML
                    </div>
                    <div class="feature-box">
                        <strong>JSON</strong>
                        Objects / Arrays
                    </div>
                    <div class="feature-box">
                        <strong>Modern CSS</strong>
                        Responsive Design
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    res.send(modernHtml);
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
