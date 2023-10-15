import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.styles.scss";

export function Footer() {
  return (
    <footer>
      <div>
        <h3 className="footer-title">Jiu Jitsu Universum</h3>
        <h3>Pronađi nas</h3>
        <div className="footer-icon">
          <a
            href="https://www.facebook.com/JiuJitsu.Universum/"
            className="iconTag">
            <FontAwesomeIcon icon={faFacebookF} size="xl"></FontAwesomeIcon>
          </a>
          <a href="https://www.youtube.com/@jjuniversum" className="iconTag">
            <FontAwesomeIcon icon={faYoutube} size="xl"></FontAwesomeIcon>
          </a>
          <a
            href="https://www.instagram.com/jiujitsu_universum/"
            className="iconTag">
            <FontAwesomeIcon icon={faInstagram} size="xl"></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className="">
        <h3>Radno vrijeme</h3>
        <p>Svaki radni dan: 18:00 - 21:30</p>
        <p>Subota: 17:00 - 18:00</p>
        <p>Nedjelja: ne radimo</p>
      </div>
      <div>
        <h3>Lokacija</h3>
        <h4>Osijek</h4>
        <p>Prolaz Josipa Leovića 3</p>
      </div>
      <div className="footer__maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.7980303122526!2d18.672188376574606!3d45.55438832741616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7abd501dc89%3A0x55c1fc9cae1cb309!2spro.%20Josipa%20Leovi%C4%87a%203%2C%2031000%2C%20Osijek!5e0!3m2!1shr!2shr!4v1691510825616!5m2!1shr!2shr"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="googleMaps"></iframe>
      </div>
    </footer>
  );
}
