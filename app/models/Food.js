const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foods: {
    type: Array,
  },
});

module.exports = mongoose.model("Food", foodSchema);
