import rover from '../assets/rover.svg';

const GameOver = () => {
  return (<div style={{ maxWidth: '500px' }}>
    <img src={rover} alt='Rover' style={{ width: 150 }} />
    <h1>Congratulations!</h1>
    <div>
      You've successfully navigated the rover
      to successfully completion of all of its missions.
      Thank you for playing!
    </div>
    <br/>
    <h2>About Computational Bits</h2>
    <div>
      I'm Joseph Mahiuha, and I developed Computational Bits as a final project at
      ALX-Holberton School.
      I would love to hear your thoughts and feedback on the experience: you can reach me
      at <a style={{color: 'white'}} href="mailto:mahiuha@mahiuha.com">mahiuha@mahiuha.com</a>.
    </div>
  </div>);
}

export default GameOver;
