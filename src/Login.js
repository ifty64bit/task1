import { useRef, useState, useEffect, useContext } from 'react'
import { UserContext } from './components/UserContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const userContext = useContext(UserContext);
  const nav=useNavigate();
  const [msg, setMsg] = useState("");
  const [uuid, setUuid] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const login = () => {
    const e = email.current.value;
    const p = password.current.value;
    if (!!e===false || !!p===false) 
    {
      setMsg("Enter Mail And Password");
      return;
    }
    else {
      setMsg("");
    }
    axios.post('https://devapi.dhakai.com/api/v2/login-buyer', {
      "auth": {
        "email": e,
        "deviceUuid": uuid
      },
      "password": p
    }).then(res => {
      if (res.data.statusCode === 400) {
        setMsg(res.data.message);
      }
      else {
        document.cookie = "refreshToken=" + res.data.result.refreshToken;
        userContext.updateUser(res.data.result.token);
        nav('/');
      }
    })
  }

  useEffect(() => {  
      axios.get('https://devapi.dhakai.com/api/v2/deviceuid').then((res) => {
        setUuid(res.data.result.deviceUuid);
    })
  },[])

  return (
    <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center bg-bg'>
      <h1 className='text-5xl'>Login</h1>
      <div className='flex flex-col items-center'><label className='text-xl my-2'>Email</label><input type="text" ref={email} className='h-10 px-4 py-2 rounded-full outline-none drop-shadow-md' placeholder='Email' /></div>
      <div className='flex flex-col items-center'><label className='text-xl my-2'>Password</label><input type="password" ref={password} className='h-10 px-4 py-2 rounded-full outline-none drop-shadow-md' /></div>
      <div>{ msg }</div>
      <button onClick={login} className='text-xl text-white bg-green hover:text-black hover:bg-green-light transition duration-100 hover:scale-125 px-4 py-2 rounded-full'>Login</button>
    </div>
  )
}

export default Login