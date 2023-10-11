import * as React from 'react';
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Title from '../dashboard/Title';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { env } from '../env'

const FetchData = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        console.log(env.REACT_APP_API_URL + "/books");
        fetch("http://" + env.REACT_APP_API_URL + "/books")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error access" + process.env.REACT_APP_API_URL + "/books"));
    }, []);

    console.log(data);
    return data === undefined ? [] : data.books;
}
export default function Top_page() {
    //const dense = React.useState(false);

    return (
        <React.Fragment>
            <Title>書籍</Title>
            <Typography variant="subtitle1" gutterBottom>
                レビュー一覧
            </Typography>
            <List>
                {FetchData().map((value) =>
                    <Link to={"/book/" + value.isbn} key={value.isbn}>
                        <ListItem>
                            <ListItemIcon>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 90,
                                        width: 64,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt="Book image"
                                    src={value.image}
                                />
                            </ListItemIcon>
                                <ListItemText primary={value.title}/>
                        </ListItem>
                    </Link>
                )}
            </List>
        </React.Fragment>
    );
}