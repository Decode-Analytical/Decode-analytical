export function convertDurationToMinutes(durations) {
  if (durations === undefined) return undefined;
  let totalMinutes = 0;
  for(let duration of durations){
  const parts = duration.split(/\s+/); // Split by one or more spaces


  for (const part of parts) {
    const [value, unit] = part.split(/(h|min)/).map((str) => str.trim());

    if (unit === "h") {
      totalMinutes += parseInt(value, 10) * 60;
    } else if (unit === "min") {
      totalMinutes += parseInt(value, 10);
    }
  }
}

//   console.log(totalMinutes)
  return totalMinutes;
}
