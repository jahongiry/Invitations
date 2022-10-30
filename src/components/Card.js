import { useSelector } from "react-redux";
import "./Card.css";
import CardOne from "./CardOne";
import CardTwo from "./CradTwo";

function Card() {
  const card1 = useSelector((state) => state.moveCard.card1);
  const card2 = useSelector((state) => state.moveCard.card2);

  return (
    <div className="mainContainer">
      {card1 && <CardOne />}
      {card2 && <CardTwo />}
    </div>
  );
}

export default Card;
