import express from 'express';
import cors from 'cors';
import  bodyParser from 'body-parser';
import mongooose from 'mongoose'

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.cors(())