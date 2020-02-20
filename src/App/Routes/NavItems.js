import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTabletAlt, faUsers, faUserFriends, faDatabase
} from '@fortawesome/free-solid-svg-icons';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

import DropdownNav from '@components/common/DropDownNav';

const NavItems = ({redirect, assignmentType, operative}) => {
    if (isEmpty(assignmentType)) {
        return (
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink onClick={() => redirect('/dashboard')}>
                        <FontAwesomeIcon icon={faTabletAlt}/>
                        &nbsp;Dashboard
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }

    if (!operative || isEmpty(operative)) {
        return null;
    }

    const options = map(assignmentType, at => ({
        option: `Por ${at.name}`,
        to: `/asignacion?type=${at.key}`
    }));

    const optionsLoad = map(assignmentType, at => ({
        option: `Por ${at.name}`,
        to: `/carga?type=${at.key}`
    }));

    return (
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink onClick={() => redirect('/usuarios')}>
                    <FontAwesomeIcon icon={faUsers}/>
                    &nbsp;Usuarios
                </NavLink>
            </NavItem>
            <DropdownNav
                icon={faUserFriends}
                dropdown={{
                    header: 'Asignación',
                    options
                }}
                onRedirect={path => redirect(path)}
            />
            <DropdownNav
                icon={faDatabase}
                dropdown={{
                    header: 'Carga',
                    options: optionsLoad
                }}
                onRedirect={path => redirect(path)}
            />
        </Nav>
    );
};

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired,
    assignmentType: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    operative: PropTypes.shape({}).isRequired
};

export default NavItems;
