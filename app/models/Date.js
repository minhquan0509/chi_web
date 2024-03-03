const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  value: {
    type: Date,
  },
});

module.exports = mongoose.model("Date", dateSchema);
