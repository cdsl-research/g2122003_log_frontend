import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Container, Stack, TextField, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import Title from '../dashboard/Title';

export default function Register() {
    const [first, setFirst] = useState("");
    const [checked, setchecked] = useState(false);
    const [second, setSecond] = useState("");
    const [data, setData] = useState(undefined);
    useEffect(() => {
        if (first.length === 13) {
            console.log("https://www.googleapis.com/books/v1/volumes?q=isbn=" + first);
            fetch("https://www.googleapis.com/books/v1/volumes?q=isbn=" + first)
                .then((res) => res.json())
                .then((json) => setData(json))
                .catch(() => alert("error"));
        }
    }, [first])

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
                        <FormControlLabel control={<Checkbox onChange={() => setchecked(!checked)} />} label="1巻ならチェック" />
                        {checked ? "":
                         <TextField
                                required
                                label="第1巻のISBN(数字のみ)"
                                type="number"
                                value={second}
                                onChange={e => {
                                    setSecond(e.target.value)
                                }}
                            />}
                        <Typography variant="subtitle1" gutterBottom>
                            ※プレビューでは別の巻が表示されることがあります。シリーズが合っているかの確認程度にご利用ください。
                        </Typography>
                        {
                        data === undefined || data.items=== undefined ? "" :
                        <>
                            <Typography variant="h3" gutterBottom>
                                {data.items[0].volumeInfo.title}
                            </Typography>
                            <Box
                                component="img"
                                sx={{
                                    height: 180,
                                    width: 128,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="Book image"
                                src={data.items[0].volumeInfo.imageLinks.thumbnail}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                                {data.items[0].volumeInfo.description}
                            </Typography>
                        </>}
                        <Button 
                            color="primary" 
                            variant="contained" 
                            size="large"
                            onClick={() => {
                                console.log(first, second, checked);
                                //</Stack>fetch("http://" + process.env.REACT_APP_API_URL + "/register")
                                //</FormGroup>    .then((res) => res.json())
                                //</Container>    .then((json) => setData(json))
                                //    .catch(() => alert("error"));
                            }}>
                            作成
                        </Button>
                    </Stack>
                </FormGroup>
            </Container>
        </React.Fragment>
    );
}