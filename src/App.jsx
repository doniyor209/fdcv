import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const getRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => setUser(data.results[0]))
  }

  useEffect(() => {
    getRandomUser()
  }, [])

  return (
    <div className='body'>
      <div className="container">
        <div className="big-box">
          <h1>Random User Generator</h1>
          <div className="border">
            {user && <img src={user.picture.large} alt="user" />}
          </div>
          {user && (
            <>
              <h2>{user.name.first} {user.name.last}</h2>
              <h3>{user.email}</h3>
              <h4>{user.location.city}, {user.location.country}</h4>
            </>
          )}
          <button className='btn' onClick={getRandomUser}>Next User</button>
        </div>
      </div>
    </div>
  )
}

export default App
