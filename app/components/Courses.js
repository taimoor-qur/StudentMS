import { dbConnect } from "@/lib/mongoose";
import { useEffect, useState } from "react";

function fetchCourses() {

    const [courses, setCourses] = useState([]);

    async function loadCourse() {
        const course = await fetch('/api/courses');
        const k = await course.json()
        setCourses(k)
    }

    useEffect(() => {
        loadCourse()
    }, [])
}

export default fetchCourses