"use client";

import { useEffect, useState } from "react";

export default function coursespage() {

    const [courses, setCourses] = useState([]);
    const [form, setForm] = useState({ code: "", title: "", description: "", credits: "", capacity: "" })

    async function loadCrs() {
        const crs = await fetch('/api/courses');
        const j = await crs.json()
        setCourses(j)
    }

    async function submitform(e) {
        e.preventDefault()
        await fetch('/api/courses', {
            method: "POST", 
            body: JSON.stringify(form)
        });
        setForm({ code: "", title: "", description: "", credits: "", capacity: "" })
        loadCrs();

    }
    useEffect(() => {
        loadCrs()
    }, [])

    return (

        <div className="flex">

            <div className="flex-1">

                Students Page

                <form onSubmit={submitform}>
                    <input type="text" placeholder="Code" value={form.code} onChange={e => setForm({
                        ...form,
                        code: e.target.value
                    })} className="border p-2" required/>
                    <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({
                        ...form,
                        title: e.target.value
                    })} className="border p-2 ml-2" />
                    <input type="text" placeholder="Description" value={form.description} onChange={e => setForm({
                        ...form,
                        description: e.target.value
                    })} className="border p-2 ml-2" />
                    <input type="number" placeholder="0" value={form.credits} onChange={e => setForm({
                        ...form,
                        credits: e.target.value
                    })} className="border p-2 mt-2" />
                    <input type="number" placeholder="0" value={form.capacity} onChange={e => setForm({
                        ...form,
                        capacity: e.target.value
                    })} className="border p-2 mt-2" />
                    <button className="border bg-green-400 p-2 ml-2 text-white">Submit Form</button>
                </form>

            </div>

            <div className="flex-1">

                <h1>Student List</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">S. No</th>
                            <th className="px-6 py-3">Code</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Description</th>
                            <th className="px-6 py-3">Credits</th>
                            <th className="px-6 py-3">Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((s, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{s.code}</td>
                                        <td className="px-6 py-4">{s.title}</td>
                                        <td className="px-6 py-4">{s.description}</td>
                                        <td className="px-6 py-4">{s.credits}</td>
                                        <td className="px-6 py-4">{s.capacity}</td>
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