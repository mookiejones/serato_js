import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Typography from '@material-ui/core/Typography';

const Top = ({ appClass, handleToggleDrawer,
    buttonClass
}) => {

    return <AppBar
        position='fixed'
        className={ appClass }>
        <Toolbar>
            <IconButton
                color='inherit'
                aria-label='open drawer'
                edge="start"
                onClick={ handleToggleDrawer }
                className={ buttonClass }>
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
                Serato
                </Typography>
        </Toolbar>
    </AppBar>
}
export default Top;