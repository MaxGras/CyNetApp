import { useParams } from "react-router"

import axios from "axios";
import { useEffect, useState } from "react";
function formatDateToCustom(inputDate) {
    const date = new Date(inputDate);

  

    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
   
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  
    return `${hours}:${minutes} ${formattedMonth}/${formattedDay}/${year}`;
  }
export default function ArticleComponent(){
    const {id} = useParams();
    const [arcticle, setArcticle] = useState(
      {
            id: null,
            name: '',
            value: '',
            data: ''
            
        }
    )
    useEffect(()=>{
        handleFetch();
    },[]);
    let articleURL = `http://178.136.240.245:50000/api/Article/${id}`
    
    
    const handleFetch = () =>{
        axios.get(articleURL)
        .then(function (response) {
             setArcticle(response.data);
           
        })
        .catch(function (error) {
    
            console.error('Error: ', error);
        });
      }
    

      


    return(
        <div className="flex flex-col items-center gap-[2vh] py-[2%]">
            <h2 className="text-4xl font-[800]">{arcticle.name}</h2>
            <p className="w-[60%] leading-8 text-xl">{arcticle.value}</p>
             <div className="self-start px-[10%]">
                <span className="font-[600]">Дата: </span>
                <span className="font-[600]">{formatDateToCustom(arcticle.date)}</span>
            </div>
        </div>
    )
}