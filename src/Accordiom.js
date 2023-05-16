import React from 'react'
import { useState,useEffect } from 'react'
const Accordiom = (props) => {
  const [openstate,setopenstate]= useState([])
  useEffect(()=>{setopenstate(props.data.map(()=>false))},[props.data])
  console.log(openstate)
  const deleteitem=(id,index)=>{
    const newOpenStates = [...openstate];
      newOpenStates.splice(index, 1);
    setopenstate([...newOpenStates]);
  }
  return (
    <>
    {props.data.length?(
      props.data.map((item,index)=>{
        return  <div className='mt-4' key={props.data.id}>
        <details open={openstate[index]} onToggle={()=>{
          let newopenstate=[...openstate]
          newopenstate[index]=!newopenstate[index]
          setopenstate(newopenstate)
        }}>
          <summary>
              {item.questions}
          </summary>
          <div>
              <p>{item.answers}</p>
              <button className='buttn buttn2 p-1' onClick={()=>{deleteitem(item.id,index)}}>مسح </button>
          </div>
        </details>
      </div>
      })
    ):(<h2 className='mt-3'>لا يوجد اسئلة الان</h2>)}{
    props.data.length?(
      <button className='buttn buttna mt-2' onClick={props.delete}>مسح الكل</button>

    ):(null)}
    </>
  )
}

export default Accordiom
