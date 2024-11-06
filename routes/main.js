//Router
const express = require("express");
const router = express.Router();

//Main routes
router.get("/", (req, res) => {
    res.render("index.ejs")
});

router.get("/about", (req, res) => {
    res.render("about.ejs")
})

//Router export
module.exports = router;