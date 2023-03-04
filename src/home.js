import { useEffect, useState } from 'react';
import BlogList from './cardList';

const Home = () => {
const  [cards, setCards] = useState ([
    {
    title: 'my new blog', 
    body:'i stand on the rock', 
    author:'rose',  
    id:1 
   },

      {
        title: 'my new blog',
        body:'i stand on the rock',
        author:'marvelous', 
        id:2
      },
      {
        title: 'my new blog',
        body:'i stand on the rock',
        author:'rose',
        id:3 },

      {
        title: 'my new blog', 
        body:'i stand on the rock',
        author:'rose', 
        id:4
      }
  ]);

  
    
    return ( 

    <div className="Home container ">
    {cards.map((card) => (
    <div className="row">
    <div className="card col-lg-3 col-md-12">

    <h2>{card.title}</h2>
    <p>{card.body}</p>
    <h6>{card.author}</h6>
    
    </div>
    </div>
    ))}
    </div>
     );
    
    }
export default Home;