import GenderCheckbox from "./genderCheckbox";


const SignUp = () => {
    return (<>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3x1 font-semibold text-center text-gray-300">
                    SignUp <span className="text-blue-500">ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                            <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                            <input type="text" placeholder="Password" className="w-full input input-bordered h-10" />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                            <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                        </label>

                        <GenderCheckbox />

                        <a to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            Already have an account?
                        </a>

                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default SignUp;



// const SignUp = () => {
//     return (<>
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3x1 font-semibold text-center text-gray-300">
//                     SignUp <span className="text-blue-500">ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                             <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
//                         </label>

//                         <label className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                             <input type="text" placeholder="Password" className="w-full input input-bordered h-10" />
//                         </label>

//                         <label className="label p-2">
//                             <span className="text-base label-text">Confirm Password</span>
//                             <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//                         </label>

//                         <GenderCheckbox />

//                         <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                             Already have an account?
//                         </a>

//                         <button className="btn btn-block btn-sm mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </>);
// }

// export default SignUp;