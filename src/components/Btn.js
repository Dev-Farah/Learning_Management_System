import React from "react";
import { Button } from '@mui/material';


export default function Btn(props) {
    const { onClick, type, otherClasses, btnVal, width } = props;
    return (
        <Button sx={{ width: "95%!important", backgroundColor: "#FE9989", '&:hover': { backgroundColor: "#FE9989" } }} onClick={onClick} variant="contained" type={type} className={`btn ${otherClasses}`}>{btnVal}</Button>
    );
};