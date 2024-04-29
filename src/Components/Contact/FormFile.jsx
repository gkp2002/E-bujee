/* eslint-disable no-unused-vars */
import React from 'react'

function FormFile() {
    const [data,setData] = React.useState({
        Name:"",
        Company:"",
        Email:"",
        Phone:0,
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
       const response = await fetch('http://localhost:3000/Create',{
         method:"POST",
         headers:{
              "Content-Type": "application/json"
         },
         body:JSON.stringify(data)
       });
       if(response.status === 200){
        alert("Form Submitted Sucessfull")
       }else{
        alert("Error submitting form:", response.statusText)
       }
        }

    
  return (
    <div>
    <div className="text-center flex justify-center flex-col items-center h-auto bg-opacity-45 bg-gray-700 pb-3  ">
      <h1 className=" md:text-[1.8vmax] text-2xl  font-semibold uppercase text-white pt-3 md:my-6" >Inquiry Form</h1>      
      <form action="post" onSubmit={handleSubmit} className=" border-2 md:mt-7 border-white flex flex-col justify-center items-start py-2 px-10 pb-5 mt-2 bg-opacity-45 bg-gray-700">
   
      <div className="mt-3 w-[75vw] flex justify-center items-center flex-col py-5 md:py-3">
    <div className="md:flex  block md:py-3">
    <input required name='Name' className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 text-white bg-transparent" 
    type="text" placeholder="Name*"
     value={data.Name}
     onChange={handleForm}
    />
    <input required name='Company' className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 text-white bg-transparent"
     type="text"  placeholder="Company*"
    value={data.Company}
    onChange={handleForm}
    />
    </div>
      <div className="md:flex block  md:py-6">
      <input required name='Email' className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11  bg-transparent text-white" 
      type="Email" placeholder="Email*"
       value={data.Email}
       onChange={handleForm}
      />
      <input required name='Phone' className=" placeholder:text-white  font-medium md:w-[33vw] max-h-11 my-1 border-b-2 border-white md:text-[1.2vmax] text-xl pt-6 pb-12 pl-3 mx-5 min-h-11 bg-transparent text-white " 
      type="tel"  placeholder="Phone*"
      value={data.Phone}
      onChange={handleForm}
      />
      </div>     
     
   
      <textarea name="Address" id="" cols="30" rows="10" placeholder="Tell us about your Project *" required
      value={data.Address}
      onChange={handleForm}
      className="w-[70vw] h-auto max-h-[40rem]  md:py-6 min-h-48  border border-black text-white bg-gray-700 px-5 rounded-md mb-3  md:text-[1vmax] text-sm font-medium  block transition-all pb-3 "     
      ></textarea>
  
      </div>
      
      <div className="flex font-semibold text-2xl pb-2 px-4 gap-2 text-white">
      <input required type="checkBox" className="max-h-8  white bg-transparent border border-gray-600  font-medium w-12 " /> <span className="md:text-[1.5vmax]">I accept the privacy policy. * </span>
      </div>         
     <button type="Submit" className="text-center cursor-pointer font-semibold md:text-[1.3vmax] rounded-[10em] border-none py-3 px-9 text-white bg-red-800 hover:opacity-50  mt-5">Submit</button>
      </form>    
    
    </div>
    </div>
  )
}

export default FormFile
