import React from "react";

import user_icon from "../assets/user.png";
import pass_icon from "../assets/password.png";
import view_icon from "../assets/view.png";

const SignInComponent = () => {
  return (
    <div>
      <div className="flex max-w-sm mt-24 gap-5 items-center border rounded-full bg-white shadow-md p-4">
        <img
          undefinedhidden="true"
          alt="user-icon"
          src={user_icon}
          className="w-6 h-6 text-muted-foreground"
        />
        <input
          type="email"
          placeholder="Enter email"
          className="flex-1 bg-transparent border-none outline-none text-[#AFAFAF] placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex max-w-sm mt-10 gap-5 items-center border rounded-full bg-white shadow-md p-4">
        <img
          undefinedhidden="true"
          alt="user-icon"
          src={pass_icon}
          className="w-6 h-6 text-muted-foreground"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="flex-1 bg-transparent border-none outline-none text-[#AFAFAF] placeholder:text-muted-foreground"
        />
        <img
          undefinedhidden="true"
          alt="user-icon"
          src={view_icon}
          className="w-6 h-6 text-muted-foreground cursor-pointer"
        />
      </div>

      <button className="flex font-semibold justify-center w-96 mt-10 gap-5 items-center border rounded-full bg-[#467469] shadow-md p-4 text-white">
        Login
      </button>
    </div>
  );
};

export default SignInComponent;
