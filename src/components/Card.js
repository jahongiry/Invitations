import { useSelector } from "react-redux";
import "./Card.css";
import { sliceOneActions } from "../store/index";
import CardOne from "./CardOne";

function Card() {
  const card1 = useSelector((state) => state.moveCard.card1);
  const card2 = useSelector((state) => state.moveCard.card2);

  return (
    <div className="mainContainer">
      {card1 && <CardOne />}
      {card2 && (
        <div className="square">
          <button>Card2</button>
        </div>
      )}
    </div>
  );
}

export default Card;
