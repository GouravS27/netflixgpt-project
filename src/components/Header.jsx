import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_LOGO, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  // console.log(user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Component Unmounting (CleanUp)
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between absolute bg-black-400 w-screen px-8 bg-gradient-to-b from-black z-10">
      <img className="w-44 mt-2" src={NETFLIX_LOGO} alt="Netflix_LOGO" />
      {user && (
        <div className="flex items-center justify-center">
          <img className="w-12 h-12 mx-3 rounded-sm" src={AVATAR_LOGO} alt="" />
          <div className="flex flex-col items-center justify-center">
            <div className="font-light italic text-white">
              {user.displayName}
            </div>
            <button
              className="font-bold text-white hover:text-gray-300 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
