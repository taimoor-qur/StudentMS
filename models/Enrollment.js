import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
    {
    student: {type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true},
    course: {type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true},
    status: {type: String, enum: ["ENROLLED","COMPLETED","DROPEED"], default: "ENROLLED"},
    grade: {type: String}
    }, 
    
    {timestamps: true}
)

// EnrollmentSchema.index({student: 1, course:1}, {unique: true})
// EnrollmentSchema.index({student: 1, course:1}, {unique: true})

export default mongoose.models.Enrollment || mongoose.model("Enrollment", EnrollmentSchema)