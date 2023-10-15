import "./ImagesRandom.styles.scss";

export function ImagesRandom() {
  return (
    <div className="images-random">
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomOne.jpg")}
          alt="jj universum Osijek kimono"
        />
      </div>
      <div className="images-random__content wide">
        <img
          src={require("../../images/random/randomTwo.jpg")}
          alt="jj universum kimono Osijek "
        />
      </div>
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomThree.jpg")}
          alt="plavi kimono Osijek"
        />
      </div>
      <div className="images-random__content wide">
        <img
          src={require("../../images/random/randomFour.jpg")}
          alt="borilačka vještina za djeca universum Osijek"
        />
      </div>
      <div className="images-random__content">
        <img
          src={require("../../images/random/randomFive.jpg")}
          alt="bjj kimono Osijek"
        />
      </div>
      <div className="images-random__content ">
        <img
          src={require("../../images/random/randomSix.jpg")}
          alt="jj universum Osijek izlet djece "
        />
      </div>
    </div>
  );
}
