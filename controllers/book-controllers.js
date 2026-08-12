const Book=require('../models/book');

const getAllBooks=async(req,res)=>{
   try{
      const allBooks=await Book.find({});
      if(allBooks.length>0){
         res.status(200).json({
            success : true,
            message : 'List of books successfully fetched',
            data : allBooks
         })
      }
      else{
         res.status(404).json({
            success : false,
            message : 'No books found in database',
         })
      }
   }
   catch(e){
      console.log(e);
      res.status(500).json({
            success : false,
            message : 'somethong went wrong',
         })
   }
}

const getSingleBookById=async(req,res)=>{
    try{
      const getCurrBook=req.params.id;
      const bookDetailsById=await Book.findById(getCurrBook);
      if(!bookDetailsById){
         res.status(404).json({
            success : false,
            message : 'book with cur Id not found',
         });
      }
      else{
         res.status(200).json({
            success : true,
            message : 'book successfully fetched',
            data : bookDetailsById
         });
      }
    }
    catch(e){
      console.log(e);
      res.status(500).json({
            success : false,
            message : 'somethong went wrong',
         })
    }
}

const addNewBook=async(req,res)=>{
   try{
      const newBookFormData=req.body;
      const newlyCreatedBook=await Book.create(newBookFormData);
      if(newBookFormData){
        res.status(201).json({
            success : true,
            message : 'Book added Successsfully',
            data : newlyCreatedBook
        })
      }
   }
   catch(e){
      console.log(e);
   }
}
const updateSingleBook=async(req,res)=>{
   
}
const deleteBook=async(req,res)=>{

}

module.exports={getAllBooks,getSingleBookById,addNewBook,updateSingleBook,deleteBook};
