import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-full-screen w-full">
            <div className="flex-column justify-center items-center max-w-320">
                <img
                    className="mb-8 w-full"
                    src="/assets/images/404.svg"
                    alt=""
                />
                <Link to="/">
                    <Button variant="contained">
                        Back to Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
