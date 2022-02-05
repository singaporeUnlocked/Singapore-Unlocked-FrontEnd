import { Box, Container } from "@mui/material"
import { connect, useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Dashboard } from "../../components/patient/Dashboard"
import * as patientActions from "../../redux/reducers/PatientReducer"

const Patient = (props) => {
    const query = new URLSearchParams(props.location.search);
    const token = query.get('id')
    console.log("Patient ID: " + token)
    const dispatch = useDispatch()
    dispatch(patientActions.getPatientData(token))
    return(
    <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
    >
            <Container maxWidth={false}>
            <Box sx={{ mt: 3 }}>
                <Dashboard />
            </Box>
        </Container>
    </Box>)
}


export default withRouter(Patient);
