export default function timeElapsed(dateString) {
  let date = new Date(dateString);
  let diff = Date.now() - date.getTime();
  let secondes = Math.floor(diff / 1000);
  let minutes = Math.floor(secondes / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let moths = Math.floor(days / 30);
  let years = Math.floor(moths / 12);

  let langue = navigator.language;
  let rtf = new Intl.RelativeTimeFormat(langue, { numeric: "auto" });

  if (years > 0) return rtf.format(-years, "year");
  else if (moths > 0) return rtf.format(-moths, "month");
  else if (weeks > 0) return rtf.format(-weeks, "week");
  else if (days > 0) return rtf.format(-days, "day");
  else if (hours > 0) return rtf.format(-hours, "hour");
  else if (minutes > 0) return rtf.format(-minutes, "minute");
  else return rtf.format(-secondes, "second");
}
