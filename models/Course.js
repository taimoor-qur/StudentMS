import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
    code: {type: String, required: true, unique: true},
    title: {type: String, required : true},
    description: String,
    credits: {type: Number, default: 3},
    capacity: {type: Number, default: 30}
    }, 
    
    {timestamps: true}
)

export default mongoose.models.Course || mongoose.model("Course", CourseSchema)