import React from 'react'
import MediaCard from '../Card/CCard'
import Laptop from '../../images/Laptop.jpg'
import Laptop1 from '../../images/Laptop1.jpg'
import Laptop2 from '../../images/Laptop2.jpg'
import Watch from '../../images/Watch.jpg'
import Watch1 from '../../images/Watch1.jpg'
import Watch2 from '../../images/Watch2.jpg'
import Shirt from '../../images/Shirt.jpg'
import Shirt1 from '../../images/Shirt1.jpg'
import Shirt2 from '../../images/Shirt2.jpg'
import Grid from '@mui/material/Grid';



const Home = () => {

  const images=[Laptop,Laptop1,Laptop2,Watch,Watch1,Watch2,Shirt,Shirt1,Shirt2]
  return (
    <>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',paddingLeft:'2%'}}> 
        <Grid container spacing={2}  direction="row" justifyContent="center" alignItems="center" >
          {
            images.map((val,index)=>{
              return(
                <Grid item lg={4} md={6} sm={12}  key={index}>
                  <MediaCard image={images[index]} id={index} title={'title'}/>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </>
  )
}

export default Home