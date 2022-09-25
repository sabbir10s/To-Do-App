import React, { useRef } from 'react';

const EditToDo = ({ todoInfo }) => {
    const { title, description, status } = todoInfo
    const getTitle = useRef()
    const getDescription = useRef()
    const getStatus = useRef()
    const handleSubmitData = event => {
        event.preventDefault();
        const name = getTitle.current.value;
        const description = getDescription.current.value
        const status = getStatus.current.value
        console.log(name, description, status);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="bg-base-100 p-3 w-[300px] rounded">
                    <form onSubmit={handleSubmitData} className='flex flex-col'>
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
                        <label for="my-modal-6" className='text-center text-lg p-1 rounded border bg-primary text-white mt-2 cursor-pointer w-20'>Submit</label>
                        <label for="my-modal-6" className='text-center text-lg p-1 rounded border bg-error text-white mt-2 cursor-pointer w-20'>Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditToDo;