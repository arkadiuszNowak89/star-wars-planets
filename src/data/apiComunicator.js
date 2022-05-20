export default function apiComunicator(url, callback) {
  return function (req) {
    fetch(`${url + req}`)
      .then((res) => res.json())
      .then((res) => callback(res));
  };
}
