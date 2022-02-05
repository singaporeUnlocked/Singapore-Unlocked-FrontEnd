import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import history from '../../../history'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Avatar,
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';

export const PatientListResults = ({ patients, ...rest }) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow> 
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Cognitive Ratings
                                </TableCell>
                                <TableCell>
                                    Physical Ratings
                                </TableCell>
                                <TableCell>
                                    Social Ratings
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                patients.slice(0, limit).map((patient) => (
                                <TableRow
                                        hover
                                        key={patient.patientId}
                                        onClick={() => history.push("/dashboard/patient?id="+ patient.patientId )}
                                >
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Avatar
                                                src={AccountCircleIcon}
                                                sx={{ mr: 2 }}
                                            />
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {patient.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {patient.cognitiveRatings}
                                    </TableCell>
                                    <TableCell>
                                        {`${patient.physicalRatings}`}
                                    </TableCell>
                                    <TableCell>
                                        {patient.socialRatings}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={patients.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

PatientListResults.propTypes = {
    patients: PropTypes.array.isRequired
};