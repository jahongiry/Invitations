import { useDispatch } from "react-redux";
import classes from "./CardOne.module.css";
import { sliceOneActions } from "../store/index";

function CardOne() {
  const dispatch = useDispatch();

  const moveFirstToSecond = () => {
    dispatch(sliceOneActions.moveCard());
  };

  return (
    <div className="mainContainer">
      <div className={classes.square}>
        <div className={classes.title}>Marosim turini tanlang</div>
        <button onClick={moveFirstToSecond}>Card1</button>
      </div>
    </div>
  );
}

export default CardOne;
