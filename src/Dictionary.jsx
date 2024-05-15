import React, { useEffect, useState } from 'react'

function Dictionary() {
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/world`
    const [data,setdata]=useState([]);
    const [search,setsearch]=useState("");
    useEffect(()=>{
        async function dictionary2(){
            const res =await fetch(url);
            const data=await res.json();
            console.log(data);
            setdata(data.id)
        }
        dictionary2();
    },[]);
    const handleClick=async()=>{
        const url2 =`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        const res1=await fetch(url2);
        const data1=await res1.json();
        setdata(data1)
    }
  return (
    <>
    <div className="nav w-[100%] h-[300px] bg-gray-700 text-white">
     <h1 className='text-8xl text-center pt-16'>Dictionary App</h1>
    </div>
    <div className="main w-[100%] h-[80rem] bg-black text-white">
        <h1 className='text-7xl text-center pt-32'>Enter any keyword</h1>
        <div className="in pl-[60rem] pt-[10rem] absolute">
        <input className=' w-[800px] h-[300px] text-black text-center text-7xl' onChange={(e)=>{setsearch(e.target.value)}} type="search" name="" placeholder='Search here'  id="" /></div>
        <div className="btn pl-[120rem] pt-[15rem] ">
            <button className='border border-white p-10 text-4xl hover:bg-gray-700' onClick={handleClick}>Search here</button>
        </div>
    </div>
    {data?.map((pack)=>{
        
        return(
            <>
           <center>
            <div>
                <div>Name:{pack.word}</div>
                <div>Defination:{pack.meanings[0].definitions[0].definition}</div>
            </div>
            
            </center> 
            </>
        )
    })}
    </>
  )
}

export default Dictionary
