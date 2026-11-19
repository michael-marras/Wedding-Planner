import Header from '../components/Header.js'
import Dashboard from '../components/Dashboard.js';
import { AuthProvider } from '../context/Context.js';

export default function HomePage() {
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <Dashboard />
        </>
    );
}