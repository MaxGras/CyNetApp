import { useState } from "react";
import CustomModal from "./customModal";

export default function CustomCard({name,color}){
   const [open,setOpen]= useState(false);
   const handleClose = ()=>{
    setOpen(!open);
   }
   
    let strStyle = `w-[48%] h-[20vh] flex flex-col justify-between relative `
    if(color===true){
        strStyle += ' bg-[#f1f1f1]'
    }
    else{
        strStyle += ' bg-[#fcffcb]'
    }


    return(
      <div className={strStyle} >
          <h4 className="text-white text-4xl font-[900]">{name}</h4>
        <button onClick={handleClose} className=" absolute bottom-[-6%] bg-black px-[5%] py-[5%] text-white self-end w-[50%]">ПЕРЕЙТИ</button>
        <CustomModal open = {open}  handleClose={handleClose}></CustomModal>
      </div>
    )
}