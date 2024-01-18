import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="logo-wild">
          <img
            className="img-fluid"
            src="../src/assets/logo-loreal-wild.png"
            alt="logo"
          />
        </Link>
        <MDBContainer className="pt-4 logos">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.facebook.com/lorealfrance"
              role="button"
              target="_blank"
            >
              <MDBIcon fab className="fab fa-facebook-f" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://twitter.com/LOrealGroupe!"
              role="button"
              target="_blank"
            >
              <MDBIcon fab className="fa-twitter" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.instagram.com/lorealgroupe/!"
              role="button"
              target="_blank"
            >
              <MDBIcon fab className="fa-instagram" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.linkedin.com/company/lor%C3%A9al/"
              role="button"
              target="_blank"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.youtube.com/@loreal"
              role="button"
              target="_blank"
            >
              <MDBIcon fab className="fa-youtube" />
            </MDBBtn>
          </section>
        </MDBContainer>
      </div>
    </footer>
  );
}

export default Footer;
