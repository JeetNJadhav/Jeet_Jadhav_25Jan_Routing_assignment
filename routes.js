const express = require("express");
const router = express.Router();
const date = new Date();

router.get("/", (req, res, next) => {
  res.send("Home route");
});
router.get("/date", (req, res, next) => {
  res.send(date.toUTCString());
});
router.get("/user", (req, res, next) => {
  res.send("<h2>User Get route with h2 tag</h2>");
});
router.post("/user", (req, res, next) => {
  console.log("req.body-->", req.body);
  res.send("<h2>User Post route with h2 tag</h2>");
});
router.put("/user", (req, res, next) => {
  res.send("<h2>User put route with h2 tag</h2>");
});
router.all("/test", (req, res, next) => {
  res.send(date.toUTCString());
});
router.get("/:name", (req, res, next) => {
  console.log("req.params", req.params);
  res.send("dynamic routes " + req.params.name);
});

module.exports = router;
