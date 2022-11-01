import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function List(props) {
    const { listItem, label, placeholder, id, type, value, required, onChange, endAdornment } = props;

    return (
        <>
            <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label={label}
                    placeholder={placeholder}
                    // type={type}
                    value={value}
                    required={required}
                    onChange={onChange}
                >
                    <MenuItem disabled value="">
                        <em>None</em>
                    </MenuItem>
                    <Divider />
                    {listItem}
                </Select>
            </FormControl>


        </>
    )
}