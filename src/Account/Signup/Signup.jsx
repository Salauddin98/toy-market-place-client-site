import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const [PasswordShow, setPasswordShow] = useState(true);
  const { createUser, GetProfile } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please add at least one uppercase ");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setPasswordError("Please add at least two number");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Sorry password don't match");
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // setUser(loggedInUser);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoto("");
        form.reset();
        navigate("/login");
        toast.success("SignUp Successfully");
        GetProfile(result.user, name, photo)
          .then(() => {
            console.log("done");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // // setError(error.message);
        // if (passwordError === error.message) {
        //   setPasswordError("Email already in use");
        // }
        setPasswordError(error.message);
      });
  };
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };
  const handleConfirmPassword = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
  };
  const handleURL = (e) => {
    const image = e.target.value;
    setPhoto(image);
  };
  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 bg-[#111827]">
        <h1 className="text-2xl font-bold text-center text-gray-300">
          Sign Up
        </h1>
        <form onSubmit={handleSubmitForm} action="" className="space-y-6 ">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mb-2"
              required
            />

            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-400">
              Confirm Password
            </label>
            <input
              type={PasswordShow ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            {PasswordShow ? (
              <FaEyeSlash
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
                onClick={() => setPasswordShow(!PasswordShow)}
              ></FaEyeSlash>
            ) : (
              <FaEye
                onClick={() => setPasswordShow(!PasswordShow)}
                className="absolute right-3 bottom-0 top-9 cursor-pointer"
              ></FaEye>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="text"
              id="text"
              onChange={handleURL}
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="mt-6 text-center">
            {passwordError && (
              <span className="text-red-600">{passwordError}</span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 ">
            Sign up
          </button>
        </form>

        <p className="text-base text-center sm:px-6 dark:text-gray-400 text-slate-300">
          Already have an account?
          <Link className="text-white ml-2 btn-link" to="/login">
            login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
