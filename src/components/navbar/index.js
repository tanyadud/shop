import React from 'react';
import {ListMenu} from './navbarStyle';
import PropTypes from 'prop-types';

class NavMenu extends React.Component {

    MenuList = [
        'All',
        'Bags',
        'Wallets',
        'Glasses',
        'Belts'
    ]

    render() {
        return (
            <ListMenu>
                {
                    this.MenuList.map((category) => {
                        return <p key={category} onClick={() => this.props.onItemClick(category)}>{category}</p>
                    })
                }
            </ListMenu>
        )
    }
}

NavMenu.propTypes = {
    onItemClick: PropTypes.func

};

export default NavMenu;