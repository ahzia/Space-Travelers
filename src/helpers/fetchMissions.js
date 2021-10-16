const fetchMissions = async () => {
  const missions = [];
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= data.length - 1; i += 1) {
        const obj = {};
        obj.mission_id = data[i].mission_id;
        obj.mission_name = data[i].mission_name;
        obj.description = data[i].description;
        missions.push(obj);
      }
    });
  return missions;
};

export default fetchMissions;
