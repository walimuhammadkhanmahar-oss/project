import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isAutoCounting, setIsAutoCounting] = useState(false)

  useEffect(() => {
    if (!isAutoCounting) return undefined

    const intervalId = window.setInterval(() => {
      setCount((currentCount) => currentCount + 1)
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [isAutoCounting])

  function resetCounter() {
    setCount(0)
    setIsAutoCounting(false)
  }

  return (
    <main className="counter">
      <section className="box" aria-labelledby="main-title">
        <h1 id="main-title">Main Box</h1>
        <p className="count" aria-live="polite">{count}</p>
      </section>

      <section className="box controls" aria-labelledby="child-title">
        <h2 id="child-title">Child Box</h2>
        <div className="buttons">
          <button type="button" onClick={() => setCount((value) => value + 1)}>increase</button>
          <button type="button" onClick={() => setCount((value) => value - 1)}>decrease</button>
          <button type="button" onClick={resetCounter}>Reset</button>
        </div>
        <button
          className="auto-button"
          type="button"
          onClick={() => setIsAutoCounting((value) => !value)}
          aria-pressed={isAutoCounting}
        >
          {isAutoCounting ? 'Stop counting' : 'Start counting'}
        </button>
      </section>
    </main>
  )
}

export default App
