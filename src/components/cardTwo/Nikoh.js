import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Nikoh.css";

function CardTwoNikoh() {
  // const dispatch = useDispatch();

  // const moveFirstToSecond = () => {
  //   dispatch(sliceOneActions.moveCard());
  // };
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault(); // from elements property
    console.log(event.username.value); // or directly
  };
  return (
    <div className="mainContainer">
      <button>Nikoh</button>
      <Form>
        <input
          name="username"
          type="input"
          placeholder="Kuyovning ismini kiriting..."
        />
        <input type="input" placeholder="Kelinning ismini kiriting..." />
        <input type="input" placeholder="Mehmonni ismini kiriting" />
        <input type="input" placeholder="Nikoh bazmi boshlanish vaqtini:" />
        <br />
        <label className="label">
          Viloyatni tanlang:
          <br />
          <select>
            <option value="namangan">Namangan</option>
            <option value="namangan">Toshkent</option>
          </select>
        </label>
        <label className="label">
          Tuman yoki Shaharni tanlang:
          <br />
          <select>
            <option value="namangan">Namangan</option>
            <option value="namangan">Uchkurgan</option>
          </select>
        </label>
        <label className="label">
          To'xonani tanlang:
          <br />
          <select>
            <option value="namangan">Shodiyona</option>
            <option value="namangan">Bek</option>
          </select>
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </Form>
    </div>
  );
}

export default CardTwoNikoh;
