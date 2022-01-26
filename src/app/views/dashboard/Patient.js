import { Box, Container } from "@mui/material"
import { connect, useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Dashboard } from "../../components/patient/Dashboard"

const Patient = (props) => {
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
