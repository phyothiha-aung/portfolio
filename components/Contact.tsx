"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "./Toast";
import { sentContactEmail } from "@/app/email";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });
  const [showMessage, setShowToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const onSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    const res = await sentContactEmail(data);
    if (res.success) {
      setShowToast({
        message: res.message,
        type: "success",
      });
    } else {
      setShowToast({
        message: res.message,
        type: "error",
      });
    }

    reset(defaultValues);
  };

  return (
    <section id="Contact" className="py-17 px-2">
      <div className="app-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary font-exo-2 uppercase text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-160 mx-auto w-full p-4 sm:p-8 border border-primary mt-15 rounded-lg text-white"
        >
          <input
            className={`bg-transparent p-2 outline-none border-b border-primary ${errors.name ? "border-red-500" : ""} placeholder:text-gray-600`}
            type="text"
            placeholder="Name"
            autoComplete="off"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </span>
          )}
          <input
            className={`mt-4 p-2 bg-transparent outline-none border-b border-primary ${errors.email ? "border-red-500" : "border-primary"} placeholder:text-gray-600 `}
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
          <input
            className={`mt-4 bg-transparent p-2 outline-none border-b ${errors.phone ? "border-red-500" : "border-primary"} placeholder:text-gray-600 `}
            type="text"
            placeholder="Phone"
            autoComplete="off"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^\d{7,15}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">
              {errors.phone.message}
            </span>
          )}

          <textarea
            className={`mt-4 bg-transparent p-2 outline-none border-b ${errors.message ? "border-red-500" : "border-primary"} placeholder:text-gray-600 `}
            rows={6}
            placeholder="Message"
            autoComplete="off"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 3 characters",
              },
              maxLength: {
                value: 255,
                message: "Message must be no more than 255 characters",
              },
            })}
          />
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white bg-background ${isSubmitting ? "border-primary/50 cursor-not-allowed text-white/50" : "hover:shadow-[0px_0px_5px_1px_var(--color-primary)] hover:text-primary"} cursor-pointer border border-primary px-4 py-3 my-8 w-40 mx-auto rounded-md disabled:border-primary/50 disabled:cursor-not-allowed`}
          >
            Let&apos;s Connect
          </button>
        </form>
      </div>
      {showMessage && (
        <Toast
          message={showMessage.message}
          onClose={() => setShowToast(null)}
          duration={3000}
          type={showMessage.type}
        />
      )}
    </section>
  );
};

export default Contact;
