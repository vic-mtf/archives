const width = window.innerWidth * 10;
const height = window.innerHeight * 10;
const left = (window.innerWidth - width) / 2;
const top = (window.innerHeight - height) / 2;

const _args = {
  //url: '',
  width,
  height,
  top,
  left,
  target: "_blank",
  popup: "yes",
  //fullscreen: 'yes',
  location: "no",
  menubar: "no",
  status: "no",
};

const BASE_URL = import.meta.env.BASE_URL;

export default function openNewWindow(args = _args) {
  const { url, target, ...otherProps } = { ..._args, ...args };
  const options = Object.keys(otherProps)
    .map((key) => `${key}=${otherProps[key]}`)
    .join(", ");
  const uri = getFullUrl(url);
  const win = window.open(uri, target, options);
  window.addEventListener("beforeunload", () => {
    if (!win.closed) win?.close();
  });
  return win;
}

const getFullUrl = (input) => {
  try {
    const url = new URL(input);
    return url.href;
  } catch (e) {
    return `${BASE_URL}/${input.replace(/^\/+/, "")}`;
  }
};
