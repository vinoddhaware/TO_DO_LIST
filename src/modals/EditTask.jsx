import axios from 'axios';
import React, { useState } from 'react'
import { Button, modaled, modaledHeader, modaledBody, modaledFooter } from 'reactstrap';

const EditTask = ({modaled, toggleed}) => {

  const [post, setPost] = useState({
    assignedto:'',
    status:'',
    duedate:'',
    priority:'',
    comments:''
  })


const handleInput = (event) =>{
  setPost({...post, [event.target.name]: event.target.value})
}


const handleClick = ()=>{
  console.log(post);
  event.preventDefault()
  
  axios.post('http://localhost:3000/users', {post})
  .then(Response => {
    location.reload()
    console.log(post);
     })
.catch(err => console.log(err))
}

  return (
    <div className="p-6 space-y-6">
    <form  action='' onSubmit={handleClick}>
        <modaled isOpen={modaled} toggleed={toggleed}>
        <modaledHeader toggleed={toggleed} className=''>Edit Task</modaledHeader>
        <modaledBody>
                <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assigned To</label>
                    <select onChange={handleInput} id="countries" name='assignedto' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>User 1</option>
                      <option>User 2</option>
                      <option>User 3</option>
                      <option>User 4</option>
                      <option>User 5</option>
                      <option>User 6</option>
                      <option>User 7</option>
                      <option>User 8</option>
                      <option>User 9</option>
                      <option>User 10</option>
                       </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Status</label>
                    <select onChange={handleInput}  id="countries" name='status'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                      <option>Not Started</option>
                      <option>Completed</option>
                      <option>In Progress</option>
                       </select>

                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Due Date</label>
                    <input onChange={handleInput} type="date" name="duedate" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Priority</label>
                    <select onChange={handleInput} id="countries" name='priority'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Normal</option>
                      <option>Low</option>
                      <option>High</option>
                      </select>

                </div>
                <div className="col-span-full">
                    <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Discription</label>
                    <textarea onChange={handleInput} name='comments' id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder=""></textarea>
                </div>
            </div>
            <hr />

              </modaledBody>
              <modaledFooter>
              <Button color="primary" onClick={toggleed}>
                  Cancel
                </Button>{' '}
                <Button color="secondary" onClick={handleClick}>
                  Save
                </Button>
                

              </modaledFooter>
            </modaled>
       </form>
    </div>
  )
}

export default EditTask
