import { useEffect, useState } from "react";
import PLANTINFO from "../data/staticData";
import FACTINFO from "../data/staticFacts";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import OtherNames from "./OtherNames";
import Facts from "./Facts";
import FlagIcon from "@mui/icons-material/Flag";
import ForestIcon from "@mui/icons-material/Forest";
import { Link } from "react-router-dom";

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
  const [facts, setFacts] = useState(FACTINFO[id - 1]);
  useEffect(() => {
    let commonNames = [
      plant.commonNames_0,
      plant.commonNames_1,
      plant.commonNames_2,
      plant.commonNames_3,
      plant.commonNames_4,
    ].filter((ele) => ele != "");
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
        elevation={0}
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
                  <h2>{plant.name}</h2>
                  <ForestIcon sx={{ color: "#06D6A0" }}></ForestIcon>
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
                  <p>{plant.shortDescription}</p>
                </Typography>
                {/* <QuickInfoCard
                  shortDescription={plant.shortDescription}
                ></QuickInfoCard> */}
                {plant.description && (
                  <Typography variant="body2" gutterBottom>
                    {plant.description}
                    sx={{ overflowWrap: "break-word" }}
                  </Typography>
                )}
                {plant.origin && plant.origin !== "xxx" && (
                  <>
                    <FlagIcon sx={{ color: "#06D6A0" }}></FlagIcon>
                    <Typography variant="body2" gutterBottom>
                      {plant.origin}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" mt={5}>
          {/* <Grid item xs> */}
          <OtherNames commonNames={plant.commonNames}></OtherNames>
          {/* </Grid> */}
          <Facts facts={facts}></Facts>
        </Grid>
        {plant.url && (
          <>
            <Typography variant="body2" gutterBottom>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "#2E3B55",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  padding: "5px",
                  margin: "20px",
                }}
                to={plant.url}
                target="_blank"
              >
                Read more
              </Link>
            </Typography>
          </>
        )}
      </Paper>
    </>
  );
};

export default PlantDetails;
