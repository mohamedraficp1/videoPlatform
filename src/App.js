import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Navbar,ChannelDetails, Feed, SearchFeed, VideoDetails } from './components' 

const App = () => (
  <BrowserRouter>
      <Box sx={{background:"#000"}}>
        <Navbar/>
        <Routes>
          <Route path ='/' exact element={<Feed />} />
          <Route path ='/channel/:id' element={<ChannelDetails />} />
          <Route path ='/video/:id' element={<VideoDetails />} />
          <Route path ='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
  </BrowserRouter>
    
  )


export default App