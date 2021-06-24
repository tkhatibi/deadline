import { times } from "lodash";
import "./PanicMonster.css";

const YEARS = 90;

const YEAR_WEEKS = 52.14;

function PanicMonster({ years = YEARS }) {
  const onClick = (w: number) => alert(`you clicked on week ${w}`);
  return (
    <div className="PanicMonster">
      {times(Math.ceil(years * YEAR_WEEKS), (w) => (
        <figure
          key={w}
          className="PanicMonster-week"
          title={`${w + 1}`}
          onClick={() => onClick(w + 1)}
        ></figure>
      ))}
    </div>
  );
}

export default PanicMonster;
