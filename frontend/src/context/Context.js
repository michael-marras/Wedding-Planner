import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const dummyUser = {
    id: 1,
    name: "Steve WillDoIt",
    email: "Steve@gmail.com",
    role: "user",
    token: "dummy-token",
    budget: 2000,
    spent: 500,
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(credentials) {
        setUser({ 
            name: credentials.name, 
            email: credentials.email,
            budget: credentials.budget,
            spent: credentials.spent
        })
    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside an AuthProvider');
    return ctx;
}
