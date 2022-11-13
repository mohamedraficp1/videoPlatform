import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { FetchFromApi } from '../utils/Fetch FromApi'
import Categories from './SideBar'
import { Videos } from './Videos'


const Feed = () => {
    const[videos, setVideos]= useState([])
    const [selectedCategory,setSelectedCategory] = useState("New")

    useEffect(() => {           
        FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory])


  return (
    <Stack sx={{flexDirection : {sx: "column", md: "row"}}}>
        <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md:2}}}>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Typography className='copyRight' variant='body2' sx={{color:'#fff', mt:1.5}}>Copyright 2022 Y Media</Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
            <Typography variant='h4' mb={2} sx={{fontWeight: 'bold', color:'#fff'}}>{selectedCategory} 
                <span style={{color:'#f31503'}}> Videos</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed