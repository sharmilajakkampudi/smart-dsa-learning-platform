import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8080";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSignup(event) {
        event.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Registration failed"
                );
            }

            setMessage(
                data.message || "Account created successfully!"
            );
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage(
                error.message || "Could not connect to the server"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="signup-container">
            <form
                className="signup-form"
                onSubmit={handleSignup}
            >
                <h1>Create Account</h1>
                <p>Join Smart DSA Learning Platform</p>

                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    placeholder="At least 8 characters"
                    minLength={8}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading
                        ? "Creating Account..."
                        : "Sign Up"}
                </button>

                {message && (
                    <p className="signup-message">
                        {message}
                    </p>
                )}

                <p className="login-link">
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
