import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Review from './Review'
import styles from './PopularThings.module.css'
import TopAttraction from './TopAttraction'

const PopularThings = () => {
    const data = [{ "id": 1, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/46/5e/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,620.44 per adult","title":"BLive Electric Bike Tours – Discovery of Divar Island" },
        { "id": 2, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/79/66/7f/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,440.29 per adult","title":"BLive Electric Bike Tours – Countryside Escape to Varca" },
        { "id": 3, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/46/4a/caption.jpg?w=300&h=300&s=1","category":'E-Bike Tours',"price":"from ₹2,440.29 per adult","title":"BLive Electric Bike Tours – Captivating Cavelossim" },
        { "id": 4, "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/75/45/cb/caption.jpg?w=300&h=300&s=1" ,"category":'E-Bike Tours',"price":"from ₹1,555.89 per adult","title":"BLive Electric Bike Tours - Vibrant Tales of Panjim"}
    ]
  return (
      <>
          <div style={{border:"1px solid black",width:'85%',margin:"auto"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h2>Places To Visit In Goa</h2>
                  <h2>Map</h2>
              </div>    
              <div>
                  <p>Popular things to do</p>
                  {/* <carousal>Need to put Carousal</carousal> */}
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
              <div>
                  <h4>Mountain Bike Tours</h4>
                  <div className={styles.bike}>
                      {data.map((item) => (
                          <div key={item.id} style={{border:'1px solid green'}}>
                              <img height="200px" width="250px" src={item.imgUrl} alt="" />
                              <p style={{fontWeight:"700",fontSize:"14px"}}>{item.title}</p>
                              <p style={{fontWeight:"300",fontSize:"10px"}}>{item.category}</p>
                              <p style={{fontWeight:"700",fontSize:"12px"}}>{item.price}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Top Attraction */}
              <TopAttraction />
              

              <div style={{ border: "1px solid black", }}>
                  <div>
                  <h4 style={{marginLeft:'70px'}}>What travellers are saying</h4>
                  <Review/>
                  </div>
              </div>
          </div>
        
          
          
    </>
  )
}

export default PopularThings