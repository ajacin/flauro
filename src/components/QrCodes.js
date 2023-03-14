import QrTile from "./QrTile";
import PLANTINFO from "../data/staticData";
import { useState } from "react";

const QrCodes = () => {
  const [plantData, setPlantData] = useState(PLANTINFO.plantData);
  return (
    <>
      <h3>QR Codes</h3>
      {plantData
        .filter((each) => each.id !== 0)
        .map((eachPlantData) => {
          return <QrTile key={eachPlantData.id} plant={eachPlantData}></QrTile>;
        })}
    </>
  );
};

export default QrCodes;
