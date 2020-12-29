import React from 'react';

import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const PrimaryButton = ({label, to, onClick})=>(
    <Button
        className='float-right'
        color="primary"
        tag={Link}
        to={to}
        onClick={onClick}
    >
        {label}
    </Button>
);

export default PrimaryButton;
