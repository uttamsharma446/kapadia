"use client";
import { SessionProvider } from "next-auth/react";
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>Provider</SessionProvider>;
};

export default Provider;
