"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.png"}
          alt="logo"
          width={30}
          height={30}
        ></Image>
        <p className="logo_text">Kapadia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" className="outline_btn">
              Sign out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.png"
                width={37}
                height={37}
                alt=""
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => signIn()}
                  className="outline_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.png"
              width={37}
              height={37}
              alt=""
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  className="dropdown_lin"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  href="/profile"
                >
                  My Profile
                </Link>
                <Link
                  className="dropdown_lin"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  href="/create-prompt"
                >
                  Create Post
                </Link>
                <button type="button" className="black_btn mt-5 w-full">
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => signIn()}
                  className="outline_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
