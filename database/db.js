const mongoose = require('mongoose');

const connectToDB=async()=>{
    try{
        await mongoose.connect(
           "mongodb+srv://manikanta420m_db_user:cyAuDbzd05D6y5ZH@cluster0.18kqr7l.mongodb.net/"
        );
        console.log('mongoDB is connected successfully');
    }
    catch(error){
        console.log('connection failed',error);
        process.exit(1);
    }
}

module.exports=connectToDB;