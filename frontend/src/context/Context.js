import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const dummyInvites = [
    { name: "Avery Nakamura", email: "avery.nakamura@example.com", phone: "(415) 555-0101", plusOne: "Jordan Lee", plusOneEmail: "jordan.lee@example.com", plusOnePhone: "(415) 555-0102", rsvp: "Accepted" },
    { name: "Priya Raman", email: "priya.raman@example.com", phone: "(650) 555-0114", plusOne: "", plusOneEmail: "", plusOnePhone: "", rsvp: "Accepted" },
    { name: "Marcus Bellamy", email: "marcus.bellamy@example.com", phone: "(707) 555-0127", plusOne: "Tasha Bellamy", plusOneEmail: "tasha.bellamy@example.com", plusOnePhone: "(707) 555-0128", rsvp: "Pending" },
    { name: "Elena Vasquez", email: "elena.vasquez@example.com", phone: "(858) 555-0133", plusOne: "Diego Vasquez", plusOneEmail: "diego.vasquez@example.com", plusOnePhone: "(858) 555-0134", rsvp: "Declined" },
    { name: "Tom Whitfield", email: "tom.whitfield@example.com", phone: "(619) 555-0145", plusOne: "", plusOneEmail: "", plusOnePhone: "", rsvp: "Pending" },
    { name: "Sofia Moretti", email: "sofia.moretti@example.com", phone: "(310) 555-0156", plusOne: "Luca Moretti", plusOneEmail: "luca.moretti@example.com", plusOnePhone: "(310) 555-0157", rsvp: "Accepted" },
    { name: "Daniel Okafor", email: "daniel.okafor@example.com", phone: "(408) 555-0168", plusOne: "Amara Okafor", plusOneEmail: "amara.okafor@example.com", plusOnePhone: "(408) 555-0169", rsvp: "Accepted" },
    { name: "Hannah Brooks", email: "hannah.brooks@example.com", phone: "(916) 555-0179", plusOne: "", plusOneEmail: "", plusOnePhone: "", rsvp: "Declined" },
    { name: "Kenji Watanabe", email: "kenji.watanabe@example.com", phone: "(510) 555-0182", plusOne: "Mei Watanabe", plusOneEmail: "mei.watanabe@example.com", plusOnePhone: "(510) 555-0183", rsvp: "Pending" },
    { name: "Olivia Grant", email: "olivia.grant@example.com", phone: "(925) 555-0194", plusOne: "Ben Grant", plusOneEmail: "ben.grant@example.com", plusOnePhone: "(925) 555-0195", rsvp: "Accepted" },
];

export const dummyUser = {
    id: 1,
    username: "Steve WillDoIt",
    email: "Steve@gmail.com",
    role: "user",
    token: "dummy-token",
    budget: 2000,
    spent: 499,
    invites: dummyInvites
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(credentials) {
        setUser({ 
            username: credentials.username, 
            email: credentials.email,
            budget: credentials.budget,
            spent: credentials.spent,
            invites: credentials.invites,
        })
    }

    function logout() {
        setUser(null);
    }

    function updateInvites(newInvite) {
        setUser((prevUser) => ({
            ...prevUser,
            invites: [...prevUser.invites, newInvite], // Append the new invite
        }));
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, updateInvites }}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside an AuthProvider');
    return ctx;
}
