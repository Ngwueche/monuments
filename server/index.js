import express from 'express';
import cors from 'cors';
import  bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from "./routes/post.js"


const app = express();
//middlewares
app.use('/post', postRoutes)
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors())
// const pwd = process.env.DB_PWD
const PORT = process.env.PORT || 3000
mongoose.connect('mongodb+srv://ngwueche:1zW07qZ0qDeneUsv@cluster0.bltn3gb.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT ,()=>console.log('connected and running')))
.catch((error)=>console.log(error.message));