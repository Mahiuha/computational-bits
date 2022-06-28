import rover from '../assets/rover.svg';

const GameOver = () => {
  return (<div style={{ maxWidth: '500px' }}>
    <img src={rover} alt='Tenacity' style={{ width: 150 }} />
    <h1>Congratulations!</h1>
    <div>
      You've successfully navigated the Tenacity rover
      to successfully completion of all of its missions.
      Thank you for playing!
    </div>
    <br/>
    <h2>About Tenacity</h2>
    <div>
      I'm Joseph Mahiuha, and I developed Computational Bits as my final project at
      ALX-Holberton School of Education.
      I would love to hear your thoughts and feedback on the experience: you can reach me
      at <a style={{color: 'white'}} href="mailto:tiasho.mahiuha@gmail.com">tiasho.mahiuha@gmail.com</a>.
    </div>
  </div>);
}

export default GameOver;
