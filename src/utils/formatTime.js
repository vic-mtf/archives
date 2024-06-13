export default function formatDate(dateString) {
  let date = new Date(dateString);
  let langue = navigator.language;

  let now = new Date();
  let oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  if (date < oneYearAgo) options.year = "numeric";

  let dtf = new Intl.DateTimeFormat(langue, options);

  return dtf.format(date);
}
