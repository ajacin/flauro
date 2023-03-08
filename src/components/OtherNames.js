import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OtherNamesList from "./OtherNamesList";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function OtherNames({ commonNames }) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Other Names
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        {/* <Typography sx={{ mb: 1.5 }} color="text.primary">
          {shortDescription}
        </Typography> */}
        {commonNames &&
          commonNames.length &&
          commonNames
            .filter((each) => each !== "")
            .map((eachCommonName) => {
              return (
                // <li>
                //   <Typography
                //     key={eachCommonName}
                //     variant="body2"
                //     gutterBottom
                //   >
                //     {eachCommonName}
                //   </Typography>
                // </li>
                <div>{eachCommonName}</div>
              );
            })}
        {/* <OtherNamesList></OtherNamesList> */}
      </CardContent>
    </Card>
  );
}
