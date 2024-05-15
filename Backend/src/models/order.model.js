import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    product: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' 
    },
    name: String,
    price: Number,
    count: Number,
  },
  { timestamps: true }
);


const OrderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true,
            
        },
        products: [CartItemSchema],
        transaction_id: {},
        amount: { type: Number },
        address:{
            type:String,
            required:true,
        },
        status: {
            type: String,
            default: 'Not processed',
            enum: [
                'Not processed',
                'Processing',
                'Shipped',
                'Delivered',
                'Cancelled',
            ], // enum means string objects
        },
        updated: Date,
        user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        },
    },
    { timestamps: true }
);

export const CartItem = mongoose.model('CartItem', CartItemSchema);
export const Order = mongoose.model('Order', OrderSchema);
