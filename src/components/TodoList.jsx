import React, {useEffect, useState} from 'react'
import CreateTask from '../modals/CreateTask.jsx'
import Navbar from './Navbar.jsx'
import logo from '../assets/logo.png'
import axios from 'axios'


const Todolist = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3000/users")
    .then(res => setData(res.data))
    .catch(er =>console.log(er));

  }, [])

  const handleDelete = (id)=>{
    const confirm = window.confirm("do yo want to delete task?")
    if(confirm)
    axios.delete('http://localhost:3000/users/'+id)
    .then(Response => {
      location.reload()
       })
  .catch(err => console.log(err))
  }
  
  const refreshButton = () =>{

      location.reload()
       
  .catch(err => console.log(err))
  }


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


return (

  <><Navbar/>
  <CreateTask  toggle={toggle} modal={modal}/>
      <div className="container mx-auto p-2 bg-violet-100 max-h-[80vh]  border-2 border-gray-500 ">
      <div className="right_leftcontainer flex justify-between ">
      <div className="rightcontainer flex">
      <div className="logo  pr-10">
        <img className='w-14' src={logo} alt="" />
      </div>
      <div className="middlecontainer pr-20">
      <h1  className='text-xl font-bold mx-1'>Tasks</h1>
      <span className='text-xl font-bold mx-1'> All Tasks</span>
      </div>
      </div>

      
        <div className="leftside_container ">
          <div className="taskandnew ">

            <div className="NewTaskRefresh text-xl font-bold">

             <div className="clickbtn flex items-center">             
               <button onClick={() => setModal(true)} className='border-2 border-gray-400  bg-orange-300 hover:bg-orange-600 w-44'>New Task</button>
               
             <button onClick={refreshButton} className='border-2 border-gray-400 bg-orange-300 hover:bg-orange-600 w-44'>Refresh</button>
             </div>
            </div>
            
            </div>

        <div className="search">
      <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-1 my-2  text-sm focus:outline-violet-300 font-bold" type="search" name="search " placeholder="Search"/>
        <button><span className='bg-violet-800 hover:bg-violet-950 p-2 text-white rounded-md font'>search</span></button>
        </div>
        </div>
          </div><hr />

          <div className="middlecontainer bg-white  min-h-[50vh] ">
          <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          
          <thead className="text-xs text-gray-700  bg-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-6 py-3">
                  <input type="checkbox" />
              </th>
              <th scope="col" className="px-6 py-3 ">
                  Assigned To
              </th>
              <th scope="col" className="px-6 py-3">
                  Status
              </th>
              <th scope="col" className="px-6 py-3">
                  Due Date
              </th>
              <th scope="col" className="px-6 py-3">
                  Priority
              </th>
              <th scope="col" className="px-6 py-3">
                  Comments
              </th>
          </tr>
      </thead>
      <tbody>
        {data.map((user,index) => 
          <tr key={index}> 
            <td className='px-6'><input type="checkbox" /></td>
            <td className='px-6'>{user.post.assignedto}</td>
            <td className='px-6'>{user.post.status}</td>
            <td className='px-6'>{user.post.duedate}</td>
            <td className='px-6'> {user.post.priority}</td>
            <td className='px-6'>{user.post.comments}</td>
                      <button className='btn btn-sm bg-orange-300 me-2' onClick={() => setModal(true)} >Edit</button>
                      <button className='btn btn-sm bg-orange-300' onClick = {() => handleDelete(user.id)}>Delete</button>
          </tr>
        )

        }
     </tbody>
  </table>
</div>
</div>
<hr />
  <div className="middlecontainer p-2 bg-violet-100">
  <div className="d-flex">
  <div className="me-auto">    
    <form className="w-28 mx-auto">
          <input type="number" id="number-input"  className="bg-white border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20" required />
      </form>
    </div>

<div className="first border-1 border-gray-500 flex items-center w-28 bg-white">
<div className='-rotate-90  text-2xl '>&raquo;</div>
  <div className="p-2 " > <button>First</button> </div>
  </div>

  <div className="p-2 border-1 border-gray-500 flex items-center w-28 bg-white"> <button> &lt; Prev</button></div>
  <div className="p-2 border-1 border-gray-500 flex items-center w-28 bg-white" >1</div>
  <div className="p-2 border-1 border-gray-500 flex items-center w-28 bg-white"> <button>&gt; Next</button> </div>

  <div className="last border-1 border-gray-500 flex items-center w-28 bg-white">
  <div className='-rotate-90 py-2 text-2xl'>&laquo;</div>
  <div className="p-2"> <button>Last</button> </div>
  </div>

</div>
  </div>
</div>
  </>


);

}

export default Todolist