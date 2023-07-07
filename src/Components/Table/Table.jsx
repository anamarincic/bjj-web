import "./Table.styles.scss";

export function Table() {
  return (
    <div className="table-holder">
      <h2 className="table-holder__text">
        Pronađi skupinu koja ti najbolja odgovara
      </h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Pon</th>
            <th>Uto</th>
            <th>Sri</th>
            <th>Čet</th>
            <th>Pet</th>
            <th>Sub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17:00-18:00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="event_container">Open mat</td>
          </tr>
          <tr>
            <td>18:00 - 19:00</td>
            <td className="event_container">Djeca</td>
            <td></td>
            <td className="event_container">Djeca</td>
            <td></td>
            <td className="event_container">Djeca</td>
            <td></td>
          </tr>
          <tr>
            <td>19:00 - 20:00</td>
            <td className="event_container">Seniori</td>
            <td></td>
            <td className="event_container">Seniori</td>
            <td></td>
            <td className="event_container">Seniori</td>
            <td></td>
          </tr>
          <tr>
            <td>20:00 - 21:00</td>
            <td></td>
            <td className="event_container">Juniori</td>
            <td></td>
            <td className="event_container">Juniori</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
