import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useSelector,useDispatch} from 'react-redux';
import {addItem} from "../../Actions/Action";
import {subItem} from "../../Actions/Action";

export default function MediaCard(props) {

  const Change = useSelector(state => state.CartFun);
  const dispatch=useDispatch()
  const heads=['Laptop','Laptop1','Laptop2','Watch','Watch1','Watch2','Shirt','Shirt1','Shirt2']
  const AddItem=(e)=>{
    e.preventDefault()
    dispatch(addItem(heads[props.id]))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={AddItem}>Add to Card</Button>
        <Button size="small" >Buy Now</Button>
      </CardActions>
    </Card>
  );
}
