import { Avatar, Box, Container, Divider, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, Stack, Typography } from '@mui/material';
import { CardViewPatient } from './CardViewPatient'
import profile from '../../../assets/images/profile.jpg';
import { useSelector } from 'react-redux';
import { Graph } from './Graph.js'
import { MonthlyGraph } from './MonthlyGraph'
import { useState } from 'react';

export const Dashboard = () => {
  const patient = useSelector((state) => state.patient.displayPatient)
  const [selected_type, set_selected_type] = useState('Cognitive');
  const [selected_game, set_selected_game] = useState('');
  
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);

  const [allGameData, setGameData] = useState([]);
  const handleChange = (event) => {
    set_selected_type(event.target.value);

    if (event.target.value == "Cognitive") {

      var selected_data = { ...patient.gamesPlayed.cognitiveGames } 
      console.log(selected_data);
      setGameData(patient.gamesPlayed.cognitiveGames)
      setGames(Object.keys(selected_data))
      set_selected_game(Object.keys(selected_data)[0])

      var filtered_game_data = selected_data

      Object.keys(filtered_game_data).map((keyName, i) => {
        if (keyName != Object.keys(selected_data)[0].toString()) {
          delete filtered_game_data[keyName]
        }
      })

      setData(selected_data[games[0]] != null ? filtered_game_data : [])

    } else if (event.target.value == "Physical") {
            
      var selected_data = { ...patient.gamesPlayed.physicalGames }
      setGameData(patient.gamesPlayed.physicalGames)

      setGames(Object.keys(selected_data))
      set_selected_game(Object.keys(selected_data)[0])

      var filtered_game_data = selected_data

      Object.keys(filtered_game_data).map((keyName, i) => {
        if (keyName != Object.keys(selected_data)[0].toString()) {
          delete filtered_game_data[keyName]
        }
      })

      setData(selected_data[games[0]] != null ? filtered_game_data : [])

    } else {
      var selected_data = {...patient.gamesPlayed.socialGames}
      setGames(Object.keys(selected_data))
      set_selected_game(Object.keys(selected_data)[0])
      setGameData(patient.gamesPlayed.socialGames)

      var filtered_game_data = selected_data

      Object.keys(filtered_game_data).map((keyName, i) => {
        if (keyName != Object.keys(selected_data)[0].toString()) {
          delete filtered_game_data[keyName]
        }
      })

      setData(selected_data[games[0]] != null ? filtered_game_data : [])
    } 
  };

  const gameHandleChange = (event) => {


    set_selected_game(event.target.value)
    var filtered_game_data = { ...allGameData }

    if (event.target.value != "All Games") {


      Object.keys(filtered_game_data).map((keyName, i) => {
        if (keyName != event.target.value) {
          delete filtered_game_data[keyName]
        }
      })
      
      setData(allGameData[event.target.value] != null ? filtered_game_data : [])
    } else {
      setData(allGameData != null ? filtered_game_data : [])
    }
  }

  return (
    patient == null ?
    <LinearProgress />
    :
    <>
      <Stack direction="row" spacing={4} alignItems={'center'}>

        <Avatar
          sx={{
            backgroundColor: 'error.main',
            height: 112,
            width: 112
          }}
          src={profile}
        />
        <Typography
          color="textPrimary"
          variant="h3"
        >
          {patient.name}
        </Typography>
      </Stack>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CardViewPatient atype="cognitive" ratings={patient.cognitiveRatings} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <CardViewPatient atype="physical" ratings={patient.physicalRatings} />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <CardViewPatient atype="memory" ratings="100" />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <CardViewPatient atype="social" ratings={patient.socialRatings} />
            </Grid>
            
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
              >
                          <Grid
            container
            spacing={3}
          >
              <Grid item lg={6}>
                <FormControl fullWidth>
                  <InputLabel id="data-type-select-label">Type</InputLabel>
                  <Select
                    labelId="data-type-select-label"
                    id="data-type-select"
                    value={selected_type}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Cognitive"} key="Cognitive">Cognitive</MenuItem>
                    <MenuItem value={"Physical"} key="Physical">Physical</MenuItem>
                    <MenuItem value={"Memory"} key="Memory">Memory</MenuItem>
                    <MenuItem value={"Social"} key="Social">Social</MenuItem>

                  </Select>
                  </FormControl>
                </Grid>
                
                <Grid item lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="game-type-select-label">Games</InputLabel>
                      <Select
                        labelId="game-type-select-label"
                        id="game-type-select"
                        value={selected_game}
                        label="Type"
                        onChange={gameHandleChange}
                      >
                        {
                          games.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                          ))
                        }
                          <MenuItem value="All Games">All Games</MenuItem>

                      </Select>
                  </FormControl>
                  </Grid>
                  </Grid>
                <br />
                <br />
                
              <Graph patientData={data} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
              >
            <MonthlyGraph />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
            </Grid>
          </Grid>
        </Container>
        </Box>
    </>
  )
};