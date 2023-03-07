import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Box from "@mui/material/Box";
import PlantListItem from "./PlantListItem";

const plantInfo = {
  plantData: [
    {
      id: 1,
      name: "name1",
      genus: "genus1",
      species: "species1",
    },
    {
      id: 2,
      name: "name2",
      genus: "genus2",
      species: "species2",
    },
  ],
};

export default function PlantList() {
  const [plantData, setPlantData] = useState(plantInfo.plantData);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {plantData.map((eachPlantData) => {
        return <PlantListItem plant={eachPlantData}></PlantListItem>;
      })}
    </List>
  );
}
