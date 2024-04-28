// Search.jsx
import React, { useState } from 'react';
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import AddandDelete from './AddandDelete';

const Search = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const onOpen = () => {
    console.log("Button clicked!");
    setIsOpen(true); 
    setIsUpdate(false); // Reset to add mode when opening the model
  }

  const onClose = () => {
    setIsOpen(false); 
  }

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value); // Pass the value to the parent component
  }

  return (
    <>
      <div>
        <div className='flex justify-between px-10 items-center gap-3 bg-white m-4 p-2 rounded-md'>
          <CiSearch className='text-3xl ml-4 cursor-pointer' />
          <input onChange={handleChange} className='p-3 border-black border rounded-md w-[80%]' type="text" placeholder='Search here........' />
          <CiSquarePlus onClick={onOpen} className='text-5xl cursor-pointer' />
        </div>
      </div>
      <div>
        <AddandDelete onClose={onClose} isOpen={isOpen} isUpdate={isUpdate} /> 
      </div>
    </>
  )
}

export default Search;
