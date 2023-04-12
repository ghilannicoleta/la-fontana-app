// eslint-disable-next-line import/no-duplicates
import { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-phone-number-input/style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [value, setValue] = useState();

    return (
        <section>
            <div className="mx-auto flex flex-col items-center justify-center">
                <a
                    href="#!"
                    className="mb-8 mt-8 flex items-center text-3xl font-semibold"
                >
                    Create an account
                </a>

                <div className="relative mb-12 flex w-[500px] items-center justify-center overflow-hidden rounded-lg shadow before:absolute before:h-[180%] before:w-[50%] before:animate-move-circle before:bg-gradient-to-r before:from-bgSlate before:to-colorYellow before:content-[''] after:absolute after:inset-1 after:rounded-lg after:bg-stone after:content-[''] ">
                    <div className="relative z-20 w-full rounded-lg p-16">
                        <h1 className="mb-6 text-2xl font-bold italic tracking-wider">
                            Registration
                        </h1>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-lg border p-2.5 text-stone"
                                        placeholder="Name"
                                        required=""
                                    />
                                </label>
                            </div>

                            <div>
                                <p className="block text-sm font-medium">Phone</p>
                                <PhoneInput
                                    placeholder="+ Enter your phone number"
                                    defaultCountry="MD"
                                    value={value}
                                    name="tel"
                                    className="text-medium w-full rounded-lg border bg-bgWhite p-2.5 text-stone focus:outline-none"
                                    onChange={setValue}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Your email
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-lg border p-2.5 text-stone"
                                        placeholder="Email"
                                        required=""
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Password
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="block w-full rounded-lg border p-2.5 text-stone"
                                        required=""
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Confirm password
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="block w-full rounded-lg border p-2.5 text-stone"
                                        required=""
                                    />
                                </label>
                            </div>
                            <div>
                                <Link to="/login">
                                    <a
                                        href="#!"
                                        className="text-medium block text-sm text-center font-medium rounded-lg hover:underline text-bgSlate hover:text-colorYellow focus:outline-none"
                                    >
                                        Go back
                                    </a>
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-colorYellow px-5 py-2.5 text-center text-sm font-medium"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
