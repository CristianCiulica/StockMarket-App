function App(){
  return(
      <main>
        <h1>Stock Market App</h1>

        <p>---Login Screen---</p>
        <hr className="horizontal-line"/>

        <h2>Sign in to your account</h2>

        <form>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="password">Parolă</label>
          <input id="password" name="password" type="password" />
        </form>
      </main>
  )
}

export default App;