import Header from '../components/Header.js'
import Dashboard from '../components/Dashboard.js';
import { Widget } from '../components/Dashboard.js';
import BudgetWheel from '../components/BudgetWheel.js';
import { dummyUser, useAuth } from '../context/Context.js';
import { BudgetEditOptions, InviteListEditOptions } from '../components/WidgetEditOptions.js';
import InviteList from '../components/InviteList.js';

export default function HomePage() {
    const { user } = useAuth();

    const budgetDimensions = { height: 600, width: 300 };
    const rsvpTableDimensions = { height: 600, width: 900 };

    console.log(user);
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <Dashboard>
            <Widget
                title="budget"
                content={<BudgetWheel total={user?.budget ?? dummyUser.budget} spent={user?.spent ?? dummyUser.spent} />}
                EditOptions={BudgetEditOptions}
                dimensions={budgetDimensions}
            />
            <Widget
                title="invite list"
                content={<InviteList invites={user?.invites ?? dummyUser.invites}/>}
                EditOptions={InviteListEditOptions}
                dimensions={rsvpTableDimensions}
            />
            </Dashboard>
        </>
    );
}