import { useDispatch } from "react-redux";
import classes from "./CardOne.module.css";
import { sliceOneActions } from "../store/MarosimTuriSlice";
import Button from "react-bootstrap/Button";

function CardOne() {
  const dispatch = useDispatch();

  const moveFirstToSecond1 = () => {
    dispatch(sliceOneActions.moveToNikoh());
  };

  const moveFirstToSecond2 = () => {
    dispatch(sliceOneActions.moveToOsh());
  };

  const moveFirstToSecond3 = () => {
    dispatch(sliceOneActions.moveToBeshik());
  };

  const moveFirstToSecond4 = () => {
    dispatch(sliceOneActions.moveTugilganKun());
  };

  return (
    <div className="mainContainer">
      <div className={classes.square}>
        <div className={classes.title}>Marosim turini tanlang</div>
        <Button variant="secondary" onClick={moveFirstToSecond1}>
          Nikoh To'yi
        </Button>
        <br />
        <Button variant="secondary" onClick={moveFirstToSecond2}>
          Nikoh To'yi Oshi
        </Button>
        <br />
        <Button variant="secondary" onClick={moveFirstToSecond3}>
          Beshik To'yi
        </Button>
        <br />
        <Button variant="secondary" onClick={moveFirstToSecond4}>
          Tug'ilgan kun
        </Button>
      </div>
    </div>
  );
}

export default CardOne;
