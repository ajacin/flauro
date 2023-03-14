import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OtherNames({ commonNames }) {
  return (
    <>
      {commonNames && commonNames.length > 0 && (
        <Card
          sx={{
            width: "100%",
            paddingLeft: 1,
            background: "#F8FFF4",
            margin: 1,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Other Names:
            </Typography>
            <ul
              style={{
                margin: 0,
                padding: 0,
                textAlign: "left",
                marginLeft: 3,
              }}
            >
              {commonNames
                .filter((each) => each !== "")
                .map((eachCommonName) => {
                  return (
                    <li style={{ margin: 0, padding: 0 }}>{eachCommonName}</li>
                  );
                })}
            </ul>
          </CardContent>
        </Card>
      )}
    </>
  );
}
