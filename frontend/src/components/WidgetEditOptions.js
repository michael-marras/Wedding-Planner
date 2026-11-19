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