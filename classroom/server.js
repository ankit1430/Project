const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("session-flash");

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  res.flash("success", "user registered successfully");
  res.send("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`hello, ${req.session.name}`);
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You sent a request ${req.session.count} time`);
// });

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });

app.listen(3000, () => {
  console.log("server is listening to 3000");
});
