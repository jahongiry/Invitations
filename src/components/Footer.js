import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Footer.css";
import Wave from "./Wave";

function Footer() {
  return (
    <div className="main-box">
      <Wave />
      <div className="all-footer">
        <MDBFooter className="bg-white text-center text-white">
          <MDBContainer className="p-1 pb-0">
            <section className="mb-1">
              <MDBBtn
                floating
                className="m-1 resize"
                href="#!"
                color="#F0F0F0"
                role="button"
              >
                <MDBIcon className="icon-size" fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                color="#F0F0F0"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                href="#!"
                color="#F0F0F0"
                role="button"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1"
                color="#F0F0F0"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                color="#F0F0F0"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1"
                color="#F0F0F0"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="telegram" />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Jahongir Yusupov
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Footer;
