import express from 'express';
import {router} from "./src/router/userRouter";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose';
import session from 'express-session';

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test2').then(() => {
    console.log('DB Connect!')
}).catch(error => {
    console.log('DB Connection error !')
})
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Ning',
    cookie: { maxAge: 60000 }}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('',router);
app.listen(8080, () => {
    console.log('Bo hieu muon nam')
})