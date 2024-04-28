import React from 'react';
import Model from './Model';

const AddandDelete = ({ isOpen, onClose, isUpdate, contact }) => {
    return (
        <Model onClose={onClose} isOpen={isOpen} isUpdate={isUpdate} contact={contact}>
            <h1 className='text-black'></h1>
        </Model>
    );
}

export default AddandDelete;
