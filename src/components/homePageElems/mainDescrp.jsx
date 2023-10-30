
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MainDescrp() {



    return (
        <div className=" relative mix-blend-multiply bg-backgroundDesrcp h-[80vh] bg-no-repeat bg-cover bg-bottom flex flex-col justify-between px-[8%] pt-[5%]  ">
            <div>
                <h1 className='text-[6rem] font-[800] text-[#e2ff85]'>CyNet</h1>
                <p className='text-[2rem] leading-8	front-[600] w-[50%]'>cyNet -
                    <span className='font-[800]'>це вебсайт, присвячений кібербезпеці, який містить важливу інформацію, надає актуальні новити та корисні поради</span>
                </p>
            </div>
            <div className=' absolute bottom-[-18%] bg-backgroundDescrpButton h-[40%] w-[45%] bg-no-repeat bg-contain self-center flex flex-col px-[2%] py-[2%] text-[#FFFFFF] '>
                <h2 className='text-4xl font-[700] text-[#ccff33]'>GETTING STARTED</h2>
                <p>IN CYBERSECURITY</p>
                <div className=' text-3xl font-[700] items-center self-center mt-[7%] flex flex-row w-[30%] justify-evenly cursor-pointer	'>
                    <p>Start now </p>
                    <ArrowRightAltIcon sx={{height:"50px", width:"50px",marginTop:"5px"}}></ArrowRightAltIcon>
                </div>
            </div>
        </div>
    )
}