const express = require("express")
const app = express();

console.dir(app);


let port = 3000; //8000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});



app.get("/", (req, res) => {
    res.send("Hello i am root path");
})

app.get("/apple", (req, res) => {
    res.send("Hi you connected apple path");
})

app.get("/orange", (req, res) => {
    res.send("you connected orange path");
})


app.use((req, res) => {
  res.status(404).send('Not Found');
});