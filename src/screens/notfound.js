import React from 'react';
import error from '../images/not-found.webp';
import Btn from '../components/Btn';
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Container sx={{ textAlign: "center", margin: "30px auto" }}>

                <img src={error} width="60%" alt="error" />
                <br />
                <br />
                <Container sx={{width:"160px"}}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <Btn btnVal="Go Back" />
                </NavLink>
                </Container>
            </Container>
        </>
    )
}