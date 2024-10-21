import { useState } from 'react'
import './About.scss'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>About</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Home
