import "./Description.styles.scss";

export function Description() {
  return (
    <div className="description">
      <h2 className="description__title">Iskusni treneri</h2>
      <div className="description__content">
        <div className="description__content-team">
          <img
            src={require("../../images/trener1.jpg")}
            alt=""
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener odraslih</p>
            <h3 className="team__name">Nikola Morača</h3>
          </div>
        </div>
        <div className="description__content-team">
          <img
            src={require("../../images/trener2.jpg")}
            alt=""
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener odraslih</p>
            <h3 className="team__name">Dominik Livaja</h3>
          </div>
        </div>
        <div className="description__content-team">
          <img
            src={require("../../images/trener3.jpg")}
            alt=""
            className="description__content-img"
          />
          <div className="team">
            <p className="team__details">Trener djece</p>
            <h3 className="team__name">Antonio Petrić</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
