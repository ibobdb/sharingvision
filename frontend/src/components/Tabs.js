import React from 'react'
import { Link } from 'react-router-dom'
function Tabs({ callback }) {
  return (
    <div className='tabs'>
      <div>  <button onClick={() => callback('publish')}>Publish</button>
        <button onClick={() => callback('draft')}>Draft</button>
        <button onClick={() => callback('trash')}>Trash</button></div>
      <div>
        <Link to={'newpost'}><button>New Post</button></Link>
      </div>
    </div>
  )
}

export default Tabs