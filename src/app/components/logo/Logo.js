// material-ui
import { useTheme } from '@mui/material/styles';

 import logo from '../../../assets/logo/logo.png';
 
// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        
    <img src={logo} alt="Unlocked" width="50"  />
    );
};

export default Logo;
