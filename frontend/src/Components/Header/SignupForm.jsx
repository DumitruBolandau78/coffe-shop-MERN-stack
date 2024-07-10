import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SignupForm = ({ linkToLogin }) => {
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const signupHandler = async e => {
        e.preventDefault();
    
        await fetch('http://localhost:5500/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: signupEmail, password: signupPassword
          })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
      }

    return (
        <div className="form-box signup">
            <div className="form-details">
                <h2>Create Account</h2>
                <p>To become a part of our community, please sign up using your personal information.</p>
            </div>
            <div className="form-content">
                <h2>SIGNUP</h2>
                <form onSubmit={signupHandler}>
                    <div className="input-field">
                        <input type="text" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                        <label>Create password</label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="bottom-link">
                    Already have an account?
                    <button onClick={linkToLogin} className='login-link'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignupForm