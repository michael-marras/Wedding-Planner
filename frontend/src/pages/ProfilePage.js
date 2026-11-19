import Header from '../components/Header.js'
import { useAuth } from '../context/Context.js';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function ProfilePage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate]);

    return (
        <>
            <Header/>
            <h1>Profile</h1>
        </>
    );
}