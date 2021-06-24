import { times } from "lodash";
import { calculateAge, getDateOfMultipleDaysLater } from "../../helpers/datetime-helpers";
import { useStore } from "../../hooks/store";
import "./PanicMonster.css";

export const YEARS = 90;

export const YEAR_WEEKS = 52.14;

export const WEEKS = YEARS * YEAR_WEEKS + 4;

export function PanicMonster() {
  const { state } = useStore();
  const now = new Date();
  const birthDate = state.birthDate ? new Date(state.birthDate) : undefined;
  return (
    <div className="PanicMonster">
      {times(Math.ceil(WEEKS), (w) => {
        const date = birthDate
          ? getDateOfMultipleDaysLater(birthDate, w * 7)
          : undefined;
        const classes = ["PanicMonster-week"];
        date && date < now && classes.push('PanicMonster-past-week');
        const age =
          birthDate && date ? calculateAge(birthDate, date) : undefined;
        const title = `#${w + 1}${date ? ` - ${date.toDateString()}\n${age}` : ''}`;
        return (
          <figure
            key={w}
            className={classes.join(' ')}
            title={title}
            onClick={() => alert(title)}
          ></figure>
        );
      })}
    </div>
  );
}
