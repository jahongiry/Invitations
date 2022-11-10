import { useSelector } from "react-redux";
import "./Card.css";
import CardOne from "./CardOne";
import CardThree from "./cardThree/CardThree";
import CardTwo from "./CradTwo";
import { AnimatePresence, motion } from "framer-motion";

function Card() {
  const card1 = useSelector((state) => state.moveCard.card1);
  const card2 = useSelector((state) => state.moveCard.card2);
  const card3 = useSelector((state) => state.nikohCard.card3);

  return (
    <div className="mainContainer">
      <AnimatePresence>
        {card1 && (
          <motion.div
            transition={{ duration: 0.3 }}
            exit={{ x: "-100vw", opacity: 0.5 }}
          >
            <CardOne />
          </motion.div>
        )}
      </AnimatePresence>
      {card2 && (
        <motion.div
          initial={{ x: "100vw", opacity: 0.5 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <CardTwo />
        </motion.div>
      )}
      {card3 && <CardThree />}
    </div>
  );
}

export default Card;
