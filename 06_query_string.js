const express = require("express")
const app = express();

console.dir(app);


let port = 3000; //8000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});



app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`search result for query: ${q}`);
});


