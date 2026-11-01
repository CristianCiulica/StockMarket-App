import { useState } from 'react'

function App(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
      <main>
        <h1>Stock Market App</h1>

        <p>---Login Screen---</p>
        <hr className="horizontal-line"/>

        <h2>Sign in to your account</h2>

        <form>
          <label htmlFor="email">Email</label>
          <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </main>
  )
}

export default App;