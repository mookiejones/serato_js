import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

const MenuItems = ({ openDrawer, handleToggleDrawer, classes, handleMenuSelection, selectedMenuItem }) => (
    <Drawer
        className={ classes.drawer }
        variant="persistent"
        anchor="left"
        open={ openDrawer }
        classes={ {
            paper: classes.drawerPaper,
        } }
    >
        <div className={ classes.drawerHeader }>
            <IconButton onClick={ handleToggleDrawer }>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
        <List>
            { ['Overview', 'Crates', 'Send email', 'Drafts'].map((text, index) => (

                <ListItem
                    button
                    key={ text }
                    selected={ selectedMenuItem === text }
                    onClick={ () => handleMenuSelection(text) }  >
                    <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
                    <ListItemText primary={ text } />
                </ListItem>
            )) }
        </List>
        <Divider />
        <List>
            { ['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={ text } onClick={ () => handleMenuSelection(text) } selected={ text === selectedMenuItem }>
                    <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
                    <ListItemText primary={ text } />
                </ListItem>
            )) }
        </List>
    </Drawer>
)


export default MenuItems;