import { useState, useEffect } from "react";

const plantInfo = {
  plantData: [
    {
      name: "name1",
      genus: "genus1",
      species: "species1",
    },
    {
      name: "name2",
      genus: "genus2",
      species: "species2",
    },
  ],
};

const useFetch = (url) => {
  const [plantInfo, setPlantInfo] = useState(plantInfo);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, [url]);

  return [plantInfo];
};

export default useFetch;
