/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const LoginForm = ({ linkToSignup, loginHandler, setLoginPassword, loginEmail, setLoginEmail, loginPassword }) => {
    return (
        <div className="form-box login">
            <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
                <h2>LOGIN</h2>
                <form onSubmit={loginHandler}>
                    <div className="input-field">
                        <input type="text" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <Link to={'/change-password'} className="forgot-pass-link">Forgot password?</Link>
                    <button type="submit">Log In</button>
                </form>
                <div className="bottom-link">
                    Don't have an account?
                    <button onClick={linkToSignup} className='signup-link'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;