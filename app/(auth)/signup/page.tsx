import SignUpForm from "@/components/auth/SignUpForm";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <div className="flex-1 hidden md:flex bg-gray-100 bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1727402881307-9b2d1cd53ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8')] flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">quickcourse.xyz</h2>
        <p className="text-center">Reinvent you're learning experience.</p>
      </div>

      <div className="flex-1 flex flex-col bg-white justify-center items-center">
        <h2 className="text-2xl font-semibold mb-5">Sign Up Page</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
