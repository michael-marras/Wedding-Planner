import { useState } from "react"
import { useAuth } from "../context/Context";
import { useNavigate } from 'react-router';

export function BudgetEditOptions() {
    const [budget, setBudget] = useState();
    const [spent, setSpent] = useState();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ budget: Number(budget), spent: Number(spent) });

        if (!user) {
            navigate("/login");
            console.log("not logged in");
            return;
        }

        try {
            const res = await fetch('http://localhost:8000/update-budget', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ budget: Number(budget), spent: Number(spent) }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(typeof data.detail === "string" ? data.detail : "Failed to update budget");
                return;
            }

            const updated = await res.json();
            login(updated); // keep context in sync with the database
            setError("");
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(err);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="budget">Budget</label>
                    <input
                        id="budget"
                        type="number"
                        min="0"
                        step="0.01"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="spent">Spent</label>
                    <input
                        id="spent"
                        type="number"
                        min="0"
                        step="0.01"
                        value={spent}
                        onChange={(e) => setSpent(e.target.value)}
                    />
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export function InviteListEditOptions() {
    const { updateInvites } = useAuth();
    const { user } = useAuth();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [newInvite, setNewInvite] = useState({
        name: "",
        email: "",
        phone: "",
        plusOne: "",
        plusOneEmail: "",
        plusOnePhone: "",
        rsvp: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInvite({ ...newInvite, [name]: value });
    };

    const addInvite = async () => {
        if (!user) {
            navigate("/login");
            return;
        }
    
        const payload = {
            name: newInvite.name.trim(),
            email: newInvite.email || null,
            phone: newInvite.phone || null,
            plus_one: newInvite.plusOne || null,
            plus_one_email: newInvite.plusOneEmail || null,
            plus_one_phone: newInvite.plusOnePhone || null,
            rsvp: newInvite.rsvp || "Pending",
        };
    
        try {
            const res = await fetch("http://localhost:8000/add-invite", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(payload),
            });
    
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(typeof data.detail === "string" ? data.detail : "Failed to add invite");
                return;
            }
    
            const created = await res.json();
            console.log(created)
            console.log(payload)
            updateInvites(payload);
            setError("");
            setNewInvite({
                name: "",
                email: "",
                phone: "",
                plusOne: "",
                plusOneEmail: "",
                plusOnePhone: "",
                rsvp: "Pending",
            });
        } catch (err) {
            console.error(err);
            setError("Could not reach the server");
        }
    };

    return (
        <div>
            <h3>Add New Invite</h3>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={newInvite.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={newInvite.email}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={newInvite.phone}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="plusOne"
                placeholder="Plus One"
                value={newInvite.plusOne}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="plusOneEmail"
                placeholder="Plus One Email"
                value={newInvite.plusOneEmail}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="plusOnePhone"
                placeholder="Plus One Phone Number"
                value={newInvite.plusOnePhone}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="rsvp"
                placeholder="RSVP"
                value={newInvite.rsvp}
                onChange={handleInputChange}
            />
            <button onClick={addInvite}>Add Invite</button>
        </div>
    )
}