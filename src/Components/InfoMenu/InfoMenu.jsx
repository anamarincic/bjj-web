import "./InfoMenu.styles.scss";

export function InfoMenu() {
  return (
    <div className="info">
      <div className="info__header">
        <h1>Logo</h1>
        <span>zatvori X</span>
      </div>
      <div>
        <h2>RADNO VRIJEME</h2>
        <h3>Ponedjeljak-Petak</h3>
        <h4>07:00-21:00</h4>
        <h3>Subota</h3>
        <h4>07:00-18:00</h4>
        <h3>Nedjelja</h3>
        <h4>-</h4>
      </div>
      <div className="info__footer">
        <h3>POTRAŽI NAS</h3>
        <span>fb</span>
        <span>ig</span>
      </div>
    </div>
  );
}
