import React from 'react'
import MediaCard1 from '../Card/CartCard'
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
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

const Cart = () => {
  
  const Item = useSelector(state => state.CartFun);


  if(Item.Shirt===0  && Item.Shirt1===0  && Item.Shirt2===0  && Item.Laptop===0  && Item.Laptop1===0  && Item.Laptop2===0  && Item.Watch===0  && Item.Watch1===0  && Item.Watch2 ===0   )
  {
  
    return(
      <>
        <Typography variant='h3'>Cart is Empty</Typography>
      </>
    )
  }

  return (
    <>
      <Typography variant='h3' style={{marginBottom:'5%'}}>Cart Section</Typography>
      <Grid container spacing={4} direction='row' paddingLeft={10}  justifyItems='center' alignContent='center'>
        {Item.Shirt?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={0} count={Item.Shirt} image={Shirt} title='title'/>
        </Grid>:<></>}
        {Item.Laptop?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1  id={1}  count={Item.Laptop} image={Laptop} title='title'/>
        </Grid>:<></>}
        {Item.Watch?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={2}  count={Item.Watch} image={Watch} title='title'/>
        </Grid>:<></>}
        {Item.Shirt1?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={3}  count={Item.Shirt1} image={Shirt1} title='title'/>
        </Grid>:<></>}
        {Item.Laptop1?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={4}  count={Item.Laptop1} image={Laptop1} title='title'/>
        </Grid>:<></>}
        {Item.Watch1?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1  id={5}  count={Item.Watch1} image={Watch1} title='title'/>
        </Grid>:<></>}
        {Item.Shirt2?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={6}  count={Item.Shirt2} image={Shirt2} title='title'/>
        </Grid>:<></>}
        {Item.Laptop2?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={7}  count={Item.Laptop2} image={Laptop2} title='title'/>
        </Grid>:<></>}
        {Item.Watch2?<Grid item lg={6} md={6} sm={12}>
          <MediaCard1 id={8}   count={Item.Watch2} image={Watch2} title='title'/>
        </Grid>:<></>}
      </Grid>
    </>
  )
}

export default Cart