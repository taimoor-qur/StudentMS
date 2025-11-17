import { dbConnect } from "@/lib/mongoose";
import Student from "@/models/Student";

export async function GET(){
    await dbConnect();
    const students = await Student.find();
    return Response.json(students);
}

export async function POST(req){
    await dbConnect();
    const body = await req.json()
    const newStd = await Student.create(body);
    return Response.json({succes: true, msg: newStd})
}