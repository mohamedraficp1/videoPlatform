import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {VideoCard, ChanelCard} from './'

export const Videos = ({videos ,direction}) => {
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos?.map((video,ind) =>(
            <Box key={ind}>
                {video.id.videoId && <VideoCard video={video}/>}
                {video.id.channelId && <ChanelCard channelDetail={video}/>}
            </Box>
        ))}
    </Stack>
  )
}
