import React from 'react';
import GetToDo from '../GetToDo/GetToDo';
import InputToDo from '../InputToDo/InputToDo';

const Home = () => {

    return (
        <div className='bg-[#e3e4e6] h-screen'>
            <div className='container mx-auto'>
                <div className='flex items-center gap-2 py-4'>
                    <img className='w-7' src="https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png" alt="" />
                    <h1 className='font-bold text-2xl text-primary'>ToDo</h1>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <GetToDo />
                    </div>
                    <div>
                        <InputToDo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;