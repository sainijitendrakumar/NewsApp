import React from 'react'
import loading from '../loading.gif'

function Spinner() {
  return (
    <div className='size-7'>
        <img src={loading} alt='loading' />
    </div>
  )
}

export default Spinner