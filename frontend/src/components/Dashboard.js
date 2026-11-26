import { useState } from "react";

export function Widget({ title, content, EditOptions, dimensions }) {
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
                    width: dimensions.width,
                }}
            >
                <h1>{title}</h1>
                {content}
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
                    width: dimensions.width,
                }}
            >
                <h1>{title}</h1>
                {content}
                <button onClick={() => handleClick(editMode, setEditMode)}>Edit</button>
                <h1>EditMode</h1>
                {EditOptions && <EditOptions />}
            </section>
        )
    }
}

export default function Dashboard(props) {
    return (
        <section style={{
            border: "2px solid black", // Add a black border
            borderRadius: "8px", // Optional: Add rounded corners
            padding: "16px", // Optional: Add padding inside the widget
            margin: "16px 0",
            width: "1600px",
            height: "1600px",
        }}>
            <h1>Dashboard</h1>
            {props.children}
        </section>
    );
}
