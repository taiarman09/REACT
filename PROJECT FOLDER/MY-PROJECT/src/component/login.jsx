import React, { useState } from "react";
import axios from "axios";

export default function login() {

    const [isSignup, setIsSignup] = useState(false);

    const API = "http://localhost:5000/api/auth";

    // ===== LOGIN =====
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email.value;
            const password = e.target.password.value;

            const res = await axios.post(`${API}/login`, {
                email,
                password
            });

            alert(res.data.msg || "Login Success");

        } catch (error) {
            alert(error.response?.data?.msg || "Login Failed");
        }
    };

    // ===== REGISTER =====
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const email = e.target.email.value;
            const password = e.target.password.value;

            const res = await axios.post(`${API}/register`, {
                email,
                password
            });

            alert(res.data.msg || "Registered Successfully");
            setIsSignup(false);

        } catch (error) {
            alert(error.response?.data?.msg || "Register Failed");
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    {isSignup ? "Create Account" : "Welcome back"}
                </h2>

                {/* ===== FORM ===== */}
                <form onSubmit={isSignup ? handleSignup : handleLogin}>

                    <input
                        name="email"
                        className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <input
                        name="password"
                        className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />

                    {!isSignup && (
                        <div className="text-right py-2">
                            <a className="text-blue-600 underline" href="#">
                                Forgot Password
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full mb-1 mt-3 bg-indigo-500 py-2.5 rounded-full text-white"
                    >
                        {isSignup ? "Register" : "Log in"}
                    </button>
                </form>

                {/* ===== TOGGLE LOGIN / SIGNUP ===== */}
                <p className="text-center mt-4">
                    {isSignup ? "Already have account?" : "Don’t have an account?"}
                    <span
                        onClick={() => setIsSignup(!isSignup)}
                        className="text-blue-500 underline cursor-pointer ml-2"
                    >
                        {isSignup ? "Login" : "Signup"}
                    </span>
                </p>

                {/* ===== APPLE LOGIN ===== */}
                <button
                    type="button"
                    className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
                >
                    <img
                        className="h-4 w-4"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
                        alt=""
                    />
                    Log in with Apple
                </button>

                {/* ===== GOOGLE LOGIN ===== */}
                <button
                    type="button"
                    className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
                >
                    <img
                        className="h-4 w-4"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
                        alt=""
                    />
                    Log in with Google
                </button>

            </div>
        </div>
    );
}
