import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // console.log(user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between absolute bg-black-400 w-screen px-8 bg-gradient-to-b from-black z-10">
      <img
        className="w-36"
        src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png"
        alt=""
      />
      {user && (
        <div className="flex items-center justify-center">
          <img
            className="w-12 h-12 mx-3"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt=""
          />
          <div className="flex flex-col items-center justify-center">
            <div className="font-light text-white">{user.displayName}</div>
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
