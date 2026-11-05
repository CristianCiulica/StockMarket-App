import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [isLogin, setIsLogin] = useState(window.location.pathname === '/login')
    const [showPassword, setShowPassword] = useState(false)
    const [agreed, setAgreed] = useState(false)

    useEffect(() => {
        function handleHistoryChange() {
            setIsLogin(window.location.pathname === '/login')
            setShowPassword(false)
        }

        window.addEventListener('popstate', handleHistoryChange)
        return () => window.removeEventListener('popstate', handleHistoryChange)
    }, [])

    function switchAuthMode(event, nextIsLogin) {
        event.preventDefault()
        window.history.pushState({}, '', nextIsLogin ? '/login' : '/register')
        setIsLogin(nextIsLogin)
        setShowPassword(false)
        if (!nextIsLogin) setAgreed(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        //later
    }

    return (
        <main className="page">
            <section className="auth-card">
                <aside className="visual-panel">
                    <div className="market-indices" aria-label="Today's market indices">
                        <article className="index-card">
                            <div className="index-heading"><span>S&amp;P 500</span><span>Today</span></div>
                            <div className="index-data"><strong>5,842.31</strong><span>+1.2%</span></div>
                        </article>
                        <article className="index-card">
                            <div className="index-heading"><span>NASDAQ 100</span><span>Today</span></div>
                            <div className="index-data"><strong>20,341.72</strong><span>+2.5%</span></div>
                        </article>
                        <article className="index-card">
                            <div className="index-heading"><span>DAX</span><span>Today</span></div>
                            <div className="index-data"><strong>18,492.75</strong><span>+0.8%</span></div>
                        </article>
                        <article className="index-card">
                            <div className="index-heading"><span>FTSE 100</span><span>Today</span></div>
                            <div className="index-data"><strong>8,248.60</strong><span>+0.9%</span></div>
                        </article>
                    </div>

                </aside>

                <section className="form-panel">
                    <div className="form-content">
                        <h1>{isLogin ? 'Log in to your account' : 'Create an account'}</h1>
                        <p className="subtitle">
                            {isLogin ? (
                                <>Welcome back. Don't have an account? <a href="/register" onClick={(event) => switchAuthMode(event, false)}>Sign up</a></>
                            ) : (
                                <>Already have an account? <a href="/login" onClick={(event) => switchAuthMode(event, true)}>Log in</a></>
                            )}
                        </p>

                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="name-fields">
                                    <input aria-label="First name" placeholder="First name" autoComplete="given-name" required />
                                    <input aria-label="Last name" placeholder="Last name" autoComplete="family-name" required />
                                </div>
                            )}

                            <input
                                type="email"
                                aria-label="Email address"
                                placeholder="Email address"
                                autoComplete="email"
                                required
                            />

                            <div className="password-field">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    aria-label="Password"
                                    placeholder="Enter your password"
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                    required
                                />
                                <button
                                    className="show-password"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 5.2A10.8 10.8 0 0112 5c5 0 8.5 4.3 9.5 6-.4.7-1.3 2-2.7 3.2M6.2 6.3C4.3 7.4 3.1 9.2 2.5 11c1 1.7 4.5 6 9.5 6 1 0 1.9-.2 2.7-.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                                            <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {!isLogin && (
                                <label className="terms" htmlFor="terms-agreement">
                                    <input
                                        id="terms-agreement"
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(event) => setAgreed(event.target.checked)}
                                        required
                                    />
                                    <span>I agree to the <a href="/terms">Terms &amp; Conditions</a></span>
                                </label>
                            )}

                            <button className="create-button" type="submit" disabled={!isLogin && !agreed}>
                                {isLogin ? 'Log in' : 'Create account'}
                            </button>
                        </form>

                        <div className="divider"><span>{isLogin ? 'Or log in with' : 'Or register with'}</span></div>

                        <div className="social-buttons">
                            <button type="button">
                                <svg className="social-icon google-icon" viewBox="0 0 48 48" aria-hidden="true">
                                    <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 01-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15z" />
                                    <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0024 44z" />
                                    <path fill="#FBBC05" d="M12.6 27.6a12 12 0 010-7.2v-5.3H5.8a20 20 0 000 17.8l6.8-5.3z" />
                                    <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 005.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12z" />
                                </svg>
                                Google
                            </button>
                            <button type="button">
                                <svg className="social-icon apple-icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="currentColor" d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.5 2.3 2.6 2.2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1.1 2.5-2.2.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.3-.9-2.3-3.7zM14.4 6.4c.6-.7 1-1.6.9-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.9 2.5.9.1 1.8-.4 2.4-1.1z" />
                                </svg>
                                Apple
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default App
