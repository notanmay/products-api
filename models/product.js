const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'please provide a price'],
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: String,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    values: ['ikea', 'liddy','caressa', 'marcos'],
    message: '{VALUE} is not available'
  }
})

module.exports = mongoose.model('Product', productSchema)