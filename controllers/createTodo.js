//import th model

const Todo = require("../models/Todo");

exports.createTodo = async(req,res) => {
    try {
        //extract title and desc from request ki body
        const {title,description} = req.body;
        //create a new todo object with the extracted data
        const response = await Todo.create({title,dscription});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message: err.message,
        })
    }
}