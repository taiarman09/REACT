import React from 'react'

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" && password === "") {
            alert("Please Fill All details!")
            return;
        }

        const user = JSON.parse(localStorage.getItem("user")) || []

        const check = user.find(u => u.email === email && u.password === password)

        if (check) {
            alert("Incorrect email and password")
        }
        else {
            
            alert("Login Succesfully!")
            localStorage.setItem("isLogin", "true")
        }
    }

    return (
        <div className='border border-black w-full h-[90vh] flex justify-center items-center'>
            <div className='border border-black w-[300px] h-auto rounded-lg text-center py-3'>
                <h1 className='text-[25px]'>Login</h1>
                <form action="" onSubmit={handleSubmit} className='flex flex-col items-center gap-5 mt-10 justify-around'>
                    <input type="email" id='email' placeholder='Enter Email' className='border border-black w-[90%] h-[40px] rounded-sm pl-2' />
                    <input type="password" id='password' placeholder='Enter Password' className='border border-black w-[90%] h-[40px] rounded-sm pl-2' />
                    <button type='submit' className=' border border-black bg-blue-700 text-white w-[90%] h-[50px] rounded-[15px] text-[18px]'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
