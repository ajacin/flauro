import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PLANTINFO from "../data/staticData";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const PlantDetails = (props) => {
  //const [plant, setPlant] = useState(PLANTINFO.plantData);
  let { id } = useParams();
  const [plant, setPlant] = useState(PLANTINFO.plantData[id - 1]);
  useEffect(() => {
    let commonNames = [
      plant.commonNames_0,
      plant.commonNames_1,
      plant.commonNames_2,
      plant.commonNames_3,
      plant.commonNames_4,
    ];
    setPlant({ ...plant, commonNames: commonNames });
  }, []);
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          marginTop: 5,
          maxWidth: 1000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item alignItems="center" justifyContent="center">
            <ButtonBase sx={{ maxWidth: 1000, flexGrow: 1, height: "auto" }}>
              <Img alt="complex" src={plant.thumbnail} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h3>{plant.name}</h3>
                </Typography>
                {!plant.isNameScientific && (
                  <Typography variant="body2" gutterBottom>
                    ({plant.genus} {plant.species})
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ overflowWrap: "break-word" }}
                >
                  {plant.shortDescription}
                </Typography>
                {plant.description && (
                  <Typography variant="body2" gutterBottom>
                    {plant.description}
                    sx={{ overflowWrap: "break-word" }}
                  </Typography>
                )}
                {plant.origin && plant.origin !== "xxx" && (
                  <Typography variant="body2" gutterBottom>
                    Origin: {plant.origin}
                  </Typography>
                )}
              </Grid>
              <Grid item xs container direction="column" spacing={2}>
                <h5>Other Names:</h5>
                {plant.commonNames &&
                  plant.commonNames.length &&
                  plant.commonNames.map((eachCommonName) => {
                    return (
                      <Typography
                        key={eachCommonName}
                        variant="body2"
                        gutterBottom
                      >
                        {eachCommonName}
                      </Typography>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default PlantDetails;
