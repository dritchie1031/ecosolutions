import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Rules() {
  return (
    <div className="RulesPage">
      <Typography variant="h3">Rules</Typography>
      <Typography style={{maxWidth: '800px'}}>
        In this game, the various domains of life, called EcoSpheres, will work together to solve environmental problems. This generally works by increasing or decreasing the scores of 
        Sustainability, Growth, and Conservation.
      </Typography>
      <Typography style={{ maxWidth: '800px' }}>
        To play this game, you need 1-5 players, the various decks of cards (currently provided by this website), a pen or pencil, and paper.
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Game Setup</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography style={{ maxWidth: '800px' }}>
            Each player will choose one of the five EcoSpheres. When each player has chosen, they should click on the corresponding link at the top of this page and open it in a new tab.
            This will be where you draw and play cards. Then, one player should open the "Crises" page in a new tab and draw a crisis card. The winning and losing conditions should be written down on the piece of paper,
            along with the starting scores of: Sustainability=5, Growth=0, Conservation=0. Whoever wishes to keep track of this information may do so: there can be multiple scorekeepers. Now, each player should draw three
            cards from their respective decks. 
          </Typography>
          <img src="/cards/symbols.PNG" width="200px"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Gameplay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ maxWidth: '800px' }}>
            Start each turn by ensuring that you start with 3 cards (unless another card specifies otherwise or if the deck has run out of cards). 
            Each turn, every player will play a card. When everyone has chosen which card to play, the group will read aloud the cards they play. Each card is played simultaneously, so no player goes before any other.
            You cannot discuss with other players what card you wish to play.
            When the cards have been played, the effects are totalled up and the scores are modified accordingly. The players then discard the card they just played from their hand. If a winning or losing condition is met at this point, the game ends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Winning or Losing the Game</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ maxWidth: '800px' }}>
            The winning condition of each game is detailed on the Crisis card, drawn at the beginning of the game. 
            Losing conditions are also specified one the Crisis card, although there are also some other general losing conditions. First, if Growth or Conservation grow greater than 5 or less than -2, the game is lost.
            If Sustainability grows greater than 5 or less than 5, the game is lost. If any player runs out of cards and has no cards remaining in their hand, the game is lost.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}