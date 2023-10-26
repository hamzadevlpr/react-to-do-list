import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import CountryDropdown from './CountryDropdown';

function UpdateUser({ title }) {
    document.body.style.background = 'linear-gradient(to right, #8B5CF6, #D946EF)';
    const { id } = useParams();
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [country, setCountry] = useState('');


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const url = 'http://localhost:4050/getUser/' + id;
        axios.get(url)
            .then((res) => {
                setFirst(res.data.first)
                setLast(res.data.last)
                setEmail(res.data.email)
                setAge(res.data.age)
                setCountry(res.data.country)
            }).catch((err) => {
                console.error('Error fetching user data:', err);
            }).finally(() => {
                setLoading(false);
            })
    }, [])
    const updateUser = (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/update/' + id;
        axios.put(url, { first, last, email, age, country })
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
                        {
                            loading ?
                                <div className="flex justify-center p-32">
                                    <ClipLoader className='tsext-gray-600' size={55} />
                                </div>
                                :
                                <form onSubmit={updateUser}>
                                    <div className="py-5 px-20">
                                        <div className="gap-5 sm:flex">
                                            <div className='flex flex-col w-full'>
                                                <label htmlFor="name" className='text-xs p-2'>First Name</label>
                                                <input type="text" className=' py-1 px-3 ring-1 ring-slate-400 rounded-md'
                                                    onChange={(e) => setFirst(e.target.value)} value={first} />
                                            </div>
                                            <div className='flex flex-col w-full'>
                                                <label htmlFor="name" className='text-xs p-2'>Last Name</label>
                                                <input type="text" className='py-1 px-3 ring-1 ring-slate-400 rounded-md'
                                                    onChange={(e) => setLast(e.target.value)} value={last} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <label htmlFor="email" className='text-xs p-2'>Email</label>
                                            <input type="email" className='py-1 px-3 ring-1 ring-slate-400 rounded-md'
                                                onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="gap-5 sm:flex">
                                            <div className='flex flex-col w-full'>
                                                <label htmlFor="age" className='text-xs p-2'>Age</label>
                                                <input type="number" className=' py-1 px-3 ring-1 ring-slate-400 rounded-md'
                                                    onChange={(e) => setAge(e.target.value)} value={age} />
                                            </div>
                                            <div className='flex flex-col w-full'>
                                                <label htmlFor="country" className='text-xs p-2'>Country</label>
                                                <CountryDropdown onSelectCountry={setCountry} selectedCountry={country} />
                                            </div>
                                        </div>
                                        <div className="flex space-x-5 justify-center items-center mt-10">

                                            <button title="Create" className="bg-grey-light hover:bg-grey text-gray-500 px-5 font-medium py-1 rounded border-2">
                                                Cancel
                                            </button>
                                            <button title="Create" className="bg-blue-500 hover:bg-blue-600  text-white px-5 font-medium py-1 rounded border-2 border-blue-500 hover:border-blue-600">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </form>
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default UpdateUser