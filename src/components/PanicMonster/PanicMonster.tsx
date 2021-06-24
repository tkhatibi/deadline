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
  const dob = state.birthday ? new Date(state.birthday) : undefined;
  return (
    <div className="PanicMonster">
      {times(Math.ceil(WEEKS), (w) => {
        const date = dob ? getDateOfMultipleDaysLater(dob, w * 7) : undefined;
        const classes = ["PanicMonster-week"];
        date && date < now && classes.push('PanicMonster-past-week');
        const age = dob && date ? calculateAge(dob, date) : undefined;
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
