import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
import { sliceOneActions } from "../store/index";

function Card() {
  const dispatch = useDispatch();
  const card1 = useSelector((state) => state.moveCard.card1);
  const card2 = useSelector((state) => state.moveCard.card2);

  const moveFirstToSecond = () => {
    dispatch(sliceOneActions.moveCard());
  };

  return (
    <div className="mainContainer">
      {card1 && (
        <div className="square">
          <button onClick={moveFirstToSecond}>Card1</button>
        </div>
      )}
      {card2 && (
        <div className="square">
          <button>Card2</button>
        </div>
      )}
    </div>
  );
}

export default Card;
