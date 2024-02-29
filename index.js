const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index", { title: "helo" });
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Trang liên hệ" });
});
app.listen(port, () => {
  console.log(`DM kết lối rồi đó
   ${port}`);
});
