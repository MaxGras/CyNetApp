import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CustomCard from './customCard';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function SearchComponent() {
    const [header,setHeader] = useState('');
    let newUrl = `http://178.136.240.245:50000/api/Article/search/${header}`
    const navigate = useNavigate();


  const handleFetch = () =>{
    axios.get(newUrl)
    .then(function (response) {
        const arcticle = response.data;
        navigate(`/article/${arcticle.id}`)
       
    })
    .catch(function (error) {

        console.error('Error: ', error);
    });
  }

    const handleChange = (e)=>{
        setHeader(e.target.value);
    }

    return (
        <div className='relative h-[80vh] mt-[18%] items-center flex flex-col gap-[3%] px-[18%]'>
            <div className="absolute top-[-8%] left-[20%] bg-[#fcffcb] w-[200px] h-[200px] z-[-1]"></div>
            <h3 className='text-[6rem] self-start ml-[13%] font-[800]'>Пошук</h3>
            <Paper
                component="form"
                sx={{ p: '15px 4px', display: 'flex', alignItems: 'center', width: 600, }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Шукайте вашу статтю"
                    onChange={handleChange}
                />
                <IconButton onClick={handleFetch}  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <p className='w-[60%] font-[800] text-2xl'>Активний пошук завжди призводить до виявлення!
                Введіть потрібну назву та почніть пошук серед наших ресурсів
            </p>
            <div className='flex flex-row  w-[70%] justify-between'>
                <CustomCard name="ШУКАЄТЕ ПОРАДУ" color={true} />
                <CustomCard name="ШУКАЄТЕ ОНЛАЙН ДОПОМОГУ" color={false} />
            </div>
        </div>
    )
}