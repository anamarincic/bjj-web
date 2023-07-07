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
        <h3 className="footer-title">Universum Jiu Jitsu</h3>
        <h3>Pronađi nas</h3>
        <a href="https://www.facebook.com/JiuJitsu.Universum/">
          <FontAwesomeIcon icon={faFacebookF} size="xl"></FontAwesomeIcon>
        </a>
        <a href="https://www.youtube.com/@jjuniversum">
          <FontAwesomeIcon icon={faYoutube} size="xl"></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/jiujitsu_universum/">
          <FontAwesomeIcon icon={faInstagram} size="xl"></FontAwesomeIcon>
        </a>
      </div>
      <div>
        <h3>Lokacija</h3>
        <h4>Osijek</h4>
        <p>Prolaz Josipa Leovca 3</p>
      </div>
      <div className="">
        <h3>Radno vrijeme</h3>
        <p>Svaki radni dan: 8:00 - 21:00</p>
        <p>Subota: 8:00 - 19:00</p>
        <p>Nedjelja: ne radimo</p>
      </div>
    </footer>
  );
}
