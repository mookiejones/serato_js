import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'
import CrateComponent from '../components/CrateComponent';
const crates = [
    {
        name: 'Test',
        tracks: [
            { name: 'one for all' }
        ]
    },
    { name: 'Test2' }
]
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const CratesContainer = () => {
    const [selected, setSelected] = useState(0)
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <Grid
                direction='row'
                container
                justify='space-around'
                alignItems='flex-start'
            >

                <Grid item xs>
                    <List>
                        { crates.map(({ name }, idx) => (
                            <ListItem
                                selected={ idx === selected }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={ name } />
                                <ListItemSecondaryAction>
                                    <IconButton edge='end' aria-label='delete'>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )) }
                    </List>
                </Grid>
                <Grid item xs={ 10 }>
                    <CrateComponent
                        selectedItem={ crates[0] } />

                </Grid>
            </Grid></div>)

}
export default CratesContainer;