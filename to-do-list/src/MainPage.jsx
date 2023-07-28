import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ClipboardEdit, Trash2 } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

function MainPage() {
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDelete = (id) => {
        const url = 'http://localhost:5000/delete/' + id;
        axios.delete(url)
            .then((res) => {
                console.log("Data Deleted Successfully")
                setEmployee((prevEmployees) => prevEmployees.filter((emp) => emp._id !== id));
            })
            .catch((err) => {
                console.error('Error fetching user data:', err);
            })
    }
    useEffect((id) => {
        setLoading(true);
        const url = 'http://localhost:5000/';
        axios.get(url)
            .then((res) => {
                setEmployee(res.data);
                setEmployee((prevEmployees) => prevEmployees.filter((emp) => emp._id !== id));
            }).catch((err) => {
                console.error('Error fetching user data:', err);
            }).finally(() => {
                setLoading(false);
            })

    }, [])

    return (
        <>
            <section className="antialiased  text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    {/* Table */}
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 text-center">Employee Details</h2>
                            <Link to={'/create'} className='text-center rounded-md bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600  px-5 font-medium py-1.5'>Create Employee</Link>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                {
                                    loading ? (
                                        <div className="flex justify-center p-32">
                                            <ClipLoader className="text-gray-600" size={55} />
                                        </div>
                                    ) : employee.length === 0 ? ( // Check if the employee array is empty
                                        <div className="flex justify-center p-8 text-xl font-medium text-gray-800">
                                            Empty Table
                                        </div>
                                    ) : (
                                        <table className="table-auto w-full">
                                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                <tr>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Name</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Email</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Age</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Country</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-gray-100">
                                                {
                                                    employee.map((element, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="flex items-center">
                                                                        <div className="font-medium text-gray-800">{element.first} {element.last}</div>
                                                                    </div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left">{element.email}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-left font-medium text-green-500">
                                                                        {element.age}
                                                                    </div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="text-sm text-left font-medium">{element.country}</div>
                                                                </td>
                                                                <td>
                                                                    <Link to={`/update/${element._id}`} title="Edit" className="px-2 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 rounded inline-flex items-center">
                                                                        <ClipboardEdit size={20} className='text-green-500' />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <button onClick={(e) => handleDelete(element._id)} title="Delete" className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 rounded inline-flex items-center">
                                                                        <Trash2 size={20} className='text-rose-500' />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default MainPage