import { useState } from "react";
import useSignUp from "../../hooks/useSignUp.js"

import GenderCheckbox from "./genderCheckbox";
import { Link } from "react-router-dom";

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
            <div className="w-full p-6 rounded-lg bg-zinc-900
                            hover:shadow-2xl transition ease-out
                            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                
                <h1 className="text-4xl font-semibold text-center text-zinc-900 mb-5">
                    SignUp <span className="text-sky-600">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label className="label p-2">
                            <input type="text"
                                placeholder="Full Name"
                                className="w-full input input-bordered h-10"
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <input type="text"
                                placeholder="Username"
                                className="w-full input input-bordered h-10"
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <input type="password"
                                placeholder="Password"
                                className="w-full input input-bordered h-10"
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </label>

                        <label className="label p-2">
                            <input type="password"
                                placeholder="Confirm Password"
                                className="w-full input input-bordered h-10"
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </label>

                        <GenderCheckbox onCheckBoxChange={handleCheckBox} selectedGender={inputs.gender} />

                        <Link to='/login' className="text-zinc-900 font-sans text-base hover:underline hover:text-sky-600 mt-2 inline-block">
                            Already have an account?
                        </Link>

                        <button className="btn btn-block btn-sm mt-2 text-base"
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