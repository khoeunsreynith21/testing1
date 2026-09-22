import { FormEvent, useState } from 'react'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Thanks. Your sign-in form is ready to connect.')
  }

  return (
    <main className="shell">
      <section className="intro" aria-label="Welcome">
        <div>
          <div className="mark" aria-hidden="true">+</div>
          <h1>Welcome back.</h1>
          <p>Sign in to continue to your personal workspace.</p>
        </div>
        <p className="note">A quiet place to get things done</p>
      </section>

      <section className="form-panel">
        <form onSubmit={handleSubmit}>
          <p className="eyebrow">Your account</p>
          <h2>Sign in</h2>

          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
              <button
                className="toggle"
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="options">
            <label className="remember"><input type="checkbox" name="remember" /> Remember me</label>
            <a href="#forgot-password" onClick={(event) => event.preventDefault()}>Forgot password?</a>
          </div>

          <button className="submit" type="submit">Sign in</button>
          <p className="message" role="status" aria-live="polite">{message}</p>
        </form>
      </section>
    </main>
  )
}

export default App
