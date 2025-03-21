import React from 'react'
import foto from '../../assets/foto.png'
import Onlinestatus from '../Onlinestatus'

const home = () => {
  return (
    <>
      <div className='w-full bg-black text-white h-screen flex flex-col justify-between relative'>
        <div className="flex flex-col  items-center pt-30 gap-6">
        <h1 className='text-2xl font-bold'>CHECK YOU OFFLINE OR ONLINE</h1>
        <button className='border-[2px] border-t-amber-700 border-b-amber-500 bg-slate-900 rounded-lg p-2 border-l-amber-400 w-[100px] border-r-amber-300 hover:bg-linear-to-r from-amber-500 to-amber-300 hover:ease-in' onClick={ 
        ()=>{
            window.location.href="./users"
        }
      }>users</button>
      <p className='mt-10'>Looks like this</p>
      <img src={foto} className='w-[400px] bg-center' alt="" />
        </div>
      <Onlinestatus/>
      </div>
    </>
  )
}

export default React.memo(home)