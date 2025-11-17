import Link from "next/link";
import { FaBeer, FaChartBar, FaChartPie, FaDashcube, FaUserCircle, FaUsers } from "react-icons/fa";
export default function Siderbar() {


    const links = [

        { href: "/", label: <FaChartPie/>, title: "Dashboard"},
        { href: "/students", label: <FaUserCircle/>, title: "Students" },
        { href: "/courses", label: <FaChartPie/>, title: "Courses" },
        { href: "/enrollments", label: <FaChartPie/>, title: "Enrollments" }
    ]

    return (

        <>

            <aside style={{width:"250px"}} 
            className="bg-blue-900 text-blue-100 flex flex-col p-4">
                <h2 className="text-2xl mb-4">Student Portal</h2>
                {
                    links.map(link => {
                        return (
                        <Link key={link.href}
                            href={link.href}
                            style={{
                                textDecoration: "none"
                            }}
                            className="flex items-center text-light text-lg mb-2"

                        >
                            {link.label}&nbsp;{link.title}

                        </Link>
                        )

                    })

                }
            </aside>

        </>

    )
}