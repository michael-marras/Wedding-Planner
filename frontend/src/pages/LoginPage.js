import Header from '../layouts/Header.js'

export default function LoginPage() {
    return (
        <>
            <Header/>
            <h1>Login</h1>
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
                    <input type="submit"></input>
                </div>
            </form>
        </>
    );
}