const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/eventController");

router.post("/", auth, ctrl.createEvent);
router.get("/mine", auth, ctrl.listMyEvents);
// router.get("/all", auth, ctrl.listAllEvents);
// router.get("/:id", auth, ctrl.getEventById);

module.exports = router;
