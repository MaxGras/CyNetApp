import NewInfoCard from "../_basic/newInfoCard";


export default function NewInfo() {
    


    return (

        <div className='relative  sm:h-[90vh] mt-[18%] items-center flex flex-col gap-[10%] px-[18%]'>
            <div className="absolute sm:top-[-5%] left-[23%] bg-[#e2ff85] w-[70px] h-[70px] sm:w-[200px] sm:h-[200px] z-[-1]"></div>
            <h3 className='sm:text-[6rem] text-[3rem] lg:text-[4rem] self-start ml-[13%] font-[800]'>Що нового?</h3>
            <div className="flex flex-col gap-8">
               <div className="flex flex-col sm:flex-row gap-8">
               <NewInfoCard id={1}/>
                <NewInfoCard id={2}/>
               </div>
               <div className="flex flex-col sm:flex-row gap-8">
               <NewInfoCard id={3}/>
                <NewInfoCard id={4}/>
               </div>
            </div>
        </div>
    )
}