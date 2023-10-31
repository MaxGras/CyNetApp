import { useNavigate } from "react-router"


export default function NewInfoCard({id}){
const navigate = useNavigate();
const handleNav=()=>{
    navigate(`/article/${id}`)
}
return(
    <div className={`bg-backgroundArtcl${id} bg-no-repeat bg-contain bg-cover h-[25vh] w-[25vw] flex items-end justify-end `}>
        <button onClick={handleNav} className="bg-[#FFF] text-[#000] py-4 px-12">ЧИТАТИ</button>
    </div>
)

}