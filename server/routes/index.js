const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/categories", require("./categories.routes"));
router.use("/notes", require("./notes.routes"));

module.exports = router;
