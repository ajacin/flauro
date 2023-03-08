import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import QRCode from "qrcode.react";

export default function QrTile({ plant }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "inline-block",
        border: "1px dotted black",
        borderRadius: 0,
        maxWidth: "200px",
        margin: "5px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          {/* <Typography component="div" variant="h6">
            Haworthiopsis limifolia
          </Typography> */}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {plant.shortName ? plant.shortName : plant.name}
          </Typography>
          <QRCode value={`https://flauro.netlify.app/plants/${plant.id}`} />
        </CardContent>
      </Box>
    </Card>
  );
}
