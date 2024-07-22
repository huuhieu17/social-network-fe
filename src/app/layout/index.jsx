import React from "react";
import { useUser } from "../../utils/auth";
import BlankLayout from "./Blank";
import GuestLayout from "./Guest";
import UserLayout from "./User";

const Layout = () => {
  const user = useUser();
  return <BlankLayout>{user ? <UserLayout /> : <GuestLayout />}</BlankLayout>;
};

export default Layout;
