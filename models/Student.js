import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
    firstName: {type: String, required : true},
    lastName: {type: String, required : true},
    email: {type: String, required: true, unique: true},
    phone: {type: String}
    }, 
    
    {timestamps: true}
)

export default mongoose.models.Student || mongoose.model("Student", StudentSchema)