const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    img: {  
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Food", FoodSchema);