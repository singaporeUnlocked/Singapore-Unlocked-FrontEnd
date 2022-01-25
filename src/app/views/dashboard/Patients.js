import { Box, Container } from "@mui/material"
import { PatientListResults } from "../../components/patients/PatientListResults"

const data = [{
    patientId: "hello",
    name: 'user',
    cognitiveRatings: "100",
    physicalRatings: '100',
    socialRatings: '100'
}]

const Patients = () => {
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
                <PatientListResults patients={data} />
            </Box>
        </Container>
    </Box>)
}

export default Patients