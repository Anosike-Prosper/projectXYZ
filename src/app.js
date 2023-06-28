const express = require('express')
const {connectToMongoDB} = require('./db')
const {PORT} = require('./config')
const router = require('../src/routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('express-async-errors')
const {globalError} = require('./middlewares/errorHandler')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))

app.use( router)
app.use(globalError)



connectToMongoDB()
app.listen(PORT, ()=>{
    console.log(`App is currently running on port ${PORT}`)
} )