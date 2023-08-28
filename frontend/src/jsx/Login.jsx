const Login = () => {
    return ( 
        <>
            <div>
                <input type='text' id='user_name' />
                <input type='email' id='email' />
                <input type='password' id='pasrsword' />
                <button id='login' type="submit">
                    Login
                </button>
            </div>
        </>
     );
}
 
export default Login;