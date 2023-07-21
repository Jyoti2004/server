const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true,
    },
    isbn:{
        type : Number,
        required: true
    },
    author:{
        type : String,
        required: true,
    },
    description:{
        type : String,
        required: true,
    },
    published_Date:{
        type : Date,
        required: true,
    },
    publisher:{
        type : String,
        required: true,
    },
    update_date:{
        type : Date,
        required: true,
        default: Date.now,
    },
    imgURL:{
        type : String,
        required: true,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PK5UZpgzwvorrX640MxsqCh0flt7kjPfFNvNc2YbnwROcm5XJV1b23BIPfMDn5XWqvo&usqp=CAU"
    },
    whereToBuy:{
        type : String,
    }
})

//exports a Mongoose model named Book based on a defined schema named BookSchema.
module.exports = Book = mongoose.model('book', BookSchema)