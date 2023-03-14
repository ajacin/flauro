import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function QuickInfoCard({ shortDescription }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          A quick fact
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
