import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  );

  const addToTeam = (newMember) => {
    if (money >= zombieFighter.price) {
      setToTeam([...team, newMember]);
      setMoney(money - zombieFighter.price);
    } else {
      alert('Not enough money!');
    };
  };

  return (
    <>
      <h1>Zombie Fighters!</h1>
      <ul>
        <div className="fighterList">
          {zombieFighters.map((zombieFighter, index) => (
            <li key={index}>
              <img src={zombieFighter.img} alt={zombieFighter.name}></img>
              <h2>{zombieFighter.name}</h2>
              <p>Price: {zombieFighter.price} </p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => addToTeam(zombieFighter)}>Add to Team</button>
              <br></br>
            </li>
          ))}
        </div>

        <div className="moneyValue">
          <h2>Current Money Value</h2>
          <p>Money: ${money}</p>
        </div>

        <h2>My Team</h2>
        <div>
          {team.map((member, index) => (
            <li key={index}>{member.name}</li>
          ))}
        </div>
      </ul>


    </>
  );
}

export default App