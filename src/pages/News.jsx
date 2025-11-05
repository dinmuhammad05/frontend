import React from 'react'
import { useNavigate } from 'react-router-dom';

const News = () => {
  const navigate = useNavigate()

  function handleClick (id) {
    navigate(`/news/${id}`)
  }

  return (
      <main className="h-[600px] bg-indigo-200 p-4">
       <h2>News</h2>
      </main>
  );
}

export default News