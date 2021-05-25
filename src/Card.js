import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function PlayingCard(props) {

  function removeCard() {
    props.setCardElems(props.cardElems.filter((element, i) => i != props.index));
  }

  return (
    <Card style={{ width: '20vw', backgroundColor: '#bbbbbb', margin: '1vw'}}>
      <CardContent style={{ display: 'flex', justifyContent: 'center'}}>
        <CardMedia style={{width: '17vw', height: '23.8vw'}} image={"/cards/"+ props.category + "/" + props.imgName + ".PNG"} />
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={removeCard} color="secondary" variant="contained">Play/Discard Card</Button>
      </CardActions>
    </Card>
  );
}