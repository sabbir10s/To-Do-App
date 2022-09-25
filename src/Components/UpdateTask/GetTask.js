import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import UpdateTask from '../GetTask/UpdateTask';



const GetTask = ({ taskInfo, refetch }) => {
    const [openModal, setOpenModal] = useState("");
    const handleDelete = (id) => {
        fetch(`https://todo-py13.onrender.com/task/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.acknowledged) {
                    refetch();
                }
            });
    }

    return (
        <div className='absolute top-[110px] rounded cursor-pointer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                taskInfo.map((task) =>
                    <div className='w-full md:w-[300px]' key={task._id}>
                        <div className='mt-2 '>
                            <p className='text-lg bg-primary text-white pl-2'>{task.title}</p>
                            <div className='bg-white p-2 rounded'>
                                {
                                    task.status === "todo" ? <div className='h-2 bg-blue-500 w-1/3 rounded-full mb-2'></div>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "research" ? <div className='h-2 bg-orange-500 w-1/3 rounded-full mb-2'></div>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "in progress" ? <div className='h-2 bg-purple-700 w-1/3 rounded-full mb-2'></div>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "review" ? <div className='h-2 bg-yellow-500 w-1/3 rounded-full mb-2'></div>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "completed" ? <div className='h-2 bg-green-500 w-1/3 rounded-full mb-2'></div>
                                        :
                                        <></>
                                }
                                <p className='bg-white mb-2'>{task.description}</p>
                                <div className='flex justify-between'>
                                    <button onClick={() => handleDelete(task._id)}><RiDeleteBinLine className='text-red-500' /></button>
                                    <p>{task.status}</p>
                                    <label onClick={() => setOpenModal(task._id)} htmlFor="my-modal-6" className=" cursor-pointer" ><BiPencil />  </label>
                                    {
                                        openModal && <UpdateTask taskId={openModal} taskInfo={taskInfo} setOpenModal={setOpenModal} refetch={refetch} />
                                    }
                                </div>

                            </div>
                        </div>
                    </div>)
            }


        </div>
    );
};

export default GetTask;