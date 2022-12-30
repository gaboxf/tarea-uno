import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <ul>
                <li><h3>firstName: {contact.firstName}</h3></li>
                <li><h3>lastName: {contact.lastName}</h3></li>
                <li><h3>email: {contact.email}</h3></li>
                <li><h3>status: {contact.online ? 'ONLINE' : 'OFFLINE'}</h3></li>
            </ul>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired
};


export default ContactComponent;
