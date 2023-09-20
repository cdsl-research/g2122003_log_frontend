import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import TextField from '@mui/material/TextField';
import Title from './Title';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function Chart() {
    const theme = useTheme();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <React.Fragment>
            <Title>書籍</Title>
            <Typography variant="subtitle1" gutterBottom>
                レビュー一覧
            </Typography>
            <List dense={dense}>
                {generate(
                    <ListItem>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>,
                )}
            </List>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>
            
        </React.Fragment>
    );
}