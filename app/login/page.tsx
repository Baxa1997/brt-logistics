"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import {useForm} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import HFTextField from "@/components/HFTextField";
import {generateGUID} from "@/hooks/generateId";
import {useRouter} from "next/navigation";

interface ContactFormInputs {
  login: string;
  password: string;
}

const JobsForm: React.FC = () => {
  const {handleSubmit, control} = useForm<ContactFormInputs>();
  const router = useRouter();

  const notify = (text: string) => toast.success(text);

  const submit = async (data: ContactFormInputs) => {
    const {login, password} = data;

    const validEmail = "admin@example.com";
    const validPassword = "admin123";

    if (login === validEmail && password === validPassword) {
      const sessionId = generateGUID();
      sessionStorage.setItem("sessionId", sessionId);

      notify("Login successful!");

      try {
        const response = await fetch("/api/some-protected-route", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionId}`,
          },
        });

        router.push("/admin");

        if (!response.ok) throw new Error("Request failed");
      } catch (error) {
        console.error("API Error:", error);
      }
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <>
      <section className="h-[calc(100vh-341px)] flex py-6 px-10 justify-center bg-[#F9FAFB] relative">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="container z-10 relative">
          <h1 className="text-3xl font-extrabold text-[#034e48] text-center mt-3">
            Admin Panel
          </h1>

          <div className="w-[700px] rounded-lg mx-auto mt-10">
            <form onSubmit={handleSubmit(submit)} className="">
              <div className="">
                <HFTextField
                  title="Login"
                  name="login"
                  control={control}
                  required={true}
                />
              </div>

              <div className="mt-4">
                <HFTextField
                  title="Password"
                  name="password"
                  control={control}
                  required={true}
                />
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-500">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsForm;
