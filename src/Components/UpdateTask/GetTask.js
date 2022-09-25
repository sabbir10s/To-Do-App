import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import UpdateTask from '../GetTask/UpdateTask';
import { useQuery } from '@tanstack/react-query';



const GetTask = () => {
    // const [reload, setIsReload] = useState(true)
    const [input, setInput] = useState(false)
    // const [taskInfo, setTaskInfo] = useState([])
    const [openModal, setOpenModal] = useState("");


    // useEffect(() => {
    //     const url = 'http://localhost:5000/task';
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setTaskInfo(data))
    // }, [])


    const {
        data: taskInfo,
        isLoading,
        refetch,
    } = useQuery(["users"], () =>
        fetch("http://localhost:5000/task", {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then(res => res.json())
    );
    if (isLoading) {
        return <div>Loading....</div>;
    }

    return (
        <div className=' bg-gray-300 w-[300px] p-2 rounded cursor-pointer'>
            {
                taskInfo.map((task) => <div key={task._id}>
                    <div className='mt-2'>
                        <p className='text-lg pl-2'>{task.title}</p>
                        <div className='bg-white p-2 rounded'>
                            {
                                task.status === "research" ? <div className='h-2 bg-orange-500 w-1/3 rounded-full mb-2'></div>
                                    :
                                    <></>
                            }
                            <p className='bg-white mb-2'>{task.description}</p>
                            <div className='flex justify-between'>
                                <button onClick={() => setInput(true)}><RiDeleteBinLine className='text-red-500' /></button>
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