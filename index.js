import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const CONNECTION_URL = 'mongodb+srv://certifyYourself:2JPk3jP8xSnzerB@cluster0.6znkkwh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

app.use('/posts', postRoutes);
app.use('/auth/login', userRoutes);

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server runing: ${PORT}`)))
//     .catch((err) => console.log(err))

mongoose.connect("mongodb://localhost:27017/CertifyYourselfDB", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server runing: ${PORT}`)))
    .catch((err) => console.log(err))

// mongoose.set('useFindAndModify', false);