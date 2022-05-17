import React from 'react'
import {useState,useEffect}from 'react'
function Movie() {
    const [data,setData]=useState([])
 
 useEffect((e)=>{
getMovies();
 },[])
    const getMovies=async()=>{
        const api=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=94a86c75")
        const data=await api.json()
        setData(data)
        console.log(data)
    }
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Movie
