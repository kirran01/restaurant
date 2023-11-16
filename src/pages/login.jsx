import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [loginInput, setLoginInput] = useState({
        loginPassword: '',
        loginName: ''
    })
    const handleLoginInput = (e) => {
        setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
    }
    const login = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                username: loginInput.loginName,
                password: loginInput.loginPassword
            });
            storeToken(response.data.authToken);
            authenticateUser();
            navigate('/');
        } catch (err) {
            console.log(err);
            let theError = err.response?.data?.message;
            if (theError) {
                setErrorMessage(theError);
            }
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className='h-screen flex flex-col justify-evenly content-center items-center bg-cyan-50'>
            {isLoading &&
                <div>
                    <p>Loading...</p>
                </div>}
            {errorMessage !== '' && <div>
                <p>{errorMessage}</p>
            </div>}
            <div className='bg-white flex flex-col items-center rounded-lg drop-shadow-lg'>
                <p className='m-5 text-lg'>Log In</p>
                <form className='m-5 flex flex-col items-center'>
                    <label className='m-2'>Username</label>
                    <input className='border-gray border-2 rounded-md m-2' onChange={handleLoginInput} value={loginInput.loginName} name="loginName" type="text" />
                    <label className='m-2'>Password</label>
                    <input className='border-gray border-2 rounded-md m-2' onChange={handleLoginInput} value={loginInput.loginPassword} name="loginPassword" type="password" />
                    <button className='bg-cyan-800 hover:bg-cyan-700 p-2 m-5 text-white rounded-md' onClick={login} >Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
