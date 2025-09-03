import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errValidation, setErrvalidation] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = () => setIsSignInForm(!isSignInForm);

  const handleFormButton = async () => {
    // Validate inputs
    const msg = checkValidate(
      email.current.value.trim(),
      password.current.value.trim()
    );
    setErrvalidation(msg);
    if (msg) return;

    try {
      if (!isSignInForm) {
        // Sign Up user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value.trim(),
          password.current.value.trim()
        );

        const user = userCredential.user;

        // Update profile with full name
        await updateProfile(user, {
          displayName: fullName.current.value.trim(),
        });

        // Save to Redux
        const { uid, email: userEmail, displayName } = user;
        dispatch(addUser({ uid, email: userEmail, displayName }));

        navigate("/browse");
      } else {
        // Sign In user
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value.trim(),
          password.current.value.trim()
        );

        const user = userCredential.user;

        // Save to Redux
        const { uid, email: userEmail, displayName } = user;
        dispatch(addUser({ uid, email: userEmail, displayName }));

        navigate("/browse");
      }
    } catch (error) {
      console.error("Auth Error:", error);
      setErrvalidation("Invalid User Details");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen absolute z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 p-12 my-36 mx-auto right-0 left-0 absolute bg-black/80 text-center rounded text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Get Started"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            className="p-4 my-3 w-full rounded bg-transparent border"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          type="text"
          className="p-4 my-3 w-full rounded bg-transparent border"
          placeholder="Email"
        />

        <input
          ref={password}
          type="password"
          className="p-4 my-3 w-full rounded bg-transparent border"
          placeholder="Password"
        />

        <p className="text-[#E50914] text-sm font-medium">{errValidation}</p>

        <button
          className="bg-[#E50914] text-white font-bold my-3 py-3 rounded w-full"
          onClick={handleFormButton}
        >
          {isSignInForm ? "Let's Go!" : "Sign Up"}
        </button>

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
