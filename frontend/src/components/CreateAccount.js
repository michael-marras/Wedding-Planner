import { useNavigate } from "react-router";
import { useState } from "react";

export default function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setError('Username and password are required');
            return false;
        } else if (!confPassword) {
            setError('Please confirm password');
            return false;
        } else if (confPassword !== password) {
            setError('Password confirmation does not match');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        const formDetails = JSON.stringify({ username, password })

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formDetails,
            });

            setLoading(false);

            if (response.ok) {
                navigate('/login');
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

            <div>
                <label htmlFor="confPassword">confirm password:</label>
                <input
                    type="password"
                    id="confPassword"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                />
            </div>

            <br />

            {error && <p>{error}</p>}

            <div>
                <input 
                    type="submit" 
                    value={loading ? 'Creating account ...' : 'Create account'} 
                    disabled={loading}
                />
            </div> 
        </form>
    );
}