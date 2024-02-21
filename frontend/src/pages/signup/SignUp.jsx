import { useState } from "react";
import useSignUp from "../../hooks/useSignUp.js"

import GenderCheckbox from "./genderCheckbox";
import { Link } from "react-router-dom"

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignUp();

    const handleCheckBox = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    return (<>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3x1 font-semibold text-center text-gray-300">
                    SignUp <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                            <input type="text"
                                placeholder="Full Name"
                                className="w-full input input-bordered h-10"
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                            <input type="text"
                                placeholder="Username"
                                className="w-full input input-bordered h-10"
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                            <input type="password"
                                placeholder="Password"
                                className="w-full input input-bordered h-10"
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                            <input type="password"
                                placeholder="Confirm Password"
                                className="w-full input input-bordered h-10"
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </label>

                        <GenderCheckbox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender} />

                        <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            Already have an account?
                        </Link>

                        <button className="btn btn-block btn-sm mt-2"
                            disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Sign up"}
                        </button>
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