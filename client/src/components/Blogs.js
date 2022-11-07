import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import Table from 'react-bootstrap/Table';

const Blogs = () => {

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/blogs")
        .then((findAllBlogs) => {
            console.log(findAllBlogs);
            console.log(findAllBlogs.data);
            setBlogList(findAllBlogs.data);
        })
        .catch((err) => console.log("Error grabbing Blogs ",err))
    }, [])


    const handleDelete = (blog_id) => {
        axios.delete(`http://localhost:8000/api/Blogs/${blog_id}`)

        .then((res) => {
            console.log(res.data);

            const filteredList = blogList.filter((blog,index) =>
                blog._id !== blog_id)
            setBlogList(filteredList);
        })
    }

    return(
        <div className='container'>
            <h1>Herlan Sports Network</h1>
            <Link to={'/newblogs'}>Add a Blog</Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope='col'>Blog</th>
                        <th scope='col'>Comment</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    blogList.map((blog,index) => {
                        return(
                            <tr key={blog._id}>
                                <td>{blog.title}</td>
                                <td>{blog.comment}</td>
                                <td>
                                    <Link to={`/editblogs/${blog._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                <button onClick={() => handleDelete(blog._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}
export default Blogs;