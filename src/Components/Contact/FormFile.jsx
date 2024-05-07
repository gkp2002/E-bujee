/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

function FormFile() {
    const [data,setData] = React.useState({
        Name:"",
        Company:"",
        Email:"",
        Phone:"",
        Address:""
    })
    const handleForm = (e) =>{
        const {name, value} = e.target;
        setData((prev)=>({
             ...prev,
             [name]:value,
        }))
    };
  
    const handleSubmit= async (event)=>{
        event.preventDefault();
       const response = await fetch('https://techtitannodejs.onrender.com/Create',{
         method:"POST",
         headers:{
          'Content-Type': 'application/json',
          'Accept':'application/json'
         },
         body:JSON.stringify(data)
       });
       if(response.status === 200){
        alert("Form Submitted Sucessfull")
        window.location.reload();
         }else{
        alert("Error submitting form:", response.statusText)
       }
        }

    
  return (
    <div>
    <div className="text-center flex justify-center flex-col items-center h-auto  bg-black pb-3  ">
      <h1 className=" lg:text-[1.8vmax] text-2xl  font-semibold uppercase text-white pt-3 lg:my-6" >Inquiry Form</h1>      
      <form action="post" onSubmit={handleSubmit} className=" border-2 rounded-lg lg:mt-7 border-white flex flex-col justify-center items-start py-2 px-10 pb-5 mt-2 bg-opacity-45">
   
      <div className="mt-3 w-[75vw] flex justify-center items-center flex-col py-5 lg:py-3">
    <div className="md:flex  block lg:py-3">
    <input required name='Name' className=" placeholder:text-white  font-medium lg:w-[33vw] max-h-11 my-1 border-b-2 border-white lg:text-[1.2vmax] text-xl pt-8 rounded-lg  pb-8 pl-3 mx-5 min-h-11 text-white bg-transparent" 
    type="text" placeholder="Name*"
     value={data.Name}
     onChange={handleForm}
    />
    <input required name='Company' className=" placeholder:text-white  font-medium lg:w-[33vw] max-h-11 my-1 border-b-2 border-white lg:text-[1.2vmax] text-xl pt-8 rounded-lg  pb-8 pl-3 mx-5 min-h-11 text-white bg-transparent"
     type="text"  placeholder="Company*"
    value={data.Company}
    onChange={handleForm}
    />
    </div>
      <div className="md:flex block  lg:py-6">
      <input required name='Email' className=" placeholder:text-white  font-medium lg:w-[33vw] max-h-11 my-1 border-b-2 border-white lg:text-[1.2vmax] text-xl pt-8 rounded-lg  pb-8 pl-3 mx-5 min-h-11  bg-transparent text-white" 
      type="Email" placeholder="Email*"
       value={data.Email}
       onChange={handleForm}
      />
      <input required name='Phone' className=" placeholder:text-white  font-medium lg:w-[33vw] max-h-11 my-1 border-b-2 border-white lg:text-[1.2vmax] text-xl pt-8 rounded-lg  pb-8 pl-3 mx-5 min-h-11 bg-transparent text-white " 
      type="tel"  placeholder="Phone*"
      value={data.Phone}
      onChange={handleForm}
      />
      </div>     
     
   
      <textarea name="Address" id="" cols="25" rows="8" placeholder="Tell us about your Project *" required
      value={data.Address}
      onChange={handleForm}
      className="w-[70vw] h-auto max-h-[40rem]  md:py-6 min-h-48  border border-black text-white bg-gray-900  px-5 rounded-md mb-3  lg:text-[1.2vmax] text-xl text-sm font-medium  block transition-all pb-3 "     
      ></textarea>
  
      </div>
      
      <div className="flex font-semibold text-2xl px-4 gap-2 text-white">
      <input required type="checkBox" className="max-h-4  white bg-transparent border border-gray-600 mt-2  font-medium w-12 " /> <span className="md:text-[1vmax] "><Link> accept the privacy policy.   </Link> </span>
      </div>         
     <button type="Submit" className="text-center cursor-pointer font-semibold md:text-[1.3vmax] rounded-[10em] border-none py-3 px-9 text-white bg-red-800 hover:opacity-50  mt-5">Submit</button>
      </form>    
    
    </div>
    </div>
  )
}

export default FormFile
