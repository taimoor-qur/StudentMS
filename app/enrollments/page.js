"use client";

import { useEffect, useState } from "react";


export default function enrollmentpage() {


    const [students, setStudents] = useState([]);
    
        async function loadStudent() {
            const student = await fetch('/api/students');
            const st = await student.json()
            setStudents(st)
        }
    
        useEffect(() => {
            loadStudent()
        }, [])
        
    // Fetching Couese
    const [courses, setCourses] = useState([]);

    async function loadCourse() {
        const course = await fetch('/api/courses');
        const k = await course.json()
        setCourses(k)
    }

    useEffect(() => {
        loadCourse()
    }, [])

    //


    const [enrollment, setEnrollment] = useState([]);
    const [form, setForm] = useState({ student: "", course: "", status: "", grade: "" })

    async function loadEnrl() {
        const enrl = await fetch('/api/enrollments');
        const j = await enrl.json()
        setEnrollment(j)
    }

    async function submitform(e) {
        e.preventDefault()
        await fetch('/api/enrollments', {
            method: "POST",
            body: JSON.stringify(form)
        });
        setForm({ student: "", course: "", status: "", grade: "" })
        loadEnrl();

    }
    useEffect(() => {
        loadEnrl()
    }, [])

    return (

        <div className="flex">

            <div className="flex-1">

                Students Page

                <form onSubmit={submitform}>

                    {/* <input type="text" placeholder="Student" value={form.student} onChange={e => setForm({
                        ...form,
                        student: e.target.value
                    })} className="border p-2" required /> */}
                    <select placeholder="" onChange={e => setForm({
                        ...form,
                        student: e.target.value
                    })}>
                        <option>Select Student</option>
                        {students.map(std => (
                            <option value={std._id}>{std.firstName + " " + std.lastName}</option>))}
                    </select>
                    {/* <input type="text" placeholder="Course" value={form.course} onChange={e => setForm({
                        ...form,
                        course: e.target.value
                    })} className="border p-2 ml-2" /> */}
                    <select onChange={e => setForm({
                        ...form,
                        course: e.target.value
                    })}>
                        <option>Select Course</option>
                        {courses.map(cou => (
                            <option value={cou._id}>{cou.title}</option>))}
                    </select>
                    <input type="text" placeholder="Status" value={form.status} onChange={e => setForm({
                        ...form,
                        status: e.target.value
                    })} className="border p-2 ml-2" />
                    <input type="text" placeholder="0" value={form.grade} onChange={e => setForm({
                        ...form,
                        grade: e.target.value
                    })} className="border p-2 mt-2" />
                    <button className="border bg-green-400 p-2 ml-2 text-white">Submit Form</button>


                    {/* <select name="stdname" value={form.student} onChange={e => setForm({...form,student: e.target.value})}>
                    {students.map((a, i) => { 
                    return (
                    <option key={i}>{a._id + a.firstName}</option>
                    )
                    })
                    }
                    
                </select> */}


                    {/* <input type="text" onChange={a._id}></input> */}
                </form>

            </div>

            <div className="flex-1">

                <h1>Student List</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">S. No</th>
                            <th className="px-6 py-3">Student</th>
                            <th className="px-6 py-3">Course</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollment.map((s, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{s.student.firstName + " " + s.student.lastName}</td>
                                        <td className="px-6 py-4">{s.course.title}</td>
                                        <td className="px-6 py-4">{s.status}</td>
                                        <td className="px-6 py-4">{s.grade}</td>
                                    </tr>
                                );
                            }
                            )

                        }
                    </tbody>
                </table>

            </div>

        </div>


    )

}