import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function EditPost() {
  const [status, setStatus] = useState('publish');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title, category, content, status
    }
    try {
      await axios.put(`http://localhost:8080/article/${Id}`, data).then((res) => {
        navigate(`/article`);
      })
    } catch (error) {
      console.log(error)
    }
  }
  const { Id } = useParams();
  const getData = async () => {
    await axios.get(`http://localhost:8080/article/${Id}`).then(res => {
      const data = res.data.results;
      setCategory(data.category)
      setTitle(data.title)
      setContent(data.content)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='container'>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder='Insert title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Category</label>
        <input type="text" placeholder='Insert Category' value={category} onChange={(e) => setCategory(e.target.value)} />
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <div className="button-group">
          <button type='reset'>Reset</button>
          <button type='submit' onClick={() => setStatus('publish')}>Publish</button>
          <button type='submit' onClick={() => setStatus('draft')}>Draft</button>
        </div>
      </form>
    </div>
  )
}

export default EditPost