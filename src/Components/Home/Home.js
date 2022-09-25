import { useQuery } from '@tanstack/react-query';
import AddTask from '../AddTask/AddTask';
import Loading from '../Loading/Loading';
import GetTask from '../UpdateTask/GetTask';

const Home = () => {
    const {
        data: taskInfo,
        isLoading,
        refetch,
    } = useQuery(["users"], () =>
        fetch("https://todo-py13.onrender.com/task", {
            method: "GET"
        }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='bg-[#e3e4e6] h-screen'>
            <div className='container mx-auto'>
                <div className='flex items-center gap-2 py-4'>
                    <img className='w-7' src="https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png" alt="" />
                    <h1 className='font-bold text-2xl text-primary'>ToDo</h1>
                </div>
                <div className='flex flex-col'>
                    <div className='mb-3'>
                        <AddTask refetch={refetch} />
                    </div>

                    <div>
                        <GetTask taskInfo={taskInfo} refetch={refetch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;