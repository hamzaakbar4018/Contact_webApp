// Model.jsx
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { db } from '../config/firebase';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Model = ({ onClose, isOpen, children, isUpdate, contact }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            toast.success("Contact Added Sucessfully!")
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            toast.success("Contact Updated Sucessfully!")
            onClose();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {isOpen && (
                <>
                    <div className='z-50 relative min-h-[200px] m-auto max-w-[80%] bg-white rounded-lg '>
                        <div className='bg-white p-4 flex justify-end rounded-md'>
                            <AiOutlineClose onClick={onClose} className='cursor-pointer' />
                        </div>
                        <div>
                            <Formik
                                initialValues={{
                                    name: isUpdate ? contact.name : "",
                                    email: isUpdate ? contact.email : ""
                                }}
                                onSubmit={values => {
                                    isUpdate ? updateContact(values, contact.id) : addContact(values);
                                }}
                            >
                                <Form>
                                    <div className='flex  justify-center  items-center mt-1  gap-1'>
                                        <label htmlFor="name" className='font-medium text-xl'>Name</label>
                                        <Field type="text" className="border p-1 rounded w-[50%]" name="name" />
                                    </div>
                                    <div className='flex justify-center items-center mt-6 gap-1'>
                                        <label htmlFor="email" className='font-medium text-xl'>Email</label>
                                        <Field type="email" className="border p-1 ml-1  rounded w-[50%]" name="email" />
                                    </div>
                                    <div className='flex justify-center items-center my-3'>
                                        <button className='bg-blue-600 font-bold  p-2 rounded text-white' type="submit">{isUpdate ? "UPDATE" : "ADD"} CONTACT</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className='absolute z-40  h-screen w-screen backdrop-blur top-0' />
                </>
            )}
        </>
    );
};

export default Model;
