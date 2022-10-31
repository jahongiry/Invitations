import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sliceNikohActions } from "../../store/NikohSlice";
import "./Nikoh.css";
import { sliceOneActions } from "../../store/MarosimTuriSlice";

function CardTwoNikoh() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const [info, setInfo] = useState({
    kuyov: "",
    kelin: "",
    mehmon: "",
    vaqt: "",
    viloyat: "",
    tuman: "",
    toyxona: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    dispatch(sliceNikohActions.nikohInfo(info));
    setInfo({
      kuyov: "",
      kelin: "",
      mehmon: "",
      vaqt: "",
      viloyat: "",
      tuman: "",
      toyxona: "",
    });
    dispatch(sliceOneActions.moveToThirdCard());
    console.log(info);
  };

  const { kuyov, kelin, mehmon, vaqt, viloyat, tuman, toyxona } = info;

  return (
    <div className="mainContainer">
      <button>Nikoh</button>
      <form onSubmit={handleSubmit}>
        <input
          name="kuyov"
          type="text"
          placeholder="Kuyovning ismini kiriting..."
          value={kuyov}
          onChange={handleChange}
          required
        />
        <input
          name="kelin"
          type="text"
          value={kelin}
          onChange={handleChange}
          required
          placeholder="Kelinning ismini kiriting..."
        />
        <input
          name="mehmon"
          type="text"
          value={mehmon}
          onChange={handleChange}
          required
          placeholder="Mehmonni ismini kiriting"
        />
        <input
          name="vaqt"
          type="text"
          value={vaqt}
          onChange={handleChange}
          required
          placeholder="Nikoh bazmi boshlanish vaqtini:"
        />
        <br />
        <label className="label">
          Viloyatni tanlang:
          <br />
          <select name="viloyat" value={viloyat} onChange={handleChange}>
            <option value="">Tanlang</option>
            <option value="toshkent">Toshkent</option>
          </select>
        </label>
        <label className="label">
          Tuman yoki Shaharni tanlang:
          <br />
          <select name="tuman" value={tuman} onChange={handleChange}>
            <option value="">Tanlang:</option>
            <option value="uchkurgan">Uchkurgan</option>
          </select>
        </label>
        <label className="label">
          To'xonani tanlang:
          <br />
          <select name="toyxona" value={toyxona} onChange={handleChange}>
            <option value="">Tanlang</option>
            <option value="bek">Bek</option>
          </select>
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
        />
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CardTwoNikoh;
