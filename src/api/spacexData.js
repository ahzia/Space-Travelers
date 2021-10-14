const url = 'https://api.spacexdata.com/v3';

const getData = async (target) => {
  const endPoint = `${url}/${target}`;
  let result = '';
  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    });
  return result;
};

export default getData;
