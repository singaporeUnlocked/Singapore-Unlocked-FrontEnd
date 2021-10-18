import React from 'react';
import History from '../../routes/History';
import { Button, Form, Checkbox, Container, Segment, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Logo from '../../components/Logo/Logo'
import { Snackbar } from '@material-ui/core';

 const LoginForm = () => {

    // this method is only to trigger route guards , remove and use your own logic
    const handleLogin = () => {
        localStorage.setItem('token','token');
        History.push('/')
    }

    return(

        <Container fluid>   
            <Logo centered size='large' />

            <Segment inverted>
            <Header as='h1' textAlign='center'>
                Welcome to WebRTC Project v1 system
            </Header>
            <Form inverted>
                <Form.Field>
                    <label>Email</label>
                        <input placeholder='Email' type="email"/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password" />
                </Form.Field>

                <Form.Field>
                    <Checkbox label='Keep me login' />
                </Form.Field>
                <Button type='submit'>Log me in</Button>
        </Form>
        </Segment>
      </Container>
    )
    
}


export default LoginForm;