const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "dell", "mi"],
      message: `{value} is not supported `,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
