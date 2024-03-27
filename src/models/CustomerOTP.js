import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const CustomerOTPSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
     required:true
    },
    
  },
  {timestamps: true}
);

const CustomerOTP = models?.CustomerOTP || model("CustomerOTP", CustomerOTPSchema);

export default CustomerOTP;
