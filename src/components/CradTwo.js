import { useDispatch, useSelector } from "react-redux";
import "./CardTwo.css";
import CardTwoNikoh from "./cardTwo/Nikoh";
// import { sliceOneActions } from "../store/MarosimTuriSlice";

function CardTwo() {
  const card1 = useSelector((state) => state.moveCard.marosim);
  // const dispatch = useDispatch();

  // const moveFirstToSecond = () => {
  //   dispatch(sliceOneActions.moveCard());
  // };
  return (
    <div className="mainContainer">
      <div className="square">{card1 === "nikoh" && <CardTwoNikoh />}</div>
    </div>
  );
}

export default CardTwo;
