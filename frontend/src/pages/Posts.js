import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Posts() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('publish');
  const navigate = useNavigate();
  const getData = async () => {
    try {
      await axios.get(`http://localhost:8080/article?status=${status}`).then(res => {
        setData(res.data.results)
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getStatus = (value) => {
    setStatus(value);
  }
  const updateToTrash = async (id) => {
    try {
      await axios.put(`http://localhost:8080/article/${id}`, {
        status: 'trash'
      }).then(() => {
        getData()
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [status])
  return (
    <div className='container'>
      <h2>All Posts</h2>
      <div>
        <Tabs
          callback={getStatus}
        />
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.data && data.data.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.title}</td>
                  <td>{obj.category}</td>
                  <td>
                    <div className="button-group">
                      <button onClick={() => navigate(`edit/${obj.id}`)}>Edit</button>
                      <button onClick={() => updateToTrash(obj.id)}>Trash</button>
                      {obj.status == 'publish' ? <button onClick={() => navigate(`${obj.id}`)} > Preview</button> : ''}

                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Posts