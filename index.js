import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const elementName = req.body.elementName;
    console.log(elementName);
    res.render("index.ejs", { elementName });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})