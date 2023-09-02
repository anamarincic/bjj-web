import "./PlanHolder.styles.scss";

export function PlanHolder() {
  return (
    <div className="plan-holder">
      <div className="plan-holder__content">
        <img
          src={require("../../images/plan/planHolderImg01.jpg")}
          alt=""
          width="100%"
          height="300px"
        />
        <p className="plan-holder__content--month">mjesečna članarina</p>
        <h3 className="plan-holder__content--groups">Djeca</h3>
        <h3 className="plan-holder__content--price">€ 20</h3>
      </div>
      <div className="plan-holder__content">
        <img
          src={require("../../images/plan/planHolderImg02.jpg")}
          alt=""
          width="100%"
          height="300px"
        />
        <p className="plan-holder__content--month">mjesečna članarina</p>
        <h3 className="plan-holder__content--groups">Početnici - odrasli</h3>
        <h3 className="plan-holder__content--price">€ 30</h3>
      </div>
      <div className="plan-holder__content">
        <img
          src={require("../../images/plan/planHolderImg03.jpg")}
          alt=""
          width="100%"
          height="300px"
        />
        <p className="plan-holder__content--month">mjesečna članarina</p>
        <h3 className="plan-holder__content--groups">Iskusni - odrasli</h3>
        <h3 className="plan-holder__content--price">€ 35</h3>
      </div>
    </div>
  );
}
