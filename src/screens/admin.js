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

export default function Admin() {


    // CourseForm
    const [values, setValues] = useState({});
    const [uid, setUid] = useState("");
    const [courseData, setCourseData] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [noOfQuiz, setNoOfQuiz] = useState("");
    const [fee, setFee] = useState("");
    const [leadTrainersId, setLeadTrainersId] = useState("");
    const [assistantTrainers, setAssistantTrainers] = useState([]);

    let fillValues = (key, val) => {
        values[key] = val;
        setValues({ ...values })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // values.key = key;
        setUid(values.id);
        setIsFormOpen(values.isFormOpen);
        // console.log(values);

        sendData(`Courses/`,
            values
        ).then((res) => {
            console.log(res);
            // getCourseData()
        }).catch((err) => {
            alert(err);
        })
    }

    const getCourseData = () => {
        getData(`Courses/${uid}`)
            .then((res) => {
                setCourseData(res);
            }).catch((err) => {
                alert(err);
            })
    }



    return (
        <>
            <Navbar />
            <section className="course-form">
                <form
                // onSubmit={handleSubmit}
                >
                    <Grid container className="formContainer" >

                        <Container sx={{ textAlign: "center", margin: "30px 0" }}>
                            <Typography variant='h4'>Course Form</Typography>
                        </Container>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Course Name" // value={values}
                                type="text" name="courseName" required={true}
                                onChange={(e) => fillValues('courseName', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Course Duration" // value={courseDuration}
                                type="number" name="courseDuration" required={true}
                                onChange={(e) => fillValues('courseDuration', e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Is Form Open?" // value={isFormOpen}
                                type="number" name="isFormOpen" required={true}
                                onChange={(e) => fillValues('isFormOpen', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="No of Quiz" // value={noOfQuiz}
                                type="number" name="noOfQuiz" required={true}
                                onChange={(e) => fillValues('noOfQuiz', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Fee in Rupees" // value=""
                                type="text" name="feeInRupees" required={true}
                                onChange={(e) => fillValues('feeInRupees', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Lead Trainer" // value={leadTrainer}
                                type="number" name="leadTrainer"
                                onChange={(e) => fillValues('leadTrainer', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={9} sm={5} m={1} my={2}>
                            <Input label="Assistant Trainers" // value={assistantTrainers}
                                type="number" name="assistantTrainers" required={true}
                                onChange={(e) => fillValues('assistantTrainers', e.target.value)}
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
                        <Btn btnVal="Show Data" onClick={getCourseData} />
                    </Container>
                    : null}


                {courseData && courseData.length > 0 ?
                    // courseData.map((e) => (
                    <>
                        <BasicTable />
                        < Typography variant="body">{courseData.cnic}</Typography>
                    </>
                    // ))
                    : null}
            </section>
            
        </>
    )
}