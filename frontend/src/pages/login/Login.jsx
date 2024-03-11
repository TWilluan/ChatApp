import { useState } from "react";
import { Link } from "react-router-dom"
import useLogIn from "../../hooks/useLogIn.js"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (<>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full h-full p-6 rounded-lg bg-zinc-900
                            hover:shadow-2xl transition ease-out
                            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                
                <h1 className="text-4xl font-semibold text-center text-zinc-900 mb-5">Login
                    <span className="text-sky-600"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                        
                        <input type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                        </label>
                    </div>

                    <div>
                        <label className="label p-2">

                        <input type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                    </div>

                    <Link to={'/signup'} className="fonts-sans text-zinc-900 text-base hover:underline hover:text-sky-600 mt-2 inline-block">
                        Don't have an account?
                    </Link>

                    <button className="btn btn-block btn-sm mt-2 test-base"
                        disabled={loading}>
                        {loading ? <span className="loading loading-spinner "></span> : "Log in"}
                    </button>
                </form>
            </div>
        </div>
    </>);
}

export default Login;