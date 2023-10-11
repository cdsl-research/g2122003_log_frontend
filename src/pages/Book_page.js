import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Title from '../dashboard/Title';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'; 
import { Button, TextField, List, ListItem, ListItemText} from '@mui/material';

function FetchNovel() {
    const [data, setData] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        console.log("http://" + process.env.REACT_APP_API_URL + "/id" + { id }.id);
        fetch("http://" + process.env.REACT_APP_API_URL + "/id" + { id }.id)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error access" + process.env.REACT_APP_API_URL + "/id"));
    }, []);


    return data === undefined ? "" : data;
};

export default function Book_page() {
    const [review, setReview] = useState("")
    const { id } = useParams();
    return (
        <React.Fragment>
            <Title>書籍ページ</Title>
            {(() => {
                let bookdata = FetchNovel();
                console.log(bookdata)
                if (bookdata !== "" || bookdata.error){
                    if(bookdata.detail !== "Not Found"){
                        console.log(bookdata.novel.isbn)
                        console.log(parseInt({ id }.id))
                        if (bookdata.novel.isbn === parseInt({ id }.id)) {
                            return (
                                <>
                                    <Typography variant="h3" gutterBottom>
                                        {bookdata.novel.title}
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
                                        src={bookdata.novel.image}
                                    />
                                    <Typography variant="subtitle1" gutterBottom>
                                        {bookdata.novel.description}
                                    </Typography>
                                    <Divider />
                                    <TextField
                                        id="outlined-textarea"
                                        label="レビューする"
                                        placeholder="Placeholder"
                                        value={review}
                                        multiline
                                        onChange={e => {
                                            setReview(e.target.value)
                                        }}
                                    />
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        onClick={() => {
                                            console.log(review);
                                            //fetch("http://" + process.env.REACT_APP_API_URL + "/review")
                                            //    .then((res) => res.json())
                                            //    .then((json) => setData(json))
                                            //    .catch(() => alert("error"));
                                            //
                                        }}>
                                        投稿
                                    </Button>
                                    <Divider />
                                    <Typography variant="h4" gutterBottom>
                                        レビュー一覧
                                    </Typography>
                                    <List>
                                        {bookdata.review.map((value) => 
                                            <ListItem>
                                                <ListItemText primary={value.comment}/>
                                            </ListItem>
                                        )}
                                    </List>
                                </>
                            )
                        } else {
                            return (
                                <Typography variant="h4" gutterBottom>
                                    この書籍は登録されていません。
                                </Typography>
                            )
                        }
                    }else {
                        return (
                            <Typography gutterBottom>
                                ページが作成されていません。管理者に連絡をお願いします。
                            </Typography>
                        )
                    }
                }else{
                    return (
                        <Typography gutterBottom>
                            表示中
                        </Typography>
                    )
                }
            })()}
        </React.Fragment>
    );
}