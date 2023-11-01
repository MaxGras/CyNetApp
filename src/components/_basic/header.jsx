
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';
export default function Header() {
    
    return (
        <div className='h-[7vh] flex flex-row border-b-2 border-[#000000] justify-between items-center pl-[8%]'>
          <Link to={'/'}>  <p className='font-[600] text-2xl'>cyNet</p></Link>
            <div className=' px-[1%] flex  h-full'>
                <IconButton sx={{borderLeft: 2, borderRadius: 0, height:'100%',width:'5vw'}} size='large' aria-label="search">
                    <SearchIcon sx={{height: '100%',width: "100px"}} />
                </IconButton>
                <IconButton sx={{borderLeft: 2, borderRadius: 0, height:'100%',width:'5vw'}} size='large' aria-label="chat">
                    <ForumIcon  sx={{height: '100%',width: "100px"}}/>
                </IconButton>
            </div>
        </div>
    )
}