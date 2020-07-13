import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const CrateComponent = ({ selectedItem: { name, tracks, ...props } }) => {
    const classes = useStyles();


    return (
        <TableContainer component={ Paper }>
            <Table className={ classes.table } aria-label='crate table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { tracks.map((row) => (
                        <TableRow key={ row.name }>
                            <TableCell component='th' scope='row'>
                                { row.name }
                            </TableCell>
                        </TableRow>

                    )) }

                </TableBody>
            </Table>
        </TableContainer>
    )

}
export default CrateComponent;