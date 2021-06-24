const Task = ({ title, percentage}) => {
    return (
        <>
        <a href='#t' className='dropdown-item'>
            <div className='text d-flex justify-content-between'>
              <strong>{title}</strong><span>{percentage} complete</span></div>
            <div className='progress'>
              <div role='progressbar' style={{width: percentage}} aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' className='progress-bar dashbg-1'></div>
            </div>
        </a>
        </>
    )
}

export default Task
