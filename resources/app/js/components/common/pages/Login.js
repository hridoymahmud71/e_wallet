import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../../../redux/user/UserAction";
import { useSnackbar } from "react-simple-snackbar";
import AuthRepository from "./../../../repositories/AuthRepository";


function Login() {
    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user);

    const [openSnackbar, closeSnackbar] = useSnackbar();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {}, []);

    // handle form
    const handleOnChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetformData = () => {
        setformData({
            email: "",
            password: "",
        });
    };

    const handleFormtSubmit = (e) => {
        e.preventDefault();

        if (formSubmitted) {
            return;
        }

        setFormSubmitted(true);
        

        var post_body = {
            email: formData.email,
            password: formData.password,
        };

        AuthRepository.login(post_body)
            .then((response) => {
                if (response.data.result == false) {
                    openSnackbar(response.data.message, 2500);
                    setFormSubmitted(false);
                    return;
                }

                openSnackbar(response.data.message, 2500);
                setFormSubmitted(false);

                dispatch(setUser(response.data.user,response.data.token));


                
            })
            .catch((error) => {
                setFormSubmitted(false);
                if (error && error.response.data.message) {
                    openSnackbar(error.response.data.message, 2500);
                }

                if (error && error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty("email")) {
                        error.response.data.errors.email.map((item) => {
                            openSnackbar(item, 2500);
                        });
                    }
                    if (error.response.data.errors.hasOwnProperty("password")) {
                        error.response.data.errors.password.map((item) => {
                            openSnackbar(item, 2500);
                        });
                    }
                }
            })
            .then(function () {
                resetformData();
                setFormSubmitted(false);
            });

    };

    return (
        <>
            <div className="container mx-auto p-8 h-screen flex items-center justify-center">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        {window.app_settings.app_name}
                    </h1>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form
                                className=""
                                onSubmit={handleFormtSubmit}
                            >
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleOnChange}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">
                                        Password{" "}
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleOnChange}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
