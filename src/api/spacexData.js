const url = 'https://api.spacexdata.com/v3';

const getData = async (target) => {
  const endPoint = `${url}/${target}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

export default getData;
