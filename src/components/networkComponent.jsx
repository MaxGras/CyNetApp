
import { useEffect, useState } from "react"
import axios from "axios";
import NetworkButton from "./networkButtonComponent";
export default function NewtworkComponent() {
    const [networks, setNetworks] = useState([]);


    const url = 'http://178.136.240.245:50000/api/Net';
    const fetchData = () => {
        axios.get(url)
            .then(response => {

                setNetworks(response.data);
            })
            .catch(error => {

                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(networks);



    return (
        <div className="flex flex-col gap-[4vh] items-center justify-center min-h-[90vh]">
            {networks.map((items)=>(
                <NetworkButton name={items.name} key={items.id} hrefURL={items.link} />
            ))}

        </div>
    )
}