import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  highlights: [
    {
      type: String,
      required: true,
    },
  ],
  specifications: [
    {
      type: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  coverImg: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  brand: {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  productCategory: {
    type: String,
    required: [true, 'Please enter product category'],
  },
  bankOffers: [
    {
      type: String,
      required: true,
    },
  ],
  stock: {
    type: Number,
    required: [true, 'Please enter product stock'],
    default: 1,
  },
  warranty: {
    type: Number,
    default: 1,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  // numOfReviews: {
  //   type: Number,
  //   default: 0,
  // },
  fassured: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const Product = mongoose.model('Product', productSchema)
export default Product
