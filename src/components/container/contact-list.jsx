import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const defContact = new Contact('John', 'Doe', 'johndoe@gmail.com', true);

    return (
        <div>
            <div>
                <h1>List of Contacts</h1>
            </div>
            <ContactComponent contact={defContact}></ContactComponent>
        </div>
    );
};



export default ContactList;
