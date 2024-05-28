import express from "express";
import session from "express-session";
import mysql2 from "mysql2/promise.js"
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config({path:'../.env'});

//----------------------------------------------------------------------------------------------
const DB_HOST = process.env.DB_HOST;
const BACKEND_PORT = process.env.BACKEND_PORT || 5099;
const FRONTEND_PORT = process.env.FRONTEND_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DBNAME = process.env.DB_DBNAME;
const DB_PORT = process.env.DB_PORT;
//----------------------------------------------------------------------------------------------


const app = express();

app.use(session(
    {
        secret:"SomeSecretCode",
        cookie:{maxAge:1000*60*60 , httpOnly:true},
        resave:false,
        saveUninitialized:false
    }
))


app.use(cors(
    {
        credentials:true,
        origin: 'https://vish-rentify-project.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(express.json());

const con = mysql2.createConnection({
    host:DB_HOST, port:DB_PORT, user:DB_USERNAME , password:DB_PASSWORD ,database:DB_DBNAME
})

app.listen(BACKEND_PORT,()=>{console.log('Server Running at  '+BACKEND_PORT)})

app.get('/',(req,res)=>{
    res.send('Server running using Render')
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    try {
        const [row] =await (await con).query('select * from user where email=? and password =?',[email,password]);
        if(row.length>0){
            req.session.userDetail = row[0];
            console.log(req.session.userDetail);
            res.status(200).send('Login Successful.');
        }
    } catch (error) {
        if(error){
            res.status(404).send('Unsuccessful Login attempt.');
        }
    }
})

app.post('/isLoggedIn',(req,res)=>{
    console.log('Is Logged in Session')
    console.log(req.session.userDetail)
    if(req.session.userDetail){
        res.status(200).send(req.session.userDetail);
    }else{
        res.status(404).send('Not Logged In.');
    }
})

app.post('/registerUser', async (req,res)=>{
    const {fname,lname,email,mobile,password} = req.body;
    try {
        const [row] = await (await con).query('Insert into user(fname,lname,email,mobile,password) values(?,?,?,?,?)',[fname,lname,email,mobile,password]);
        if(row.affectedRows>0){
            res.status(200).send('Register Successful.');
        }
    } catch (error) {
        if(error){
            res.status(500).send('Register Unsuccessful.');
        }
    }
})

app.post('/logout',(req,res)=>{
    if(req.session.userDetail){
        req.session.destroy((err)=>{
            if(err){
                res.status(500).send('Internal server error');
            }
        })
        res.status(200).send('Logout Successful.')
    }else{
        console.log('No session to logout.');
        res.status(500).send('Internal server error');
    }
})

app.post('/sell-property',async (req,res)=>{
    const {place,address,bedrooms,bathrooms,amenities,price,user_id} = req.body;
    // console.log(req.body);
    try {
        const [row] = await (await con).query('Insert into properties (place,address,bedrooms,bathrooms,amenities,price,user_id) values (?,?,?,?,?,?,?)',[place,address,bedrooms,bathrooms,amenities,price,user_id]);
        if(row.affectedRows>0){
            res.status(200).send('Property registered Successful.');
        }
    } catch (error) {
        console.log(error);
        if(error){
            res.status(500).send('Property register Unsuccessful.');
        }
    }
})

app.post('/all-properties',async (req,res)=>{
    const {id} = req.body;
    try {
        const [row] = await (await con).query('select * from properties where user_id != ?',[id]);
        if(row.length>0){
            res.status(200).send(row);
        }
    } catch (error) {
        if(error){
            res.status(500).send('Internal Server Error.')
        }
    }

})

app.post('/get-property',async (req,res)=>{
    const {id} = req.body;
    try {
        const [row] = await (await con).query('select place,address,bedrooms,bathrooms,amenities,price,fname,lname,email,mobile,user_id,id from properties,user where user_id=id and property_id=?',[id]);
        if(row.length>0){
            res.status(200).send(row[0]);
        }
    } catch (error) {
        if(error){
            res.status(500).send('Internal Server Error.')
        }
    }
    
})

app.post('/my-property',async (req,res)=>{
    const {id} = req.body;
    try {
        const [row] = await (await con).query('select * from properties where user_id=?',[id]);
        if(row.length>0){
            res.status(200).send(row);
        }
    } catch (error) {
        if(error){
            res.status(500).send('Internal Server Error.')
        }
    }
    
})

app.post('/remove-property',async (req,res)=>{
    const {id} = req.body;
    try {
        const [row] = await (await con).query('DELETE FROM properties WHERE property_id=?',[id]);
        if(row.affectedRows>0){
            res.status(200).send('Removed Succesfully');
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(500).send('Internal Server Error.')
        }
    }
    
})


app.post('/update-property',async (req,res)=>{
    const {place,address,bedrooms,bathrooms,amenities,price,id} = req.body;
    console.log(req.body);
    try {
        const [row] = await (await con).query('update properties set place=?,address=?,bedrooms=?,bathrooms=?,amenities=?,price=? where property_id=?',[place,address,bedrooms,bathrooms,amenities,price,id]);
        if(row.affectedRows>0){
            res.status(200).send('Property Updated Successful.');
        }
    } catch (error) {
        console.log(error);
        if(error){
            console.log(error)
            res.status(500).send('Property Update Unsuccessful.');
        }
    }
})

app.post('/search', async (req,res)=>{
    const {search} = req.body;
    console.log(isNaN(search));
    if (!isNaN(search)) {
        let num = parseInt(search);
        try {
            const [row] = await (await con).query('select * from properties where price>=? order by price',[num]);
            if(row.length>0){
                res.status(200).send(row);
            }
        } catch (error) {
            if(error){
                res.status(500).send('Internal Server Error.')
            }
        }

    } 
    else if (isNaN(search)) {
        try {
            const [row] = await (await con).query('select * from properties where place=?',[search]);
            if(row.length>0){
                res.status(200).send(row);
            }
        } catch (error) {
            if(error){
                res.status(500).send('Internal Server Error.')
            }
        }
    } 
    else {
      res.status(500).send('Invalid Search')
    }
})