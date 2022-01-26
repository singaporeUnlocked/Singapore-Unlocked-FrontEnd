import { Box, Container } from "@mui/material"
import { useState } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { PatientListResults } from "../../components/patients/PatientListResults"
import * as patReducer from "../../redux/reducers/PatientReducer"
import { PatientToolBar } from "../../components/patients/PatientToolBar"

const data = [{
    patientId: "hello",
    name: 'user',
    cognitiveRatings: "100",
    physicalRatings: '100',
    socialRatings: '100'
}]

const Patients = (props) => {
    const dispatch = useDispatch();
    
    const patients = useSelector((state) => state.patient)
    if (patients.loaded == false) {
        dispatch(patReducer.getPatientList)
    }
    console.log(data);
    return(
    <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
    >
            <Container maxWidth={false}>
            <PatientToolBar />
            <Box sx={{ mt: 3 }}>
                <PatientListResults patients={patients.patientList} />
            </Box>
        </Container>
    </Box>)
}


export default withRouter(Patients);
