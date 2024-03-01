const express = require("express");

const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/demobe");

const Product = mongoose.model(`Product`, {
  title: String,
  price: Number,
  thumbnail: String,
});

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Trang chủ" });
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});
app.get("/products", async (req, res) => {
  const sanpham = await Product.find({});

  res.render("product", { title: "danh sách sản phẩm", sanpham: sanpham });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Trang liên hệ" });
});
app.listen(port, () => {
  console.log(`DM kết lối rồi đó
   ${port}`);
});
