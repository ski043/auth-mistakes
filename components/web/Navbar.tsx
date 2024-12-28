"use client";

import React from "react";
import { buttonVariants } from "../ui/button";
import { NavLinks } from "./NavLinks";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <div className="flex justify-between items-center py-4">
      <NavLinks />

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <p>{user.given_name}</p>
            <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
          </>
        ) : (
          <>
            <RegisterLink className={buttonVariants()}>Register</RegisterLink>
            <LoginLink className={buttonVariants({ variant: "outline" })}>
              Login
            </LoginLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
