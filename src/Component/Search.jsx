import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import Paginaton from "./Paginaton"

function Search() {
  
  const [search, setSearch] = useState("all");

  const [status, setStatus] = useState("all");
  const [timing, setTiming] = useState("");
  const [type, setType] = useState("");


  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const [maxpage,setMaxPage]=useState(2)
  const [arr,setArr]=useState([])


  useEffect(()=>{
   
   const dat=async ()=>{
 let res=await showData()
 
   }
    dat()
   
    pagefun()
    console.log(data,"dataafadafd")


  },[search.length,data.length,status,timing,type])
 

  function pagefun(){
    console.log("dat6qa",data)
    setMaxPage(Math.ceil(data.length/6))
    let start=(page-1)*6
    let end=(page*6)
    if(start<0){start=0}
if(end>data.length){end=data.length}
let local=[]
    for(let i=start;i<end;i++){
      local.push(data[i])
    }
    //console.log(local)
    setArr(local)
    
   

  }

  


  const showData =async () => {
    console.log("showdata",search)
    let  response 

    
      if (search == "status") {response=await axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}`)}
    else if(search== "date"){response=await axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}`)}
    else if(search== "type"){response=await axios.get(`https://api.spacexdata.com/v3/capsules?original_launch=${timing}`)}
     else { response = await axios.get("https://api.spacexdata.com/v3/capsules")}
       await setData(response.data)
       await pagefun()

    

    
  };
  // console.log(data);


  const handleSearch =() => {
    
     showData();
  };




 

  return (
    <>
      <div className="flex items-center  py-3 px-6 bg-gray-50 border-b space-x-6 ">
     
          <div className="relative  flex items-center text-gray-400 focus-within:text-gray-600">
            <select
              onChange={(e)=>{
                setSearch("status")
                setStatus(e.target.value)
                console.log(status)
              }}
              name="status"
              
              className="w-full pr-10 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            >
              <option value="">Search by Status</option>
              <option value="active">active</option>
              <option value="destroyed">destroyed</option>
              <option value="unknown">unknown</option>
              <option value="retired">retired</option>
            </select>
          </div>
          <div className="relative w-full flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
            <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              onChange={(e)=>{
                setSearch("type")
                setType(e.target.value)
                console.log(type,search)
              }}
             
              type="text"
              name="type"
              placeholder="Search by type"
              autoComplete="off"
              aria-label="Search talk"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
       
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              onChange={(e)=>{
                setSearch('date')
                setTiming(e.target.value)
                console.log(e.target.value,search)
              }}
              
              type="date"
              name="date"
              placeholder="Search by original_launch"
              autoComplete="off"
              aria-label="Search talk"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
          <div className="relative flex mt-5 items-center text-gray-400 focus-within:text-gray-600">
            <input
              onClick={handleSearch}
              type="submit"
              name="search"
              value="Search"
              placeholder="Search"
              autoComplete="off"
              aria-label="Search talk"
              cursor="pointer"
              className="w-full pr-10 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
    
      </div>
      <div
        className="grid grid-cols-3 align-self:stretch;  border-2"
        style={{ width: "100vw" }}
      >
        {arr &&
          arr.map((e) => (
            <div>
              <Card key={e.capsule_serial} e={e} />
            </div>
          ))}
      </div>

      <div style={{display:"flex" ,marginLeft:"500px" ,marginTop:'20px' }}>
       <div style={{marginRight:"30px"}}>..PREV</div>
        <Paginaton page={page} maxpage={maxpage} />
        <div  style={{marginLeft:"30px", marginTop:'0px'}} 
        onClick={()=>{
          if(page>=maxpage){}
          else{setPage((page)=>page+1)}
          console.log(page)
        }}
        >NEXT..</div>
      </div>
            
    </>
  );

  
}

export default Search;
