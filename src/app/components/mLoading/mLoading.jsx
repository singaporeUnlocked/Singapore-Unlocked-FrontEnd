import { CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

const PREFIX = 'Loading';

const classes = {
    loading: `${PREFIX}-loading`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.loading}`]: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 'calc(50% - 20px)',
        margin: 'auto',
        height: '40px',
        width: '40px',
        '& img': {
            position: 'absolute',
            height: '25px',
            width: 'auto',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
        },
    }
}));

const Loading = (props) => {


    return (
        <Root className={classes.loading}>
            {/* <img src="/assets/images/logo-circle.svg" alt="" /> */}
            <CircularProgress />
        </Root>
    );
}

export default Loading
