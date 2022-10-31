import { useSelector } from "react-redux";
import "./CardTwo.css";
import CardTwoNikoh from "./cardTwo/Nikoh";
import { Transition } from "react-transition-group";

function CardTwo() {
  const card1 = useSelector((state) => state.moveCard.marosim);
  return (
    <Transition
      in={card1 === "nikoh"}
      timeout={10000}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          style={{
            transition: "opacity 10s easeout",
            opacity: state === "exited" ? 0 : 1,
          }}
          className="square"
        >
          {card1 === "nikoh" && <CardTwoNikoh />}
        </div>
      )}
    </Transition>
  );
}

export default CardTwo;
