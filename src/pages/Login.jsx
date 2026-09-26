import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const VALID_EMAIL = "hello@gmail.com";
const VALID_PASSWORD = "waniairtaza1722";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === VALID_EMAIL &&
        password === VALID_PASSWORD
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", VALID_EMAIL);

        navigate("/", { replace: true });
      } else {
        setError("Invalid email or password.");
      }

      setLoading(false);
    }, 500);
  };

  const handleGuest = () => {
    localStorage.setItem("isGuest", "true");
    navigate("/", { replace: true });
  };

  return (
    <main className="login-page">
      <section className="login-card">

        {/* Brand */}
    

        {/* Heading */}
        <div className="login-header">
          <p className="eyebrow">WELCOME BACK</p>

          <h1>Sign in to your account</h1>

          <p className="subtitle">
            Enter your details below to continue shopping.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">

          {/* Email */}
          <div className="field">
            <label htmlFor="email">
              Email address
            </label>

            <div className="input-box">
              <span className="input-icon">✉</span>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="field">

            <div className="password-heading">
              <label htmlFor="password">
                Password
              </label>

              <button
                type="button"
                className="forgot-btn"
                onClick={() => alert("Password recovery will be available soon.")}
              >
                Forgot password?
              </button>
            </div>

            <div className="input-box">
              <span className="input-icon">●</span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="error-message">
              <span>!</span>
              {error}
            </div>
          )}

          {/* Login */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}

            {!loading && <span>→</span>}
          </button>

        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Guest */}
        <button
          type="button"
          className="guest-btn"
          onClick={handleGuest}
        >
          Continue as Guest
        </button>

        {/* Create account */}
        <p className="account-text">
          Don't have an account?

          <button
            type="button"
            onClick={() => alert("Account creation will be available soon.")}
          >
            Create account
          </button>
        </p>

        {/* Security */}
        <p className="secure-text">
          Your information is securely protected.
        </p>

      </section>
    </main>
  );
}

export default Login;