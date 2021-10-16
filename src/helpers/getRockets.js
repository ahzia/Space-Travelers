const getRockets = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/rockets');
  const result = await request.json();
  const filteredResult = await result.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
      description: rocket.description,
    }
  ));
  return filteredResult;
};

export default getRockets;
