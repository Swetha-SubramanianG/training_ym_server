import UserModel from "../Model/userModel.js";

export const createUserController=async (req,res) => {
    try{
     const {name,email,password} = req.body
     const response=await UserModel.createUser(req.body);
     res.status(201).json({
        message: "user has been created",
        userId: response
     })
    }
     catch(err){
        res.status(500).json({error: err.message})
    }
}
//get all  the users
export const getAllUsersController = async (req,res) => {
    try{
            const data = await UserModel.getAllUsersModel();
            res.json(data)
        }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

export const updateUserPasswordController = async (req,res) => {
    try{
        const {id} = req.params;
        const {password} = req.body;
        const updatePassword = await UserModel.updateUserPasswordModel(req.params.id, {password});
        if(!updatePassword){
            res.json({message: "User not found"});
        }
        else{
            res.status(200).json({message: "Password updated successfully"});
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

export const deleteUserModelController = async (req,res) => {
    try{
        const {id} = req.params;
        const delteUser = await UserModel.deleteUserModel(req.params.id);
        if(!delteUser){
            res.json({message: "User not found"});
        }
        else{
            res.status(200).json({message: "User deleted successfully"});
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}