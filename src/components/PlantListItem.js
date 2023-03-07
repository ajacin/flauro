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

const PlantListItem = ({ plant }) => {
  const formPrimaryName = () => {
    return `${plant.name} (${plant.genus} ${plant.species})`;
  };
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt={plant.name}
            src={plant.thumbnail}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={formPrimaryName()}
        secondary={plant.shortDescription}
      />
    </ListItem>
  );
};

export default PlantListItem;
