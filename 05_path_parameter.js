const express = require("express")
const app = express();

console.dir(app);


let port = 3000; //8000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});



app.get("/", (req, res) => {
    res.send("Hello i am root path");
});



app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let {username, id} = req.params;
   res.send(`Welcome to the page pf @${username}`)
})
