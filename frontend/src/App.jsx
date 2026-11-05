import { useState } from 'react'
import './App.css'

const indices = [
    { name: 'S&P 500', value: '5,842.31', change: '+1.2%' },
    { name: 'NASDAQ 100', value: '20,341.72', change: '+2.5%' },
    { name: 'DAX', value: '18,492.75', change: '+0.8%' },
    { name: 'FTSE 100', value: '8,248.60', change: '+0.9%' },
]

function App() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        //later
    }

    return (
        <main className="auth-card">
            <aside className="visual-panel">
                <div className="market-indices">
                    {indices.map((index) => (
                        <article key={index.name} className="index-card">
                            <div className="index-heading">
                                <span>{index.name}</span>
                                <span>Today</span>
                            </div>
                            <div className="index-data">
                                <strong>{index.value}</strong>
                                <span>{index.change}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </aside>

            <section className="form-panel">
                <div className="form-content">
                    <h1>{isLogin ? 'Log in to your account' : 'Create an account'}</h1>
                    <p className="subtitle">
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button type="button" className="link-button" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Sign up' : 'Log in'}
                        </button>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <button type="submit" className="submit-button">
                            {isLogin ? 'Log in' : 'Create account'}
                        </button>
                    </form>

                    <div className="divider"><span>{isLogin ? 'Or log in with' : 'Or register with'}</span></div>

                    <div className="social-buttons">
                        <button type="button">
                            <svg className="social-icon" viewBox="0 0 48 48" aria-hidden="true">
                                <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 01-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15z" />
                                <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0024 44z" />
                                <path fill="#FBBC05" d="M12.6 27.6a12 12 0 010-7.2v-5.3H5.8a20 20 0 000 17.8l6.8-5.3z" />
                                <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 005.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12z" />
                            </svg>
                            Google
                        </button>
                        <button type="button">
                            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill="currentColor" d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.5 2.3 2.6 2.2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1.1 2.5-2.2.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.3-.9-2.3-3.7zM14.4 6.4c.6-.7 1-1.6.9-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.9 2.5.9.1 1.8-.4 2.4-1.1z" />
                            </svg>
                            Apple
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App
