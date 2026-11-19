import BudgetWheel from "./BudgetWheel"
import { useAuth } from "../context/Context"
import { useState } from "react";
import { BudgetEditOptions } from "./WidgetEditOptions";

function Widget({ title, visual, EditOptions }) {
    const [editMode, setEditMode] = useState(false);

    function handleClick(editMode, setEditMode) {
        setEditMode(!editMode);
    }

    if (!editMode) {
        return (
            <section
                style={{
                    border: "2px solid black", // Add a black border
                    borderRadius: "8px", // Optional: Add rounded corners
                    padding: "16px", // Optional: Add padding inside the widget
                    margin: "16px 0",
                    width: "300px",
                }}
            >
                <h1>{title}</h1>
                {visual}
                <button onClick={() => handleClick(editMode, setEditMode)}>Edit</button>
            </section>
        )
    } else {
        return (
            <section
                style={{
                    border: "2px solid black", // Add a black border
                    borderRadius: "8px", // Optional: Add rounded corners
                    padding: "16px", // Optional: Add padding inside the widget
                    margin: "16px 0",
                    width: "300px",
                }}
            >
                <h1>{title}</h1>
                {visual}
                <button onClick={() => handleClick(editMode, setEditMode)}>Edit</button>
                <h1>EditMode</h1>
                {EditOptions && <EditOptions />}
            </section>
        )
    }
}

export default function Dashboard() {
    const { user } = useAuth();
    console.log("Dashboard user:", JSON.stringify(user));
    return (
        <>
            <h1>Dashboard</h1>
            <Widget
                title="budget"
                visual={<BudgetWheel total={user?.budget ?? 2000} spent={user?.spent ?? 400} />}
                EditOptions={BudgetEditOptions}
            />
        </>
    );
}
