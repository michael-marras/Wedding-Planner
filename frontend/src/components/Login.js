import { useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setError('Username and password are required');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        setLoading(true);

        const formDetails = new URLSearchParams();
        formDetails.append('username', username);
        formDetails.append('password', password);

        try {
            const response = await fetch('http://localhost:8000/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDetails,
            });

            setLoading(false);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                navigate('/protected');
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Authentication failed');
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            setError('An error occured. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <br />

            {error && <p>{error}</p>}

            <div>
                <input type="submit" value={loading ? 'Logging in ...' : 'Login'} disabled={loading} />
            </div> 
        </form>
    )
}