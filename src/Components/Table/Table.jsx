import "./Table.styles.scss";

export function Table() {
  return (
    <div className="table-holder">
      <h2 className="table-holder__text">
        Pronađi skupinu koja ti najbolja odgovara
      </h2>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">ponedjeljak</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>18:00</span>
              <span>-</span>
              <span>19:00</span>
            </div>
            <div>Djeca</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>19:00</span>
              <span>-</span>
              <span>20:15</span>
            </div>
            <div>Napredna grupa</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>20:15</span>
              <span>-</span>
              <span>21:30</span>
            </div>
            <div>Početnici</div>
          </li>
        </ul>
      </div>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">utorak</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>19:00</span>
              <span>-</span>
              <span>20:15</span>
            </div>
            <div>MMA</div>
          </li>
        </ul>
      </div>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">srijeda</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>18:00</span>
              <span>-</span>
              <span>19:00</span>
            </div>
            <div>Djeca</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>19:00</span>
              <span>-</span>
              <span>20:15</span>
            </div>
            <div>Napredna grupa</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>20:15</span>
              <span>-</span>
              <span>21:30</span>
            </div>
            <div>Početnici</div>
          </li>
        </ul>
      </div>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">četvrtak</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>19:00</span>
              <span>-</span>
              <span>20:15</span>
            </div>
            <div>MMA</div>
          </li>
        </ul>
      </div>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">petak</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>18:00</span>
              <span>-</span>
              <span>19:00</span>
            </div>
            <div>Djeca</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>19:00</span>
              <span>-</span>
              <span>20:15</span>
            </div>
            <div>Napredna grupa</div>
          </li>
          <li className="table-holder__content-value">
            <div>
              <span>20:15</span>
              <span>-</span>
              <span>21:30</span>
            </div>
            <div>Početnici</div>
          </li>
        </ul>
      </div>
      <div className="table-holder__content">
        <h3 className="table-holder__content-header">subota</h3>
        <ul className="table-holder__content-event">
          <li className="table-holder__content-value">
            <div>
              <span>17:00</span>
              <span>-</span>
              <span>18:00</span>
            </div>
            <div>Open mat</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
