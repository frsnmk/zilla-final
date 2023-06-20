const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {collection: "hotels"}
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
