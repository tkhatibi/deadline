export function getDateOfMultipleDaysLater(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export function calculateAge(dob: Date, at = new Date()) {
  //extract the year, month, and date from user date input
  const dobYear = dob.getFullYear();
  const dobMonth = dob.getMonth();
  const dobDate = dob.getDate();

  //extract the year, month, and date from target date
  const atYear = at.getFullYear();
  const atMonth = at.getMonth();
  const atDate = at.getDate();

  //declare a variable to collect the age in year, month, and days
  let ageString = "";

  //get years
  let yearAge = atYear - dobYear;

  let monthAge: number;

  let dateAge: number;

  //get months
  if (atMonth >= dobMonth)
    //get months when target month is greater
    monthAge = atMonth - dobMonth;
  else {
    yearAge--;
    monthAge = 12 + atMonth - dobMonth;
  }

  //get days
  if (atDate >= dobDate)
    //get days when the target date is greater
    dateAge = atDate - dobDate;
  else {
    monthAge--;
    dateAge = 31 + atDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  //group the age in a single variable
  const age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString =
      age.years +
      " years, " +
      age.months +
      " months, and " +
      age.days +
      " days old.";
  else if (age.years === 0 && age.months === 0 && age.days > 0)
    ageString = "Only " + age.days + " days old!";
  //when target month and date is same as birth date and month
  else if (age.years > 0 && age.months === 0 && age.days === 0)
    ageString = age.years + " years old. Happy Birthday!";
  else if (age.years > 0 && age.months > 0 && age.days === 0)
    ageString = age.years + " years and " + age.months + " months old.";
  else if (age.years === 0 && age.months > 0 && age.days > 0)
    ageString = age.months + " months and " + age.days + " days old.";
  else if (age.years > 0 && age.months === 0 && age.days > 0)
    ageString = age.years + " years, and" + age.days + " days old.";
  else if (age.years === 0 && age.months > 0 && age.days === 0)
    ageString = age.months + " months old.";
  //when target date is same as dob(date of birth)
  else ageString = "It's first day on Earth!";

  return ageString;
}
