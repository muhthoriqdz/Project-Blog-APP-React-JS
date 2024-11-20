import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import "./footer.css";

function FooterIcon({ icon }) {
  const Icon = icon;

  return (
    <div className="icon-wrapper">
      <Icon />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-wrapper">
          <FooterIcon icon={FaFacebook} />
          <FooterIcon icon={FaTwitter} />
          <FooterIcon icon={FaInstagram} />
          <FooterIcon icon={FaTelegram} />
          <FooterIcon icon={FaDiscord} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2024. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
