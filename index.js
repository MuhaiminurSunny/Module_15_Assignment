let express=require('express');
let dotenv=require('dotenv')
let helloRoutes=require('./routes/helloRoutes');
let authRoutes=require('./routes/authRoutes');
let postRoutes=require('./routes/postRoutes');

dotenv.config();

let app=express();
app.use(express.json());

app.use('/api/hello',helloRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);

let PORT=process.env.PORT||5100;
app.listen(PORT,()=>console.log(`Server running of port ${PORT}`))