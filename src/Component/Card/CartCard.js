import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux';
import {addItem} from "../../Actions/Action";
import {subItem} from "../../Actions/Action";

export default function MediaCard1(props) {
  const dispatch=useDispatch()
  const heads=['Shirt','Laptop','Watch','Shirt1','Laptop1','Watch1','Shirt2','Laptop2','Watch2']
  const AddItem=(e)=>{
    e.preventDefault()
    dispatch(addItem(heads[props.id]))
  }
  const SubItem=(e)=>{
    e.preventDefault()
    dispatch(subItem(heads[props.id]))
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
        <Typography>Total{props.count}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={SubItem} >Decrease</Button>
        <Button size="small" onClick={AddItem} >Increase</Button>
      </CardActions>
    </Card>
  );
}
