const mysqlConnection = require("../connection");

const getTasks = (req, res) => {
  const query = "SELECT * FROM tasks";
  mysqlConnection.query(query, function (err, result) {
    if (err) {
      console.log("err", err);
    }
    res.send(result);
    console.log("result", result);
  });
};

const addTasks = (req, res) => {
  const taskMsg = req.body.task;
  const query = `insert into tasks (task) values (?)`;
  mysqlConnection.query(query, taskMsg, function (err, result) {
    if (err) {
      console.log("err", err);
    }
    res.send("Task Added Succesfully");
    console.log("result", result);
  });
};

const deleteTasks = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM tasks WHERE id= ?`;
  mysqlConnection.query(query, id, function (err, result) {
    if (err) {
      console.log("err", err);
    }
    res.send("task deleted sucessfully");
    console.log("result", result);
  });
};

const updateTasks = (req, res) => {
  const taskMsg = req.body.task;
  const id = req.params.id;
  const query = `update tasks set task = ? where id = ?`;
  mysqlConnection.query(query, [taskMsg, id], function (err, result) {
    if (err) {
      console.log("err", err);
    }
    res.send("task updated sucessfully");
    console.log("result", result);
  });
};

module.exports = { getTasks, addTasks, deleteTasks, updateTasks };
