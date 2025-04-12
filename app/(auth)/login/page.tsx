"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Logo from "@/public/icons/nospamlogo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { signIn } from "next-auth/react";
import AuthLayout from "@/utils/authlayout";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LoginContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    import("next-auth/react").then(({ getSession }) => {
      getSession().then((session) => {
        if (session) router.push("/space");
      });
    });
  }, [router]);

  useEffect(() => {
    if (error) {
      let errorMessage = "Login failed. Please try again.";

      switch (error) {
        case "OAuthAccountNotLinked":
          errorMessage =
            "This email is already associated with another provider.";
          break;
        case "OAuthCallback":
          errorMessage = "Error during OAuth callback.";
          break;
        case "OAuthCreateAccount":
          errorMessage = "Could not create OAuth account.";
          break;
        case "CredentialsSignin":
          errorMessage = "Invalid credentials.";
          break;
        case "Configuration":
          errorMessage = "Server configuration error.";
          break;
        case "AccessDenied":
          errorMessage = "Access denied.";
          break;
        case "Default":
          errorMessage = "An unknown error occurred.";
          break;
      }

      toast.error(errorMessage, {
        id: "login-error",
      });
    }
  }, [error]);

  const handleGoogleSignIn = async () => {
    const toastId = toast.loading("Signing in with Google...");
    try {
      await signIn("google", { callbackUrl: "/space", redirect: true });
    } catch {
      toast.error("Failed to sign in with Google", { id: toastId });
    }
  };

  const handleGithubSignIn = async () => {
    const toastId = toast.loading("Signing in with Github...");
    try {
      await signIn("github", { callbackUrl: "/space", redirect: true });
    } catch {
      toast.error("Failed to sign in with Github", { id: toastId });
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>Login: NoSpam.</title>
      </Head>
      <div className=" mx-auto flex flex-col gap-7 h-full">
        <span className="absolute lg:top-4 top-0 right-4 flex items-center gap-2 bg-[#256d85]  duration-300 cursor-pointer text-white rounded-full pl-3 pr-4 py-2">
          <Link href={"/"} className="flex items-center gap-1">
            <IoChevronBack size={18} />
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-sm font-base"
            >
              back
            </p>
          </Link>
        </span>
        {/* tiitle */}
        <div className="title justify-center flex ">
          <Image src={Logo} alt="NoSpam" width={140} priority={true} />
        </div>

        {/* form */}
        <form className="flex flex-col gap-3 ">
          {/* google signin button */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="input-button py-1 items-center flex flex-row border  rounded-full justify-center gap-2 hover:bg-cyan-400 border-[#3ec8f7] bg-cyan-300 cursor-pointer"
          >
            <FcGoogle size={22} />
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-sm font-medium"
            >
              Sigin with Google
            </p>
          </button>
          <div className="grid grid-cols-3 items-center justify-center">
            <div className="w-auto h-[1px] bg-gray-300"></div>
            <a className="text-xs">or</a>
            <div className="w-auto h-[1px] bg-gray-300"></div>
          </div>
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="input-button py-1 items-center flex flex-row border border-[#3ec8f7] bg-cyan-300 hover:bg-cyan-400 rounded-full justify-center gap-2 cursor-pointer"
          >
            <FaGithub size={22} />
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className=" text-sm font-medium"
            >
              Sigin with Gihub
            </p>
          </button>
        </form>
        <div className="flex flex-row justify-center gap-1 ">
          <p
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-cener text-gray-400 text-xs "
          >
            don&#39;t have a account yet?
          </p>
          <Link href={"/register"} as="Register">
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className=" text-blue-700 underline text-xs"
            >
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

const LoginPage = () => {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
};

export default LoginPage;
