var mongoose = require('mongoose')

if (!process.env.MONGODB_URI) {
  console.log("Error: MONGODB_URI is not set. Did you run source env.sh?")
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI);

var stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  cap: {
    type: Integer,
    required: true
  },
  price: {
    type: Integer,
    required: true
  },
  time: {
    type: Integer,
    required: true
  },
  sellTime: {
    type: Integer,
    required: true
  }
})

var Stock = mongoose.model('Stock', stockSchema)

module.exports = {
  Stock: Stock
}
