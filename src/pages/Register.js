import * as React from 'react';
import { useState } from 'react';
import { Button, Container, Stack, TextField, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import Title from '../dashboard/Title';

export default function Register() {
    const [first, setFirst] = useState("")
    const [checked, setchecked] = useState(false);
    const [second, setSecond] = useState("")

    return (
        <React.Fragment>
            <Title>書籍登録</Title>
            <Typography variant="subtitle1" gutterBottom>
                書籍登録は1冊ずつ行ってください。
            </Typography>
            <Container maxWidth="sm" sx={{ pt: 5 }}>
                <FormGroup>
                    <Stack spacing={3}>
                        <TextField 
                            required 
                            label="ISBN-13(数字のみ)" 
                            type="number" 
                            value={first}
                            onChange={e => {
                                setFirst(e.target.value)
                            }}
                        />
                        <FormControlLabel control={<Checkbox onChange={() => setchecked(!checked)} />} label="Checkbox に表示するラベル" />
                        {checked ? 
                            <TextField
                                required 
                                label="第1巻のISBN(数字のみ)" 
                                type="number" 
                                value={second}
                                onChange={e => {
                                    setSecond(e.target.value)
                                }}
                            />
                        : ""}
                        <Button 
                            color="primary" 
                            variant="contained" 
                            size="large"
                            onClick={() => {
                                console.log(first, second, checked);
                            }}>
                            作成
                        </Button>
                    </Stack>
                </FormGroup>
            </Container>
        </React.Fragment>
    );
}