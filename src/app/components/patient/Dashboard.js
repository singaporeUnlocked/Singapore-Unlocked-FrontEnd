import { Avatar, Box, Container, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, Stack, Typography } from '@mui/material';
import { CardViewPatient } from './CardViewPatient'
import profile from '../../../assets/images/profile.jpg';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const patient = useSelector((state) => state.patient.displayPatient)
  const handleChange = () => {
    console.log("selected option")
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
        
        <Box>
          <FormControl fullWidth>
            <InputLabel id="data-type-select">Type</InputLabel>
            <Select
              labelId="data-type-select-label"
              id="data-type-select"
              value="Memory"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </>
  )
};