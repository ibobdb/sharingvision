import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Preview() {
  const { Id } = useParams();
  const [data, setData] = useState({});
  const getData = async () => {
    await axios.get(`http://localhost:8080/article/${Id}`).then(res => {
      setData(res.data.results);
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='container'>
      <h2>{data.title}</h2>
      <h5>{data.category}</h5>
      <p>{data.content}</p>
    </div>
  )
}

export default Preview