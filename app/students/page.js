"use client";

import { useEffect, useState } from "react";

export default function studentspage() {

    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" })

    async function loadStd() {
        const std = await fetch('/api/students');
        const j = await std.json()
        setStudents(j)
    }

    async function submitform(e) {
        e.preventDefault()
        await fetch('/api/students', {
            method: "POST",
            body: JSON.stringify(form)
        });
        setForm({ firstName: "", lastName: "", email: "", phone: "" })
        loadStd();

    }
    useEffect(() => {
        loadStd()
    }, [])

    return (

        <div className="flex">

            <div className="flex-1">

                Students Page

                <form className="max-w-md mx-auto" onSubmit={submitform}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_firstname" id="floating_firstname" value={form.firstName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={e => setForm({...form, firstName: e.target.value})} />
                        <label htmlFor="floating_firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_lastname" id="floating_lastname" value={form.lastName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={e => setForm({...form, lastName: e.target.value})} />
                        <label htmlFor="floating_lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" value={form.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={e => setForm({...form, email: e.target.value})} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="phone" name="floating_phone" id="floating_phone" value={form.phone} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={e => setForm({...form, phone: e.target.value})} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    {/* <input type="text" placeholder="First Name" value={form.firstName} onChange={e => setForm({
                        ...form,
                        firstName: e.target.value
                    })} className="border p-2" required/>
                    <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => setForm({
                        ...form,
                        lastName: e.target.value
                    })} className="border p-2 ml-2" />
                    <input type="email" placeholder="example@example.com" value={form.email} onChange={e => setForm({
                        ...form,
                        email: e.target.value
                    })} className="border p-2 ml-2" />
                    <input type="phone" placeholder="0333-0000000" value={form.phone} onChange={e => setForm({
                        ...form,
                        phone: e.target.value
                    })} className="border p-2 mt-2" />
                    <button className="border bg-green-400 p-2 ml-2 text-white">Submit Form</button> */}
                </form>

            </div>

            <div className="flex-1">

                <h1>Student List</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">S. No</th>
                            <th className="px-6 py-3">First Name</th>
                            <th className="px-6 py-3">Last Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((s, i) => {
                                return (
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{s.firstName}</td>
                                        <td className="px-6 py-4">{s.lastName}</td>
                                        <td className="px-6 py-4">{s.email}</td>
                                        <td className="px-6 py-4">{s.phone}</td>
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