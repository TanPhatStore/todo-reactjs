
import { useState } from 'react'
import './content.scss'

function Content() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClickTask = () => {
        const formToDo  = document.querySelector('#form-todo')
        const formDetail = document.querySelector('.form-detail-task')
        if (isOpen == false) {
            formToDo.style.width = '890px'
            formDetail.style.right = '0'
            setIsOpen(true)
        } else {
            formToDo.style.removeProperty('width')
            formDetail.style.right = '-700px'
            setIsOpen(false)
        }
    }
    return ( 
        <div id='content' className='col-lg-12'>
            <div id='form-todo' className='col-lg-11'>
                <div className='title col-lg-12'>
                    <i className='bx bx-sun sun'></i>
                    <p>My Day</p>
                </div>
                <div className='col-lg-12 date'>
                    Saturday, June 10
                </div>
                <div className='add-task-area col-lg-12'>
                    <input type='checkbox' className='check' />
                    <input type='text' className='text-area col-lg-10' placeholder='Add a task' />
                    <button className='btn-add'>Add</button>
                </div>
                <div className='no-complete-tasks-area area col-lg-12'>
                    <div onClick={() => handleClickTask()} className='task col-lg-12'>
                        <input type='checkbox' className='check' />
                        <p className='task-name col-lg-11'>Do Homework</p>
                        <i class="fa-regular fa-star star"></i>
                    </div>
                </div>

                <div className='complete-tasks-area area col-lg-12'>
                    <div className='col-lg-12 title'>
                        <i className='bx bx-chevron-down arrow'></i> 
                        <span>Complete </span> 
                        <span className='number-complete'>4</span>
                    </div>
                    <div onClick={() => handleClickTask()} className='task col-lg-12'>
                        <input type='checkbox' className='check' />
                        <p className='task-name col-lg-11'>Do Homework</p>
                        <i class="fa-regular fa-star star"></i>
                    </div>
                </div>
            </div>
            <div className='form-detail-task col-lg-4'>
                <div className='title col-lg-10'>
                    <input type='checkbox' className='check' />
                    <p className='task-name'>Do Homework</p>
                    <i class="fa-regular fa-star star"></i>
                </div>
                <textarea className='col-lg-10 description' name='description'>
                </textarea>
                <div className='btns-area col-lg-10'>
                    <button type="button" class="btn btn-primary">Update</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>

                <i onClick={() => handleClickTask()} className="fa-solid fa-xmark exit"></i>
            </div>
        </div>
    );
}

export default Content;