import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu';
import ExtensionIcon from '@mui/icons-material/Extension';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawer_component = (
    <div>
        <Toolbar />
        <Divider />
        <List>
            {['Summary'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Patients', 'Cognitive', 'Physical', 'Social'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        <ExtensionIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);

const container = window !== undefined ? () => window().document.body : undefined;
const drawerWidth = 240;

const ResponsiveDrawer = () => {
    return (
    
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                container={container}
                variant="permanent"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer_component}
            </Drawer>
        </Box>
    )
}

export default ResponsiveDrawer;  