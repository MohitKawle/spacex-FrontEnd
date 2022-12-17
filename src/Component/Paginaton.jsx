import React from 'react'
import { useState } from 'react'

function Paginaton(props) {
  
  const [page,setPage]=useState(props.page)
  const [maxpage,setMaxPage]=useState()

  const stylep={
    border:"1px solid white",
    marginLeft:"20px",
    width:"40px"
  }

  const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "5px",
    display:"flex",
    
    
    
  }
  


  
let arr=[]
 console.log(props.maxpage,"props",props)
for(let i=0;i<props.maxpage;i++){
  arr.push(i+1)
}
const renderList = arr.map((item, index) => 
<div style={stylep} key={index}>{item}</div>
);




  console.log(props,arr,maxpage)
  return (<>
  

    <div style={styleObj}>
   {renderList}
    </div>

    </>
  )
}

export default Paginaton