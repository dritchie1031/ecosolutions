import {React, useState} from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PlayingCard from './Card';

export default function Deck(props) {
  const {cards, category, title} = props.data;

  let [cardElems, setCardElems] = useState([]);
  let [cardNums, setCardNums] = useState(cards.map((card) => 3));

  function drawCard() {
    let total = cardNums.reduce((a, b) => a + b, 0);
    let drawNum = parseInt(Math.random() * total);
    for (let i = 0; i < cardNums.length; i++) {
      if (cardNums[i] !== 0 && drawNum < cardNums[i]) {
        setCardElems(oldArray => [ ...oldArray,i]);
        setCardNums(cardNums.map((cardNum, index) => index === i ? cardNum - 1: cardNum));
        return;
      } else {
        drawNum -= cardNums[i];
      }
    }
    alert("No cards left in this deck :(");
  }

  return (
    <div className="DeckPage">
      <Typography variant="h3">{title}</Typography>
      <div className="Hand">
        <Button variant="contained" color="secondary" onClick={drawCard}>Draw Card</Button>
      </div>
      <div className="Hand">
        {cardElems.map((elem, i) => <PlayingCard key={i} index={i} setCardElems={setCardElems} cardElems={cardElems} category={category} imgName={cards[elem]} />)}
      </div>
    </div>

  );
}