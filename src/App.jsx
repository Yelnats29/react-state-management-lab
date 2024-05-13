import { useState, useEffect } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
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
  // Add a Team Member and calucalte the remaining Money
  const handleAddFighter = (newMember) => {
    if (money >= newMember.price) {
      setTeam([...team, newMember]);
      setMoney(money - newMember.price);
    } else {
      alert('Not enough money!');
    };
  };

  // Calculate the total Strength of the team. I had to put this in the import statement above to define the it
  useEffect(() => {
    const calculateTotalStrength = () => {
      let total = 0;
      team.forEach((member) => {
        total += member.strength;
      });
      setTotalStrength(total);
    };
    calculateTotalStrength();
  }, [team]);

  // Calculate the total Agility of the team. I had to put this in the import statement above to define the it
  useEffect(() => {
    const calculateTotalAgility = () => {
      let total = 0;
      team.forEach((member) => {
        total += member.agility;
      });
      setTotalAgility(total);
    };
    calculateTotalAgility();
  }, [team]);

  // Remove Member from Team
  const handleRemoveFighter = (index) => {
    const newTeam = [...team];
    const removedFighter = newTeam.splice(index, 1)[0];
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
  };

  return (
    <>

      <h1>Zombie Fighters!</h1>
      <div className="moneyValue">
        <h2>Current Money Value</h2>
        <p>Money: ${money}</p>
      </div>
      <br></br>
      <ul>
        <div className="fighterList">
          {zombieFighters.map((zombieFighter, index) => (
            <li key={index}>
              <h2>{zombieFighter.name}</h2>
              <p>Price: {zombieFighter.price} </p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <img src={zombieFighter.img} alt={zombieFighter.name}></img>
              <br></br>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add to Team</button>
              <br></br>
            </li>
          ))}
        </div>

        <h2>My Team</h2>
        <h3>Current Money Value</h3>
        <p>Money: ${money}</p>
        {team.length === 0 ? (<p>Pick some team members</p>) : (<div>
          <p>Total Strength: {totalStrength}</p>
          <p>Total Agility: {totalAgility}</p>
          <div className="fighterList">
            {team.map((member, index) => (
              <li key={index}>
                <h2>{member.name}</h2>
                <p>Price: ${member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <img src={member.img} alt={member.name} />
                <br></br>
                <button onClick={() => handleRemoveFighter(index)}>Remove from Team</button>
              </li>
            ))}
          </div>
        </div>
        )}
      </ul>
    </>
  );
};

export default App