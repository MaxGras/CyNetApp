import { Link } from "react-router-dom";


export default function ChatComponent(){



    return(
        <div className='relative h-[80vh] mt-[5%] items-center flex flex-col gap-[3%] px-[18%]'>
            <div className="absolute top-[-7%] left-[23%] bg-[#fcffcb] w-[200px] h-[200px] z-[-1]"></div>
            <h3 className='text-[6rem] self-start ml-[18%] font-[800]'>ЧАТ</h3>
            <div className=" relative bg-backgroundChatDesign w-[60%] bg-center h-[35%] my-[5%] bg-cover bg-no-repeat">
              <Link to={"/networks"}> <button className="absolute bottom-[-15%] right-[0%] bg-black text-white px-[10%] py-[3%]">СПІЛЬНИЙ ЧАТ</button></Link>
            </div>
        </div>
    )
}