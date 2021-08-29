const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Client", ClientSchema);