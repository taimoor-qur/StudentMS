import { dbConnect } from "@/lib/mongoose";
import Student from "@/models/Student";

export async function GET(req, res){
    await dbConnect();

    try {

        const count = await Student.countDocuments({});

        return Response.json({ success: true, data: count});
    } catch (error) {
        return Response.json({ success: false});
    }
}

// export async function GET(){
//     await dbConnect();
//     const course = await Course.find();
//     return Response.json(course);
// }