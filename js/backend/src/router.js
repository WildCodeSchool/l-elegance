const express = require("express");
const userControllers = require("./controllers/userController");

const router = express.Router();


// Route to get a list of items
router.get("/users", userControllers.browse);

// Route to add a new item
router.post("/users", userControllers.add);

// Route to check existed user
router.post("/user", userControllers.check);

// Route to edit existed user
router.put("/user", userControllers.edit);

// Route to delete existed users
router.delete("/user", userControllers.destroy);

// re-send activation code
router.patch("/npassword", userControllers.updatePassword);
// resend code  used to reset password
router.post("/reset", userControllers.updatePassword);
/* ************************************************************************* */

module.exports = router;