import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'

const PopularThings = () => {
  return (
      <>
          <div style={{border:"1px solid black",width:'85%',margin:"auto"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h2>Places To Visit In Goa</h2>
                  <h2>Map</h2>
              </div>    
              <div>
                  <p>Popular things to do</p>
                  <carousal></carousal>
              </div>
              <div>
                  <p>Popular Cities in Goa</p>
                  <div>
                      {/* Map Data Here */}
                      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem w='100%' h='272' bgImg={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/01/20/15/ashwem-beach.jpg?w=300&h=300&s=1"} />
                        <GridItem w='100%' h='272' bgImg={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/86/fa/b8/vagator-beach.jpg?w=300&h=300&s=1"} />
                        <GridItem w='100%' h='272' bgImg={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5e/calangute.jpg?w=300&h=300&s=1"} />
                        <GridItem w='100%' h='272' bgImg={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f6/1d/7c/been-there-during-monsoon.jpg?w=300&h=300&s=1"} />
                    </Grid>
                  </div>
              </div>
          </div>
        
          
          
    </>
  )
}

export default PopularThings