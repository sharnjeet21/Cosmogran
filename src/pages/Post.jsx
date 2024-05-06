import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests
import Navbar from '../components/Navbar';

const Post = () => {
    // State to store the posts data
    const [posts, setPosts] = useState([]);

    return (
        <div>
            <Navbar />
            <div className='bg-gradient-to-r from-slate-500 via-gray-500 to-gray-800 h-screen'>
                {/* Content inside the div */}
                
            </div>
        </div>
    );
};

export default Post;
