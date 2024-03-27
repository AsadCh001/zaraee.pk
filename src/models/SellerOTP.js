import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const SellerOTPSchema = new Schema(
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

const SellerOTP = models?.SellerOTP || model("SellerOTP", SellerOTPSchema);

export default SellerOTP;
