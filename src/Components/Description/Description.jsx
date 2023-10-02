import "./Description.styles.scss";

export function Description() {
  return (
    <div className="description">
      <h2 className="description__title">Iskusni treneri</h2>
      <div className="description__content">
        <div className="description__content-team">
          <img
            src={require("../../images/description/trener1.jpg")}
            alt="trener jjk universum"
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener odraslih</p>
            <h3 className="team__name">Nikola Morača</h3>
          </div>
        </div>
        <div className="description__content-team">
          <img
            src={require("../../images/description/trener2.jpg")}
            alt="trener dva jjk universum"
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener odraslih</p>
            <h3 className="team__name">Dominik Livaja</h3>
          </div>
        </div>
        <div className="description__content-team">
          <img
            src={require("../../images/description/trener3.jpg")}
            alt="trener tri jjk universum"
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener djece</p>
            <h3 className="team__name">Siniša Vidaković</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
