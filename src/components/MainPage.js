import Footer from "./Footer";
import "./MainPage.css";
import CarouselComponent from "./Crousel";
import Card from "./Card";

function MainPage() {
  return (
    <div className="mainContainer">
      <div className="image-background">
        <CarouselComponent />
        <h1 className="heading">Assalomu alekum!</h1>
        <p className="paragraph">
          Shodiyona kuningiz uchun taklifnomalarni biz bilan yarating:
        </p>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
