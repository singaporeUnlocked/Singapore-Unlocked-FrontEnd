import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Grid, Typography } from '@mui/material';
import Logo from '../../components/logo/Logo';
import { styled } from '@mui/material/styles';

const ResponsiveDrawer = ({children}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const DashboardLayoutRoot = styled('div')(({ theme }) => ({
        display: 'flex',
        flex: '1 1 auto',
        maxWidth: '100%',
        paddingTop: 0,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 350
        }
    }));

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 300, marginLeft: 1, display: 'flex', flexDirection: 'column', height: '100%', position: 'fixed'}}>
            <List component="nav">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <br />
                        <br />
                        <br />
                        <Logo />
                        <br />
                        <br />

                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            gutterBottom
                            variant='h4'
                            textAlign='center'>
                            Unlocked Dashboard
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Divider />
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Summary" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Patients"
                    primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                    lineHeight: '18px',
                    fontWeight: 'medium',
                    color: 'rgba(0,0,0,0.5)',
                  }} />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Cognitive"
                    primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                    lineHeight: '18px',
                    fontWeight: 'medium',
                    color: 'rgba(0,0,0,0.5)',
                  }}/>
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Physical"
                    primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                    lineHeight: '18px',
                    fontWeight: 'medium',
                    color: 'rgba(0,0,0,0.5)',
                  }} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemText primary="Social"
                    primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                    lineHeight: '18px',
                    fontWeight: 'medium',
                    color: 'rgba(0,0,0,0.5)',
                  }} />
                </ListItemButton>
            </List>
        </Box>

            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%',
                        backgroundColor: 'lightcyan'
                    }}
                >
                    {children}
                    </Box>
            </DashboardLayoutRoot>
    </>
    );
}

export default ResponsiveDrawer;