import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Title from '../dashboard/Title';


export default function Register() {

    return (
        <React.Fragment>
            <Title>書籍登録</Title>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>

        </React.Fragment>
    );
}