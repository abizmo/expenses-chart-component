import data from "../assets/data.json";

const getData = () =>
  new Promise((resolve, reject) => {
    resolve(data);
  });

export default getData;
