import React, { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const UpdateTask = ({ taskId, taskInfo, setOpenModal, refetch }) => {
    const task = taskInfo?.find((task) => task._id === taskId)
    const { _id, title, description, status } = task
    const getTitle = useRef()
    const getDescription = useRef()
    const getStatus = useRef()
    const handleSubmitData = event => {
        event.preventDefault();
        const title = getTitle.current.value;
        const description = getDescription.current.value
        const status = getStatus.current.value
        const updateTask = { title: title, description: description, status: status }
        const url = `http://localhost:5000/task/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged);
                if (data.acknowledged === true) {
                    refetch()
                    setOpenModal("")
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="bg-base-100 p-3 w-[300px] rounded">
                    <div className='flex justify-end mb-2 '>
                        <label htmlFor="my-modal-6" ><AiFillCloseCircle className='text-4xl cursor-pointer' /></label>
                    </div>
                    <form className='flex flex-col'>
                        <input className='text-left text-lg p-2 rounded border border-[#0d74c4]' type="text" name='title' ref={getTitle} defaultValue={title} />
                        <textarea className='text-left text-lg p-2 rounded border border-[#0d74c4] mt-2' ref={getDescription} defaultValue={description} rows="3"></textarea>
                        <select className='text-left text-lg p-2 rounded border border-[#0d74c4] mt-2' defaultValue={status} ref={getStatus}>
                            <option value="todo">To Do</option>
                            <option value="research">Research</option>
                            <option value="in progress">In Progress</option>
                            <option value="review">Review</option>
                            <option value="completed">Completed</option>
                        </select>

                    </form>
                    <div className="modal-action flex justify-between">
                        <label onClick={handleSubmitData} htmlFor="my-modal-6" className='text-center text-lg p-1 rounded border bg-primary text-white mt-2 cursor-pointer w-full'>Submit</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;