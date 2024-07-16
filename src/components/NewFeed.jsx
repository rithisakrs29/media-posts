import React from 'react';
import { FaComment, FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NewFeed() {
  const [changeLike, setChangeLike] = useState(false);
  const [data, setData] = useState([]);
  const [isLike, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!isLike);
  }
 // const imagPath = "http://localhost:8080/learn_php/block_post_php/users/";

  useEffect(() => {
    axios.get('http://localhost:8080/learn_php/block_post_php/api/user/api_read_posts.php') // Update the URL if necessary
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="bg-white dark:bg-gray-800 p-5 rounded-lg mt-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={item.profile_image}
                className="h-10 w-10 object-cover rounded-full"
                alt=""
              />
              <div className="ml-5">
                <h2 className="dark:text-green-200 text-gray-800">
                  {item.FullName}
                </h2>
                <p className="text-sm">{item.post_date}</p>
              </div>
            </div>
          </div>
          <b className="mt-2 dark:text-purple-500 text-blue-600">
            {item.title}
          </b>
          <p className="mt-2 dark:text-white text-black">{item.contents}</p>
          <img
            src={item.postImage}
            className="mt-2 rounded-lg h-full w-full object-cover"
            alt=""
          />
          <div className="flex mt-5 items-center">
            <div
              className="cursor-pointer hover:scale-110 transition-all text-lg text-red-500"
              onMouseEnter={() => setChangeLike(true)}
              onMouseLeave={() => setChangeLike(false)}
              onClick={handleLike}
            >
              {changeLike || isLike ? <FaHeart /> : <FaRegHeart />}
            </div>
            <p className='ml-1'>{item.total_like}</p>
            <FaComment className="cursor-pointer hover:scale-110 hover:text-blue-600 transition-all text-lg ml-5" />
            <p className='ml-1'>{item.total_comment}</p>
            <Link>
            <p className='ml-2 hover:text-blue-500'>see comment</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewFeed;
