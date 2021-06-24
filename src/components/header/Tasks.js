import Task from './Task'

const Tasks = () => {
    return (
        <>
        <div className='list-inline-item dropdown'>
        <a id='navbarDropdownMenuLink2' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded-off='false' className='nav-link tasks-toggle'>
          <i className='icon-new-file'></i><span className='badge dashbg-3'>5</span>
        </a>
        <div aria-labelledby='navbarDropdownMenuLink2' data-toolpip='set' className='dropdown-menu tasks-list'>

          <Task title={'Task Title 01'} percentage={'40%'} />

          <Task title={'Task Title 02'} percentage={'20%'} />

          <a href='#' className='dropdown-item text-center'> <strong>See All Tasks <i className='fa fa-angle-right'></i></strong></a>
        </div>
      </div>
        </>
    )
}

export default Tasks
