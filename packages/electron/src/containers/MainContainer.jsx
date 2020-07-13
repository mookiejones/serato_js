import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Top from '../components/Top';
import MenuItems from '../components/MenuItems'
import CratesContainer from './CratesContainer';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


const MainContainer = () => {
    const classes = useStyles();
    const { openDrawer,
        handleMenuSelection,
        handleToggleDrawer,
        selectedMenuItem } = useContext(DataContext);


    return (
        <div className={ classes.root } >
            <CssBaseline />
            <Top
                appClass={ clsx(classes.appBar, { [classes.appBarShift]: openDrawer, }) }
                handleToggleDrawer={ handleToggleDrawer }
                buttonClass={ clsx(classes.menuButton, openDrawer && classes.hide) }

            />
            <MenuItems
                classes={ classes }
                openDrawer={ openDrawer }
                selectedMenuItem={ selectedMenuItem }
                handleMenuSelection={ handleMenuSelection }
                handleToggleDrawer={ handleToggleDrawer }
            />

            <main
                className={ clsx(classes.content, {
                    [classes.contentShift]: openDrawer,
                }) }
            >
                <div className={ classes.drawerHeader } />
                { selectedMenuItem === 'Crates' && <CratesContainer /> }
                { selectedMenuItem !== 'Crates' && (
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                    </Typography>
                ) }
            </main>
        </div>

    )
}
export default MainContainer;