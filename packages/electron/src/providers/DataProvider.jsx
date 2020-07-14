import React, {
    Component
} from 'react';
import DataContext from '../contexts/DataContext';
import { getDefaultPath } from 'serato_js';
const version = require('../../package.json').version


debugger;

class DataProvider extends Component {
    state = {
        version,
        openDrawer: false,
        selectedMenuItem: 'Crates'
    }


    componentDidMount() {
        const path = getDefaultPath(navigator.platform);
        debugger;
    }
    handleToggleDrawer = () => {

        this.setState(({ openDrawer }) => ({ openDrawer: !openDrawer }))
    }

    handleMenuSelection = (selectedMenuItem) => {
        debugger;
        this.setState({ selectedMenuItem })
    }

    render() {
        const {
            children
        } = this.props;

        const value = {
            ...this.state,
            handleToggleDrawer: this.handleToggleDrawer,
            handleMenuSelection: this.handleMenuSelection
        };

        return <DataContext.Provider value={value} >
            {children}
        </DataContext.Provider>
    }


}
export default DataProvider;