import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // const [tasks, setTasks] = useState() 
    return (
        <>
            {tasks.map((task, index) => (
                <Task 
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
