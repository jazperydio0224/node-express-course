const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxLength: [100, "exceeded the max number of characters allowed"],
    unique: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// first argument is the singular name of the collection your model is for
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
