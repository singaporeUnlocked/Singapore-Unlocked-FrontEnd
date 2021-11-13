import { Alert, Avatar, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import history from '../../../../history'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const theme = createTheme();

const Login = () => {

    //Set error message
    const [message, setMessage] = useState('')
    const [Loading, setLoading] = useState(false)


    const handleFormSubmit = async (event) => {
        setLoading(true)

        try {

        //TODO: Change login feature
            console.log("login button pressed")
            history.push('/')

        } catch (e) {
            console.log(e)
            setMessage(e.message)
            setLoading(false)
        }        
    }

    return (
       <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
                        </Button>
                        {message && (
                            <Alert severity="error">{ message }</Alert>)}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
}

export default Login
