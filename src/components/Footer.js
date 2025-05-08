import Nav from "./Nav";
import './Footer.css';
import footerLogo from '../images/footer-logo.png';

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Footer logo"/>
      <span className="doormat" id="doormat-nav">
        <h2>Doormat Navigation</h2>
        <Nav />
      </span>
      <span className="contact">
        <h2>Contact</h2>
        <p>Address<br />
        Phone number<br />
        Email</p>
      </span>
      <span className="social">
        <h2>Social Media Links</h2>
        <p>Address<br />
        Phone number<br />
        Email</p>
      </span>
    </footer>
  )
}

export default Footer;