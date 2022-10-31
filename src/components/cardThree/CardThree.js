import { useSelector } from "react-redux";
import classes from "./CardThree.module.css";

function CardThree() {
  const info = useSelector((state) => state.nikohCard);
  return (
    <div className={classes.square}>
      {Object.keys(info).map((key, index) => {
        return (
          <div key={index}>
            {key !== "card3" && (
              <h2>
                {key}: {info[key]}
              </h2>
            )}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default CardThree;
