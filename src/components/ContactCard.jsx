import React, { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddandDelete from './AddandDelete';
import Model from './Model';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Sucessfully!")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex font-medium justify-between p-2 px-5' key={contact.id}>
                <div className='data flex pt-1 flex-col gap-3'>
                    <h2>Name : {contact.name}</h2>
                    <p>Email : {contact.email}</p>
                </div>
                <div className='icons font-bold cursor-pointer flex flex-col gap-2'>
                    <h1 onClick={onOpen} className='rounded p-1 flex justify-center items-center bg-blue-600'>EDIT</h1>
                    <h2 onClick={() => deleteContact(contact.id)} className='rounded p-1 flex justify-center items-center bg-blue-600'>DELETE</h2>
                </div>
            </div>
            {isOpen && (
                <Model onClose={onClose} isOpen={isOpen} isUpdate contact={contact}>
                    <h1 className='text-black'></h1>
                </Model>
            )}
        </>
    );
};

export default ContactCard;
