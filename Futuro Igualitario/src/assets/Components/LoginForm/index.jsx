    import React from 'react';
    import { CiLock } from 'react-icons/ci';
    import { SlUserFemale } from 'react-icons/sl';
    import '../LoginForm/LoginForm.css'

    function LoginForm() {
        return (
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="UserName" required />
                        <SlUserFemale className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <CiLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="link">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" className="link">Register</a></p>
                    </div>
                </form>
            </div>
        );
    }

    export default LoginForm;
