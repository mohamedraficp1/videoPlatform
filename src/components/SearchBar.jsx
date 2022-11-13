import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () =>  {
    const  [searchTerm, setSearchTerm] = useState(null)
    const navigate= useNavigate()
    const   handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
      
            setSearchTerm('');
          }
    }
    return(
     <Paper component="form" 
        onSubmit={handleSearch} 
        sx={{ 
            borderRadius: '20px', 
            border: '2x solid #e3e3e3',
            boxShadow:'none',
            pl:2,mr: {sm: 5}
        }}>
             <input className='search-bar' type="text" value = {searchTerm} placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} />
             <IconButton type='submit' sx={{p: "10px", color: "red"}}>
                <Search />
             </IconButton>
     </Paper>
    )
  }


export default SearchBar