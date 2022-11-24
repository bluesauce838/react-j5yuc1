

import React, { useState, useEffect } from "react";
import PostResults from './components/PostResults'



const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm,setSearchTerm]=useState([]);

    const getData = () => {
    fetch('data.json')
    .then(response => {
      return response.json()
      //console.log(response)
    })
    .then(data => {
      setPosts(data)
      console.log(data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  const submitHandler = (event) => {
    event.preventDefault()
      {searchTerm ? searchTerm : console.log("none")}
    }
     
  return(
       <div className="">
                <input 
                  type="text" 
                  placeholder="Search Anything" 
                  name="query" 
                  onChange={e => setSearchTerm(e.target.value)}
                  className="search-input" 
                />
                <button 
                  onClick={submitHandler} 
                  type="submit" 
                  className="search-button"
                >
                  <i className="fas fa-search"></i>
              </button>
               {posts.map(posts => (
                <PostResults key={posts.id} posts={posts}/>
              ))}
       </div>
  )
}

export default Posts 