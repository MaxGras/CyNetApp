import { useParams } from "react-router"

import axios from "axios";
import { useEffect, useState } from "react";
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
    

      
      console.log(arcticle.date)

    return(
        <div className="flex flex-col items-center w-[60%]">
            <h2>{arcticle.name}</h2>
            <p>{arcticle.value}</p>
            <div>
                <span>Дата: </span>
                <span>{arcticle.date}</span>
            </div>
        </div>
    )
}