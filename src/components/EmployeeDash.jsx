import React from 'react'
import Header from './Header'
import TaskGrid from './TaskGrid'
import TaskList from '../service/TaskList'

const EmployeeDash = () => {
  return (
    <div>
       <Header />
       <TaskGrid /> <br />
       <TaskList />
    </div>
  )
}

export default EmployeeDash