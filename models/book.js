const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title : {
        type : String,
        require :[true,'Book Title is required'],
        trim : true,
        maxLength :[100,'Book title cannot be more than 100 char'],
    },
    author : {
        type : String,
        require :[true,'Author name is required'],
        trim : true,
    },
    year : {
        type : Number,
        require :[true,'Publication year is requires'],
        min :[1000,'Year must be atleast 1000' ],
        max :[new Date().getFullYear(),'Year cant be in future'],
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

module.exports=mongoose.model('Book',bookSchema);