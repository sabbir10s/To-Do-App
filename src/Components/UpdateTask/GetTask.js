import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import UpdateTask from '../GetTask/UpdateTask';



const GetTask = ({ taskInfo, refetch }) => {
    const [openModal, setOpenModal] = useState("");
    const [click, setClick] = useState(false)
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
                            <div className='bg-white p-2 rounded'>
                                {
                                    task.status === "todo" ? <p className='text-lg bg-primary text-white pl-2'>{task.title}</p>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "research" ? <p className='text-lg bg-orange-500 text-white pl-2'>{task.title}</p>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "in progress" ? <p className='text-lg bg-purple-600 text-white pl-2'>{task.title}</p>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "review" ? <p className='text-lg bg-yellow-500 text-white pl-2'>{task.title}</p>
                                        :
                                        <></>
                                }
                                {
                                    task.status === "completed" ? <p className='text-lg bg-green-500 text-white pl-2'>{task.title}</p>
                                        :
                                        <></>
                                }
                                <div className='flex items-center gap-2'>

                                    {
                                        !click
                                            ? <p className='bg-white mb-2'>{task.description.slice(0, 25)}....</p>
                                            : <p className='bg-white mb-2'>{task.description}</p>
                                    }


                                </div>

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