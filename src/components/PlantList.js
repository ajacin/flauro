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
