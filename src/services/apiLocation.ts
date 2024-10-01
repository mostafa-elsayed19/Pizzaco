function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getAddress() {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // console.log(position);

  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}`,
  );

  if (!res.ok) throw Error("Failed getting address");

  const { city, countryName } = await res.json();
  console.log(city, countryName);
  return { city, countryName };
}
// return positionObj;

// {
//   latitude,
//   longitude,
// }: {
//   latitude: string;
//   longitude: string;
// }

// const res = await fetch(
//   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
// );

// if (!res.ok) throw Error("Failed getting address");

// const data = await res.json();
// console.log(data);
// return data;
