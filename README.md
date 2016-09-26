#Bowling Game

This is an example of bowling game which is possible play ten times where each one has two rolls.
Each roll is possible to drop ten pins and follow the score.
In the future the game will gain animation and a competition against the computer.

Try your lucky!!

New features and issues:

- [X] Create containers to Header and Board to pass store actions as props
- [ ] Test
  - [ ] Unit
    - [ ] Strike
    - [ ] Spare
    - [ ] Components
- [ ] Add rolls to the last frame
  - [ ] Each new strike adds two new strikes to store in Redux. A game will gain a strikes field and when the player achieve the last frame it will receive the new rolls
  - [ ] Each new spare adds a new spare to store in Redux. A game will gain a spare field and when the player achieve the last frame it will receive the new rolls
- [ ] Player as computer
  - [ ] Create an animation as a bowling alley with Canvas. When a player throw a ball it creates an animation showing a ball hitting on the pins. All throws from the computer should be processed with web worker to keep the user experience softer and performatic.
- [ ] Game Over Component
  - [ ] A component to present the final score and inform to the player that the game over
- [ ] Bug when happens a strike and after a spare
