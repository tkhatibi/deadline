import { times } from "lodash";
import { useStore } from "../../hooks/store";
import "./PanicMonster.css";

export const YEARS = 90;

export const YEAR_WEEKS = 52.14;

export function PanicMonster({ years = YEARS }) {
  const {
    state: { birthday },
  } = useStore();
  const onClick = (w: number) => alert(`you clicked on week ${w}`);
  return (
    <div className="PanicMonster">
      {birthday}
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
