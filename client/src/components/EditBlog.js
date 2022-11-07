import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';


const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/blogs/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setComment(res.data.comment);
            })
            .catch((err) => console.log('GET BlOG BY ID ERROR', err));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/blogs/${id}`, {
                title, comment
            })
            .then((res) => {
                console.log(res.data);
                navigate('/blogs');
            })
            .catch((err) => console.log('POST ERROR', err));
    };
    return (
        <div style={{border: "solid black 1px"}}>
            <h3><Link to={`/blogs`}>Back to home</Link></h3><br/>
            <h2> Edit this Blog</h2><br/>
            <form onSubmit={handleSubmit}>
                <label>Title:</label><br/>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/><br/>
                <label>Comment:</label><br/>
                <textarea rows="4" cols="40" value={comment} onChange={(e) => setComment(e.target.value)} /><br></br>
                <Link to={'/blogs'}><button>Cancel</button></Link>
                <button type="submit" >Update</button> 
            </form>
        </div>
    );
}

export default EditBlog;