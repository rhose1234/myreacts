const cardList = ({cards, title, handleDelete }) =>{
 return ( 
        <div className="card-list">
        <h2>{title}</h2>
        {cards.map((card) => (
          <div className="card-preview" key={card.id}>
          <h2>{card.title}</h2>
          <p>written by {card.author}</p>  
          <button className="p-2 fw-bold bg-primary" onClick={()=> handleDelete(card.id)}>Delete blog </button>
          </div>
          ))} 
        </div>
       
     );

    }
export default cardList;