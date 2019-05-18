import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import api from './api';

const mongodbConnectionString = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongodbConnectionString, { useNewUrlParser: true });

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', api());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));