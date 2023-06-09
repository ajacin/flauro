import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const PlantListItem = ({ plant }) => {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const formPrimaryName = () => {
    if (plant.isNameScientific) return `${plant.name}`;
    else
      return `${capitalizeFirstLetter(plant?.name)} (${capitalizeFirstLetter(
        plant?.genus
      )} ${capitalizeFirstLetter(plant?.species)})`;
  };
  return (
    <Link
      to={`/plants/${plant.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
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
              alt={plant?.name}
              src={plant?.thumbnail}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={formPrimaryName()}
          secondary={capitalizeFirstLetter(plant?.shortDescription)}
        />
      </ListItem>
    </Link>
  );
};

export default PlantListItem;
