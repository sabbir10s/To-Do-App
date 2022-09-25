import React, { useRef, useState } from 'react';

const InputToDo = () => {
    const [input, setInput] = useState(false)
    const [todoInfo, setTodoInfo] = useState({ title: "Sabbir", description: "This is my To Do description", status: "research" })
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
            <div className='flex flex-col w-[300px]'>
                {
                    input === !true
                        ?
                        <button onClick={() => setInput(true)} className='text-left text-lg bg-white py-2 rounded shadow-lg border border-[#0d74c4] text-[#0d74c4]'><span className='pl-3 text-xl'>+</span> Add new</button>
                        :
                        <form onSubmit={handleSubmitData} className='flex flex-col p-2 bg-white shadow-xl rounded'>
                            <input className='text-left text-lg p-2 rounded border border-[#0d74c4]' type="text" name='title' ref={getTitle} placeholder='Title' />
                            <textarea className='text-left text-lg p-2 rounded border border-[#0d74c4] mt-2' name="description" ref={getDescription} id="description" cols="10" rows="3"></textarea>
                            <select className='text-left text-lg p-2 rounded border border-[#0d74c4] mt-2' ref={getStatus}>
                                <option value="todo">To Do</option>
                                <option value="research">Research</option>
                                <option value="in progress">In Progress</option>
                                <option value="review">Review</option>
                                <option value="completed">Completed</option>
                            </select>
                            <div className='flex justify-between'>
                                <button className='text-center text-lg p-1 rounded border bg-[#0d74c4] text-white mt-2 cursor-pointer w-20'>Submit</button>
                                <button onClick={() => setInput(false)} className='text-center text-lg p-1 rounded border bg-red-500 text-white mt-2 cursor-pointer w-20'>Cancel</button>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
};

export default InputToDo;