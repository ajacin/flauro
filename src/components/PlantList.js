import { useState } from "react";
import List from "@mui/material/List";
import PlantListItem from "./PlantListItem";
import PLANTINFO from "../data/staticData";

export default function PlantList() {
  const [plantData, setPlantData] = useState(PLANTINFO.plantData);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {plantData
        .filter((each) => each.id !== 0)
        .map((eachPlantData) => {
          return (
            <PlantListItem
              key={eachPlantData.id}
              plant={eachPlantData}
            ></PlantListItem>
          );
        })}
    </List>
  );
}
