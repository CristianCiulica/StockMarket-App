import { useState } from 'react'
import { Glass } from 'glisse'
import 'glisse/styles.css'
import './App.css'

const indices = [
    { name: 'S&P 500', value: '5,842.31', change: '+1.2%' },
    { name: 'NASDAQ 100', value: '20,341.72', change: '+2.5%' },
    { name: 'AAPL (Apple)', value: '232.78', change: '+0.8%' },
    { name: 'MSFT (Microsoft)', value: '430.29', change: '+0.9%' },
]

function App() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [formNotice, setFormNotice] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const nextErrors = {}

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            nextErrors.email = 'Enter a valid email address.'
        }
        if (!password) {
            nextErrors.password = 'Enter your password.'
        }

        setErrors(nextErrors)
        setFormNotice('')
    }

    function toggleAuthMode() {
        setIsLogin((current) => !current)
        setErrors({})
        setFormNotice('')
    }

    return (
        <main className="auth-card" data-theme="dark">
            <aside className="visual-panel" data-theme="dark">
                <picture className="visual-backdrop" data-glisse-backdrop>
                    <source media="(max-width: 760px)" srcSet={new URL('./assets/logo-smaller.png', import.meta.url).href} />
                    <img src={new URL('./assets/market-hero-seamless.png', import.meta.url).href} alt="" />
                </picture>
            </aside>

            <div className="market-indices" aria-label="Market indices">
                {indices.map((index) => (
                    <Glass key={index.name} className="index-card" role="group" aria-label={`${index.name}: ${index.value}, ${index.change} today`}>
                        <div className="index-heading">
                            <span>{index.name}</span>
                            <span>Today</span>
                        </div>
                        <div className="index-data">
                            <strong>{index.value}</strong>
                            <span>{index.change}</span>
                        </div>
                    </Glass>
                ))}
            </div>

            <section className="form-panel">
                <div className="form-content">
                    <h1>{isLogin ? 'Log in to your account' : 'Create an account'}</h1>
                    <p className="subtitle">
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button type="button" className="link-button" onClick={toggleAuthMode}>
                            {isLogin ? 'Sign up' : 'Log in'}
                        </button>
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="field-group">
                            <label htmlFor="auth-email">Email address</label>
                            <input
                                id="auth-email"
                                name="email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                autoCapitalize="none"
                                spellCheck="false"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                    setErrors((current) => ({ ...current, email: '' }))
                                }}
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
                        </div>
                        <div className="field-group">
                            <label htmlFor="auth-password">Password</label>
                            <div className={`password-field ${errors.password ? 'has-error' : ''}`}>
                                <input
                                    id="auth-password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                        setErrors((current) => ({ ...current, password: '' }))
                                    }}
                                    aria-invalid={Boolean(errors.password)}
                                    aria-describedby={errors.password ? 'password-error' : undefined}
                                />
                                <button
                                    className="password-toggle"
                                    type="button"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    onClick={() => setShowPassword((current) => !current)}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.2 9.5 6-.4.8-1.4 2.2-3.3 3.6M6.2 6.2C3.9 7.6 2.5 9.7 2 11c1 1.8 4.5 6 10 6 1 0 1.8-.2 2.6-.4"/></svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && <span id="password-error" className="field-error">{errors.password}</span>}
                            {isLogin && (
                                <button
                                    type="button"
                                    className="forgot-password link-button"
                                    onClick={() => setFormNotice('Password recovery is not available yet.')}
                                >
                                    Forgot password?
                                </button>
                            )}
                        </div>
                        <button type="submit" className="submit-button">
                            {isLogin ? 'Log in' : 'Create account'}
                        </button>
                    </form>

                    {formNotice && <p className="form-notice" role="status">{formNotice}</p>}

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
                    <footer className="auth-footer">
                        <button type="button" onClick={() => setFormNotice('Terms and conditions are not available yet.')}>Terms &amp; Conditions</button>
                        <span aria-hidden="true">·</span>
                        <button type="button" onClick={() => setFormNotice('The privacy policy is not available yet.')}>Privacy</button>
                    </footer>
                </div>
            </section>
        </main>
    )
}

export default App
