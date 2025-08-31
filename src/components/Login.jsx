import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errValidation, setErrvalidation] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);


  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormButton = () => {
    // Validate the form data

    const msg = checkValidate(email.current.value, password.current.value);
    setErrvalidation(msg);

  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen absolute z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 p-12 my-36 mx-auto right-0 left-0 absolute bg-black/80 text-center rounded text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Get Started"}
        </h1>

        {/* Full Name on Sign Up */}
        {!isSignInForm && (
          <input
          ref={fullName}
            type="text"
            className="p-4 my-3 w-full rounded bg-transparent border"
            placeholder="Full Name"
          />
        )}

        {/* Email or Mobile Number */}
        <input
          ref={email}
          type="text"
          className="p-4 my-3 w-full rounded bg-transparent border"
          placeholder="Email or Mobile Number"
        />

        {/* password */}
        <input
          ref={password}
          type="password"
          className="p-4 my-3 w-full rounded bg-transparent border"
          placeholder="Password"
        />

        {/* validation error */}
        <p className="text-[#E50914] text-sm font-medium">{errValidation}</p>

        {/* Sign In / Up */}
        <button
          className="bg-[#E50914] text-white font-bold my-3 py-3 rounded w-full"
          onClick={handleFormButton}
        >
          {isSignInForm ? "Let's Go!" : "Sign Up"}
        </button>

        {/* New User to Sign Up */}
        <p
          className="py-3 cursor-pointer hover:text-gray-300 hover:font-light transition"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now!"
            : "Already Registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
