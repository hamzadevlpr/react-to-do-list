import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CountryDropdown from './CountryDropdown';

function CreateUser({ title }) {
    document.body.style.background = 'linear-gradient(to right, #8B5CF6, #D946EF)';
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [country, setCountry] = useState();
    const [countriesList, setCountriesList] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/create';
        axios.post(url, { first, last, email, age, country })
            .then(result => console.log('Sent to Server'))
            .catch(err => console.log('Server Error', err))
        navigate('/')
    }


    return (
        <>
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    {/* Table */}
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 text-center text-3xl">{title}</h2>
                        </header>
                        <div className="py-5 px-20">
                            <form onSubmit={handleSubmit}>
                                <div className="gap-5 sm:flex">
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="name" className=''>First Name</label>
                                        <input type="text" className=''
                                            onChange={(e) => setFirst(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="name" className=''>Last Name</label>
                                        <input type="text" className=''
                                            onChange={(e) => setLast(e.target.value)} />
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="email" className=''>Email</label>
                                    <input type="email" className=''
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="gap-5 sm:flex">
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="age" className=''>Age</label>
                                        <input type="number" className=' '
                                            onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label htmlFor="country" className=''>Country</label>
                                        {/* Use the CountryDropdown component here */}
                                        <CountryDropdown onSelectCountry={setCountry} />
                                    </div>
                                </div>
                                <div className="flex space-x-5 justify-center items-center mt-10">

                                    <Link to={'/'} className='rounded-md bg-gray-100 text-gray-500 px-5 font-medium py-1.5 '>
                                        Cancel
                                    </Link>
                                    <button type='submit' className="rounded-md bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600  px-5 font-medium py-1.5">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CreateUser