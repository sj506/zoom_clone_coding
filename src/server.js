import express from "express";

const app = express();

app.set("view engine", "pug")
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // 유저가 볼 수 있는 폴더 설정
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);