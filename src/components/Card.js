import { useSelector } from "react-redux";
import "./Card.css";
import CardOne from "./CardOne";
import CardThree from "./cardThree/CardThree";
import CardTwo from "./CradTwo";

function Card() {
  const card1 = useSelector((state) => state.moveCard.card1);
  const card2 = useSelector((state) => state.moveCard.card2);
  const card3 = useSelector((state) => state.nikohCard.card3);

  return (
    <div className="mainContainer">
      {card1 && <CardOne />}
      {card2 && <CardTwo />}
      {card3 && <CardThree />}
    </div>
  );
}

export default Card;
