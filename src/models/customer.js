import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true,
      },
  },
  { timestamps: true }
);
const Customer = models?.Customer || model("Customer", CustomerSchema);

export default Customer;
