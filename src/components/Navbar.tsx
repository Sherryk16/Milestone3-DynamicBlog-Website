"use client"
import React,{useEffect,useState} from "react"
import Link from "next/link"

export default function Navbar () {
    const [currentDateTime, setCurrentDateTime] =  useState(``);
    useEffect(()=>{
        const updateDateTime =() =>{
            const now= new Date();
            const options: Intl.DateTimeFormatOptions ={
                weekday:'long',
                year:'numeric',
                month:'long',
                day:'numeric',
                hour:'numeric',
                minute:'numeric',
                second:'numeric',
                hour12:true
                
            }
            setCurrentDateTime(now.toLocaleDateString('en-US',options))
           
        }
        updateDateTime();
        const interValid = setInterval(updateDateTime,1000);
        return()=> clearInterval(interValid)
    },[])
    return(
        <header className="text-gray-400 font-bold shadow-lg ">
            <div className="container mx-auto flex flex-wrap  p-2  flex-col md:flex-row items-center">
                <div className= "flex-1 text-black ">
                    <span>{currentDateTime}</span>

                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                    <Link href={'/'} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">{""} Home{""}</Link>
                    <Link href={'/'} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">{""} About{""}</Link>
                    <Link href={'/'} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">{""}Blog {""}</Link>
                    <Link href={'/'} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">{""} Contact{""}</Link>

                </nav>
            </div>
        </header>

    )
}