require('dotenv').config()

const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

const express = require('express')
const app = express();

const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')


//routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route<a>')
})
app.use('/api/v1/products', productRouter)

//product route
app.use(errorHandlerMiddleware)
app.use(notFound)


const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on the port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
