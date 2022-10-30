import { useDispatch } from "react-redux";
import "./Card.css";
import { sliceOneActions } from "../store/index";

function CardOne() {
  const dispatch = useDispatch();

  const moveFirstToSecond = () => {
    dispatch(sliceOneActions.moveCard());
  };

  return (
    <div className="mainContainer">
      <div className="square">
        <button onClick={moveFirstToSecond}>Card1</button>
      </div>
    </div>
  );
}

export default CardOne;
