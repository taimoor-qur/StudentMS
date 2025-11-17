import { dbConnect } from "@/lib/mongoose";
import Enrollment from "@/models/Enrollment";



export async function GET(){
    await dbConnect();
    const enrollment = await Enrollment.find().populate("student").populate("course");
    return Response.json(enrollment);
}

export async function POST(req){
    await dbConnect();
    const body = await req.json();
    // body.findOne('student')
    const newe = await Enrollment.create(body);
    // console.log(newe)
    const populated = await newe.populate(["student","course"]);
    return Response.json({succes: true, msg: newe})
}