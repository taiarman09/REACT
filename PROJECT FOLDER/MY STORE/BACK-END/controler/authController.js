import User from '../model/User.js'


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body


        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields required"
            })
        }


        const existingUser = await User.findOne({ email })


        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const user = new User({ name, email, password })
        await user.save()

        res.json({ message: "Signup successful", user })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}





export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(404).json({
                status: false,
                message: "Fill all details"
            })
        }

        const user = await User.findOne({ email, password })

        if (!user) {
            return res.status(401).json({
                status: false,
                message: "Incorrect email or password"
            })
        }

        return res.status(200).json({
            status: true,
            message: "Login Successful",
            user
        })

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            status: false,
            message: "login failed!"
        })
    }
}


export const googlesign = async (req, res) => {
    try {
        const { name, email, photo } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email required"
            });
        }

        // check user exist (optional)
        const user = await User.findOne({ email })

        // simple response for now
        return res.status(200).json({
            status: true,
            message: "Google Signin Success",
            user: { name, email, photo }
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server error"
        });
    }
}