import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Facts({ facts }) {
  return (
    <>
      {facts && facts.length > 0 && (
        <Card
          sx={{
            width: "100%",
            paddingLeft: 1,
            background: "#FCFFEB",
            margin: 1,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Facts / Fun / Care
            </Typography>

            <ul
              style={{
                margin: 0,
                padding: 0,
                textAlign: "left",
                marginLeft: 3,
              }}
            >
              {facts.map((element) => {
                return <li style={{ margin: 0, padding: 0 }}>{element}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      )}
    </>
  );
}
