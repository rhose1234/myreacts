import { useState } from 'react';
const Home = () => {
  const [name, setName] = useState('rose');
  const [age,  setAge] = useState(40)

  const handleClick = () => {
    setName('marvelous');
    setAge(30)

    };
    return ( 

    <div className="content">
    <p> { name } is {age} years old </p>
    <button onClick={handleClick}>click me</button>
    </div>
     );
    }
 
export default Home;