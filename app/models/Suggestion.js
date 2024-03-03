const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suggestSchema = new Schema({
  suggests: {
    type: String,
  },
});

module.exports = mongoose.model("Suggest", suggestSchema);
