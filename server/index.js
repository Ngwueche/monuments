import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

import postRoutes from './routes/posts.js'
const app = express()

app.use('/posts',postRoutes)
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors)
const PORT = process.env.PORT || 5000
const dbName = process.env.DB_NAME
const dbPwd = process.env.DB_PWD

const CONNECTION_URL = `mongodb+srv://${dbName}:${dbPwd}@cluster0.bltn3gb.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log `Serving running on ${PORT}`))
.catch((error)=> console.log(error.message))
