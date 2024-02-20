import {Link} from "react-router-dom"

const Login = () => {
    return (<>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
                <h1 className="text-3x1 font-semibold text-center text-gray-300">Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">UserName</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"></input>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
                    </div>

                    <Link to={'/signup'} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Don't have an account?
                    </Link>

                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </form>
            </div>
        </div>
    </>);
}

export default Login;

// const Login = () => {
//     return (<>
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="h-full w-full bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
//                 <h1 className="text-3x1 font-semibold text-center text-gray-300">Login
//                     <span className="text-blue-500"> ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">UserName</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"></input>
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
//                     </div>

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Don't have an account?
//                     </a>

//                     <button className="btn btn-block btn-sm mt-2">Login</button>
//                 </form>
//             </div>
//         </div>
//     </>);
// }

// export default Login;