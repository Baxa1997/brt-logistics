"use client";
import ContactUsSection from "@/components/ContactUsSection";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";
import {useForm, Controller} from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";

interface ContactFormInputs {
  firstname: string;
  lastname: string;
  companyName?: string;
  email: string;
  phoneNumber: string;
  is_phone_collectable: boolean;
  usDot?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const {handleSubmit, control} = useForm<ContactFormInputs>();
  const router = useRouter();

  const notify = () =>
    toast.success(
      "Thank you for reaching us, we will contact you as soon as possible!"
    );

  const submit = async (data: ContactFormInputs) => {
    await fetch(
      "https://api.mockfly.dev/mocks/8b1082d3-e6c9-4a19-beec-e7eac4f3fb91/brtlog/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "12345-abcde-67890-fghij-12345",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      notify();
      router.push("/");
    });
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#034e48] relative p-6">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-5xl font-extrabold text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white text-center mb-8">
            Want to get in touch? We’re more than happy to help.
          </p>
          <div className="bg-white  rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(submit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label
                  htmlFor="firstname"
                  className="block text-gray-700 font-medium mb-2">
                  First Name *
                </label>
                <Controller
                  name="firstname"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="firstname"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="First Name"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="lastname"
                  className="block text-gray-700 font-medium mb-2">
                  Last Name *
                </label>
                <Controller
                  name="lastname"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="lastname"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Last Name"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <Controller
                  name="companyName"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="companyName"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Company Name"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="email"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Email"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <PhoneInputWithCountrySelect
                        onChange={(e) => onChange(e)}
                        id="email"
                        international
                        type="text"
                        className="w-full h-[36px] border border-gray-300 rounded-lg p-3 px-3 focus:outline-none  focus:ring-green-500 "
                        placeholder="phoneNumber"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="usDot"
                  className="block text-gray-700 font-medium mb-2">
                  US DOT
                </label>
                <Controller
                  name="usDot"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="email"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="US DOT"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="needs"
                  className="block text-gray-700 font-medium mb-2">
                  Message:
                </label>
                <Controller
                  name="message"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Textarea
                        onChange={(e) => onChange(e.target.value)}
                        id="needs"
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Describe your hiring needs"></Textarea>
                    );
                  }}
                />
              </div>
              <div className="col-span-2  text-[12px]">
                <Input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2 w-4 h-4 focus:ring focus:ring-green-500"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-gray-700 h-[20px]">
                  <p className="text-[12px] font-bold cursor-pointer">
                    By checking this box, I consent to receive SMS messages from
                    BRT Logistics related to Conversational messages at the
                    phone number provided above. The SMS frequency may vary.
                    Data rates may apply. For assistance reply HELP. Reply STOP
                    to opt out of receiving text messages. Please review our
                    <Link
                      target="_blank"
                      className="text-blue-600 underline ml-1"
                      href="/privacy-policy">
                      Privacy Policy and Terms & Conditions{" "}
                    </Link>
                    and{" "}
                    <Link
                      target="_blank"
                      href="/terms-conditions"
                      className="text-blue-600 underline ml-1">
                      Terms and Conditions
                    </Link>{" "}
                    By selecting this box, you consent to and agree with our
                  </p>
                  .
                </label>
              </div>

              <div className="col-span-2">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-500">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
};

export default Contact;
