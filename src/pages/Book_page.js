import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Title from '../dashboard/Title';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'; 
import Container from '@mui/material/Container';

function FetchNovel() {
    const [data, setData] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        console.log("http://" + process.env.REACT_APP_API_URL + "/id" + { id }.id);
        fetch("http://" + process.env.REACT_APP_API_URL + "/id" + { id }.id)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error"));
    }, []);


    return data === undefined ? "" : data;
};

export default function Book_page() {

    const { id } = useParams();
    return (
        <React.Fragment>
            <Title>書籍ページ</Title>
            {(() => {
                let bookdata = FetchNovel();
                console.log(bookdata)
                if (bookdata !== ""){
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
                                    <Typography variant="h4" gutterBottom>
                                        レビュー一覧
                                    </Typography>
                                    <Container>
                                        <Typography gutterBottom>
                                            {bookdata.review[0].comment}
                                        </Typography>
                                    </Container>
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