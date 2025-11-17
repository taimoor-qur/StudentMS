import { dbConnect } from "@/lib/mongoose";
import Course from "@/models/Course";

export async function GET(){
    await dbConnect();
    const course = await Course.find();
    return Response.json(course);
}

export async function POST(req){
    await dbConnect();
    const body = await req.json()
    const newc = await Course.create(body);
    return Response.json({succes: true, msg: newc})
}