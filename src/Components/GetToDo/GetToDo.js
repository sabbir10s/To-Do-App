import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import EditToDo from '../EditToDo/EditToDo';



const GetToDo = () => {
    const [input, setInput] = useState(false)
    const [todoInfo, setTodoInfo] = useState({ title: "Sabbir", description: "This is my To Do description", status: "research" })
    const { title, description, status } = todoInfo
    return (
        <div className=' bg-gray-300 w-[300px] p-2 rounded cursor-pointer'>
            <p className='text-lg pl-2'>{title}</p>
            <div className='bg-white p-2 rounded'>
                {
                    status === "research" ? <div className='h-2 bg-orange-500 w-1/3 rounded-full mb-2'></div>
                        :
                        <></>
                }
                <p className='bg-white mb-2'>{description}</p>
                <div className='flex justify-between'>
                    <button onClick={() => setInput(true)}><RiDeleteBinLine className='text-red-500' /></button>
                    <p>{status}</p>
                    <label for="my-modal-6" className=" cursor-pointer"><BiPencil /></label>
                    {/* <button></button> */}

                </div>
                <EditToDo todoInfo={todoInfo} />
            </div>

        </div>
    );
};

export default GetToDo;