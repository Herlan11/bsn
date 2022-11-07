import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const CreateNewBlog = () => {
    const [title, setTitle] = useState('');
    const [comment,setComment] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/blogs`, {
                title, comment
            })
            .then((res) => {
                console.log(res);
                navigate('/blogs');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }
    return (
        <div>
            <h3><Link to={'/blogs'}>Home</Link></h3><br/>
            <h2>Add a new Blog:</h2><br/>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <label><h3>Blog Title:</h3></label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                {errors.title && <span style={{color: "red"}}>{errors.name.message}</span>}<br/>
                <label><h3>Comment:</h3></label>
                <textarea rows="4" cols="30" value={comment} onChange={(e) => setComment(e.target.value)} />
                {errors.name && <span style={{color: "red"}}>{errors.name.message}</span>}<br/>
                <Link to={'/blogs'}><button>Cancel</button></Link>
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default CreateNewBlog;