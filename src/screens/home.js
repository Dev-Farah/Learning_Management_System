import React from 'react';
import Input from '../components/Input';
import Navbar from "../components/Navbar";
import Btn from '../components/Button';
import { Grid } from '@mui/material';
// import Data from "../components/Data"
// import Footer from "../components/Footer";

export default function Home() {
    let handleSubmit = (e) => {

    }

    return (
        <>
            <section
            // style={{ width: "100wh", height: "100vh" }}
            >
                <Navbar />
                <form  
                onSubmit={handleSubmit}
                >
                    <Grid container sx={{ border: "1px solid red", maxWidth: "750px", margin: "30px auto", display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
                        <Grid item xs={9} sm={5} m={1}>
                            <Input label="First Name"
                                // id=""
                                type="text"
                                // value=""
                                required="true"
                                onChange=""
                            />
                        </Grid>
                        <Grid item xs={9} sm={5} m={1}>
                            <Input label="Standard" />
                        </Grid>
                        <Grid item xs={9} sm={5} m={1}>
                            <Input label="Standard" />
                        </Grid>
                        <Grid item xs={9} sm={5} m={1}>
                            <Input label="Standard" />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1}>
                            <Btn btnVal="Button" />
                        </Grid>
                    </Grid>
                </form>
            </section>
            {/* <Data /> */}
        </>
    )
}