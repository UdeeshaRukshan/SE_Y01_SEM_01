import React, { useState, useEffect } from "react"
import api from "../../httpClient"

const Home = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    api.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">NASA API</h1>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header className="text-xl text-gray-700 mb-2">
            {apod.title} - <i className="text-gray-500">{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" className="w-full  rounded-md shadow-md" />
          <p className="mt-4 text-gray-600">{apod.explanation}</p>
          
        </article>
      )}
    </div>
  )
}

export default Home;
