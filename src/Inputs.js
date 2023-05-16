import React from 'react'
import { useState } from 'react'
const Inputs = ({change}) => {
  const click=()=>{
    change({id:Math.random,questions:inq,answers:ins})
    setInq("")
    setIns("")
  }
  const [inq,setInq]=useState("")
  const [ins,setIns]=useState("")
  return (
    <div >
      <input onChange={(e)=>{setInq(e.target.value)}} value={inq} className='input p-2 col-4'  placeholder='أدخل السؤال'/>
      <input onChange={(e)=>{setIns(e.target.value)}} value={ins} className='input mx-3 p-2 col-4'  placeholder='أدخل الاجابة'/>
      <button onClick={click} className='col-2 buttn py-2'>اضافة</button>
    </div>
  )
}

export default Inputs
