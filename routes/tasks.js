const express = require("express");
const router = express.Router();
const {
  getTasks,
  addTasks,
  deleteTasks,
  updateTasks,
} = require("../controller/taskController");

router.get("/getTasks", getTasks);

router.post("/addTasks", addTasks);

router.delete("/deleteTasks/:id", deleteTasks);

router.put("/updateTasks/:id", updateTasks);

module.exports = router;
