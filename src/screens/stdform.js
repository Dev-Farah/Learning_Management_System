import React, { useState } from "react";
import { getData, sendData, SignUp } from "../config/firebasemethods";
// import React from "react";
import Input from '../components/Input';
import Navbar from "../components/Navbar";
import Btn from '../components/Btn';
import { Grid, Typography } from '@mui/material';
import List from "../components/List";
import { MenuItem, Divider } from "@mui/material";
import MuiDatePicker from "../components/DatePicker";
import { Container } from "@mui/system";
import BasicTable from "../components/Table";

export default function StdForm() {

    const [values, setValues] = useState({});
    const [uid, setUid] = useState("");
    const [stdData, setStdData] = useState("");
    const [isFeeSubmitted, setIsFeeSubmitted] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // let key = Date.now();
    let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    let registrationDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    let registrationYear = `${new Date().getFullYear()}`;

    let fillValues = (key, val) => {
        values[key] = val;
        setValues({ ...values })
    }

    // let [firstName, setFirstName] = useState("")
    // let [lastName, setLastName] = useState("")
    // let [course, setCourse] = useState()
    // let [sec, setSec] = useState()
    // let [contact, setContact] = useState(undefined)
    // let [cnic, setCnic] = useState(undefined)
    // let [fatherName, setFatherName] = useState("")
    // let [fatherCnic, setFatherCnic] = useState(undefined)
    // let [fatherContact, setfatherContact] = useState(undefined)
    // // let // [emergencyContact, setEmergencyContact] = useState(undefined)
    let [dateOfBirth, setDateOfBirth] = useState(new Date("2000-01-11"))

    let courseData = [
        {
            id: "wm",
            courseName: "Web and Mobile",
        },
        {
            id: "ds",
            courseName: "Data Science",
        },
        {
            id: "gd",
            courseName: "Graphic Designing",
        }
    ];

    let secData = [
        {
            id: "a",
            section: "A",
        },
        {
            id: "b",
            section: "B",
        },
        {
            id: "c",
            section: "C",
        },
        {
            id: "d",
            section: "D",
        },
    ];

    const handleDateChange = (date) => {
        setDateOfBirth(date)
        fillValues('dateOfBirth', date)
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        // values.key = key;
        values.time = time;
        values.registrationDate = registrationDate;
        values.registrationYear = registrationYear;
        setUid(values.id);
        setIsFeeSubmitted(values.isFeeSubmitted);
        setIsApproved(values.isApproved);
        setIsActive(values.isActive);
        // console.log(values);

        sendData(`Student Data/`,
            values
        ).then((res) => {
            console.log(res);
            // getStdData()
        }).catch((err) => {
            alert(err);
        })
    }

    const getStdData = () => {
        getData(`Student Data/${uid}`)
            .then((res) => {
                setStdData(res);
            }).catch((err) => {
                alert(err);
            })
    }



    return (
        <>
            <Navbar />
            <section>
                <form
                // onSubmit={handleSubmit}
                >
                    <Grid container className="formContainer" >

                        <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                            <Typography variant='h4'>Student Registration Form</Typography>
                        </Container>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="First Name" // value={values}
                                type="text" name="firstName" required={true}
                                onChange={(e) => fillValues('firstName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Last Name" // value={lastName}
                                type="text" name="lastName" required={true}
                                onChange={(e) => fillValues('lastName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <List
                                label="Courses"
                                placeholder={"Select"}
                                // value={course}
                                required={true}
                                onChange={(e) => fillValues('course', e.target.value)}
                                listItem={courseData && courseData.length > 0 ? courseData.map((e) => (
                                    <MenuItem key={e.id} value={e.courseName}
                                    >
                                        {e.courseName}
                                    </MenuItem>
                                )) : null}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <List
                                label="Section"
                                placeholder={"Select"}
                                // value={sec}
                                required={true}
                                onChange={(e) => fillValues('section', e.target.value)}
                                listItem={secData && secData.length > 0 ? secData.map((e) => (
                                    <MenuItem key={e.id} value={e.section}
                                    >
                                        {e.section}
                                    </MenuItem>
                                )) : null}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Contact" // value={contact}
                                type="number" name="contact" required={true}
                                onChange={(e) => fillValues('contact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="CNIC" // value={cnic}
                                type="number" name="cnic" required={true}
                                onChange={(e) => fillValues('cnic', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father Name" // value=""
                                type="text" name="fatherName" required={true}
                                onChange={(e) => fillValues('fatherName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father CNIC" // value={fatherCnic}
                                type="number" name="fatherCnic"
                                onChange={(e) => fillValues('fatherCnic', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Father Contact" // value={fatherContact}
                                type="number" name="fatherContact" required={true}
                                onChange={(e) => fillValues('fatherContact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Emergency Contact" // value={emergencyContact}
                                type="number" name="emergencyContact" required={true}
                                onChange={(e) => fillValues('emergencyContact', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={3}>
                            <MuiDatePicker
                                label="Date of Birth"
                                value={dateOfBirth}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                            />
                        </Grid>
                        <Grid item xs={9} sm={5} m={1} my={2}>
                        </Grid>

                        <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                            <Btn type="submit" btnVal="Submit" onClick={handleSubmit} />
                        </Container>
                    </Grid>
                </form>

                {uid && uid.length > 2 ?
                    <Container sx={{ textAlign: "center", margin: "30px auto", width: "200px" }}>
                        <Btn btnVal="Show Data" onClick={getStdData} />
                    </Container>
                    : null}


                {stdData && stdData.length > 0 ?
                    // stdData.map((e) => (
                    <>
                        <BasicTable />
                        < Typography variant="body">{stdData.cnic}</Typography>
                    </>
                    // ))
                    : null}
            </section>
        </>
    )
}