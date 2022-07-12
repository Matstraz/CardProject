import { useEffect, useState } from "react";

function Cmc() {
  const [cardName, setCardName] = useState();
  const [cardNamelist, setCardNamelist] = useState([]);
  const [manaCost, setmanaCost] = useState([])

  function handleCardName(event) {
    setCardName(event.target.value);
  }

/*   useEffect(() => {
    console.log(cardNamelist)
  }, [cardNamelist]) */

  function handleSearch(e) {
    e.preventDefault();

    setCardNamelist(cardName.split("\n"))
    console.log(cardNamelist)
    cardNamelist.forEach((item) =>
    fetch(`https://api.scryfall.com/cards/search?q=${item}`)
      .then((response) => response.json())
      .then((data) => data.data[0].mana_cost)
      .then((element) => {
        console.log('console', element)
        setmanaCost([...manaCost, element])})
      )


      
     

      console.log(manaCost)
     /*  setCardNamelist([]) */
  }



  return (
    <div>
      <form className="d-flex justify-content-center mt-3" onSubmit={handleSearch}>
        <textarea type="text" rows={3} placeholder="1st Card Name&#10;2nd Card Name&#10;3rd Card Name..." onChange={handleCardName}></textarea>
        <button type="submit">Send</button>
      </form>
      <ul className="mt-3">
      {manaCost.map((manacost, index) => <li key={manacost+index}>{manacost}</li>)}
      </ul>
    </div>
  );
}

export default Cmc;
