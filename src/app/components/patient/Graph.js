import { Line } from "react-chartjs-2";
import { Box, Button, Card, CardContent, CardHeader, Divider, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Chart, registerables } from 'chart.js';
import { useState } from "react";
Chart.register(...registerables);

var options = {
    scales: {
      y: {
        min: 0,
        max: 800,
      }
    }
}

export const Graph = (props) => {
  const [selected_type, set_selected_type] = useState('Level 1');
  const handleChange = (event) => {
    set_selected_type(event.target.value);
  };
  const data_size = 31;
  console.log(props.patientData);

  const data_overview = props.patientData.length != 0 ? {
    labels: [...Array(data_size)].map((e, i) => ("")),
    datasets: 
        
      Object.keys(props.patientData).map((keyname, i) => {
        return ({
          label: keyname,
          data: props.patientData[keyname].plays.map(data => (data["time"])),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        })
        })
      ,
  } : null
  
  console.log(data_overview);

  return (
    
    <Card {...props}>
      <CardHeader
        action={(
              <FormControl fullWidth>
                <InputLabel id="data-type-select-label">Type</InputLabel>
                <Select
                  labelId="data-type-select-label"
                  id="data-type-select"
                  value={selected_type}
                  label="Type"
                  onChange={handleChange}
                >
                  <MenuItem value={"Level 1"}>Level 1</MenuItem>
                  <MenuItem value={"Level 2"}>Level 2</MenuItem>
                  <MenuItem value={"Level 3"}>Level 3</MenuItem>
                  <MenuItem value={"All Levels"}>All Levels</MenuItem>

                </Select>
              </FormControl>
        )}
        title="Overview of Past 30 days"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
 
          {data_overview != null ? <Line data={data_overview} options={options} /> : <Box textAlign={"center"} alignItems={"center"}> No Data Found </Box> } 
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};