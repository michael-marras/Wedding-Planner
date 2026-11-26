import { useState } from "react";
import { useAuth } from "../context/Context";

function InviteListItem({ invite }) {
    return (
        <tr>
            <td>{invite.name}</td>
            <td>{invite.email}</td>
            <td>{invite.phone}</td>
            <td>{invite.plusOne}</td>
            <td>{invite.plusOneEmail}</td>
            <td>{invite.plusOnePhone}</td>
            <td>{invite.rsvp}</td>
        </tr>
    );
}

export default function InviteList({ invites }) {
    return (
        <div>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Plus One</th>
                        <th>Plus One Email</th>
                        <th>Plus One Phone Number</th>
                        <th>RSVP</th>
                    </tr>
                </thead>
                <tbody>
                    {invites.map((invite, index) => (
                        <InviteListItem key={index} invite={invite} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}