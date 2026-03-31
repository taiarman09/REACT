import React, { useState } from 'react'

function Hero() {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(data))
        alert("Data Save Ho Gaya ✅")

        setData({
            username: "",
            email: "",
            password: ""
        })
    }

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: "20px" }}>Register Form</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Enter your Username"
                    value={data.username}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={data.email}
                    onChange={handleChange}
                    style={styles.input}
                />

                <div style={{ position: "relative", width: "100%" }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your Password"
                        value={data.password}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={styles.showBtn}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>
                </div>

                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    form: {
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#667eea",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
    },
    showBtn: {
        position: "absolute",
        right: "10px",
        top: "10px",
        cursor: "pointer",
        fontSize: "12px",
        color: "#667eea"
    }
}

export default Hero