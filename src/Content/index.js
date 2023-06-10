
import { useEffect, useState } from 'react'
import './content.scss'

function Content() {

    const [isOpen, setIsOpen] = useState(false)
    const [tasks, setTasks] = useState([])
    const [job, setJob] = useState({})
    const [isComplete, setIsComplete] = useState(false)
    const [isImportant, setIsImportant] = useState(false)
    let numberOfComplete = 0
    useEffect (() => {
        fetch('https://todo-nodejs-psi.vercel.app/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    },[])
    tasks.forEach(task => {
        if (task.isComplete == true) {
            numberOfComplete++
        }
    })

    const handleClickTask = (task) => {
        const formToDo  = document.querySelector('#form-todo')
        const formDetail = document.querySelector('.form-detail-task')
        if (isOpen == false) {
            formToDo.style.width = '890px'
            formDetail.style.right = '0'
            setJob(task)
            document.querySelector('.description').value = task.description
            document.querySelector('.task-name-detail').value = task.name
            setIsImportant(task.isImportant)
            setIsComplete(task.isComplete)
            setIsOpen(true)
        } else {
            formToDo.style.removeProperty('width')
            formDetail.style.right = '-700px'
            setIsOpen(false)
        }
    }
    setTimeout(() => {
        document.querySelector('.no-complete-tasks-area').style.opacity = '1'
        document.querySelector('.complete-tasks-area').style.opacity = '1'
    },500)
    return ( 
        <div id='content' className='col-lg-12'>
            <div id='form-todo' className='col-lg-11'>
                <div className='title col-lg-12'>
                    <i className='bx bx-sun sun'></i>
                    <p>My Day ({tasks.length})</p>
                </div>
                <div className='col-lg-12 date'>
                    Saturday, June 10
                </div>

                {/* INSERT TASK */}
                <form action='https://todo-nodejs-psi.vercel.app/insert-task' method='POST' className='add-task-area col-lg-12'>
                    
                    {/* isComplete */}
                    <input type='hidden' value={false} name='isComplete' />
                    <input type='checkbox' className='check' />

                    {/* name */}
                    <input type='text' name='name' className='text-area col-lg-10' placeholder='Add a task' />
                    
                    {/* description */}
                    <input type='hidden' name='description' value='' />

                    {/* important */}
                    <input type='hidden' name='isImportant' value={false} />
                    
                    <button type='submit' className='btn-add'>Add</button>
                </form>
                {/* INSERT TASK */}

                <div className='no-complete-tasks-area area col-lg-12'>
                    {tasks.map((task, index) => {
                        if (task.isComplete == false) {
                            return <div key={index} onClick={(e) => handleClickTask(task)} className='task col-lg-12'>
                                        <input checked={task.isComplete} type='checkbox' className='check' />
                                        <p className='task-name col-lg-11'>{task.name}</p>
                                        {task.isImportant == false ? <i class="fa-regular fa-star star"></i> : <i class="fa-solid fa-star star"></i>}
                                    </div>
                        }
                    })}
                </div>

                <div className='complete-tasks-area area col-lg-12'>
                    {numberOfComplete == 0 ? <></> : 
                        <div className='col-lg-12 title'>
                            <i className='bx bx-chevron-down arrow'></i> 
                            <span>Complete </span> 
                            <span className='number-complete'>{numberOfComplete}</span>
                        </div> }
                        {tasks.map((task, index) => {
                            if (task.isComplete == true) {
                                return <div key={index} onClick={() => handleClickTask(task)} className='task col-lg-12'>
                                            <input checked={task.isComplete} type='checkbox' className='check' />
                                            <p className='task-name col-lg-11'>{task.name}</p>
                                            {task.isImportant == false ? <i class="fa-regular fa-star star"></i> : <i class="fa-solid fa-star star"></i>}
                                        </div>
                            }
                        })}
                </div>
            </div>

            {/* Update */}
            <form method='POST' action='https://todo-nodejs-psi.vercel.app/update-task' className='form-detail-task col-lg-4'>
                <div className='title col-lg-10'>
                    {/* isComplete */}
                    <input type='hidden' className='isCompleteHidden' name='isComplete' value={isComplete} />
                    <input type='checkbox' checked={isComplete} onClick={() => {
                        if (isComplete == false) 
                            setIsComplete(true)
                        else 
                            setIsComplete(false)
                    }} className='check' />

                     {/* name */}
                    <input className='task-name-detail' name='name' />

                    {/* important */}
                    <input type='hidden' name='isImportant' value={isImportant} />

                    {isImportant == false ? 
                    <i class="fa-regular fa-star star" onClick={() => {
                        if (isImportant == false) 
                            setIsImportant(true)
                        else 
                            setIsImportant(false)  
                    }}></i> : 
                    <i class="fa-solid fa-star star" onClick={() => {
                        if (isImportant == false) 
                            setIsImportant(true)
                        else 
                            setIsImportant(false)  
                    }}></i>}
                </div>

                {/* description */}
                <textarea className='col-lg-10 description' name='description' />

                {/* dateTime */}
                <input type='hidden' name='dateTime' value={job.dateTime} />

                <div className='btns-area col-lg-10'>
                    <input type='hidden' value={job._id} name='_id' />
                    <button type="submit" class="btn btn-primary" value={job._id}>Update</button>
                    
                    {/* Delete */}
                    <form method='POST' action='https://todo-nodejs-psi.vercel.app/delete-task'>
                        <input type='hidden' value={job._id} name='_id' />
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                    {/* Delete */}
                
                </div>

                <i onClick={() => handleClickTask(job)} className="fa-solid fa-xmark exit"></i>
            </form>
            {/* Update*/}

        </div>
    );
}

export default Content;