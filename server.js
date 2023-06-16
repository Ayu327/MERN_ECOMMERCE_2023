import  express  from 'express';
import colors  from 'colors'
import morgan from 'morgan';
//npm i colors
import cors from 'cors'


import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/catliRoute.js'
import productRoute from './routes/productRoute.js'
import path from 'path'
import {fileURLToPath} from 'url

//configure env
dotenv.config();


//database config
connectDb()

//esmodule fix
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//rest object
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'../client/build')))
//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product',productRoute)


// //rest API
// app.get("/",(req,res)=>{
//     res.send({
//         message:"Welcome to Ecommerce App"
//     });
// });

//rest API
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"../client/build/index.html"))
})

//PORT
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})
