import Header from '../layouts/Header.js'

export default function CreateAccountPage() {
    return (
        <>
            <Header/>
            <h1>Create Account</h1>
            <form>
                <div>
                    <label for="email">email:</label>
                    <input type="text" id="email"></input>
                </div>
                
                <br/>

                <div>
                    <label for="password">password:</label>
                    <input type="text" id="password"></input>
                </div>

                <br/>

                <div>
                    <label for="confirmPassword">confirm password:</label>
                    <input type="text" id="confirmPassword"></input>
                </div>

                <br/>

                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </>
    );
}