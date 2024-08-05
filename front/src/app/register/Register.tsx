import RegisterForm from "@/components/Forms/RegisterForm";
import Link from "next/link";
import React from "react";


const Register: React.FC = () => {
 
  return (
    <main
      className="bg-cover pb-4 "
      style={{ backgroundImage: "url(/fondo2.jpg)" }}
    >
      <h1 className=" py-8 md:text-2xl text-xl italic font-semibold text-center text-custom-white">
        Somos a <span className="text-custom-orange ">AH-Tech</span>, tu
        e-commerce de confianza!
      </h1>
      <section className="bg-black opacity-90 text-custom-white w-1/2 mx-auto pt-2 pb-5 mt-2 min-w-72 rounded-xl">
        <h2
          className="text-center md:my-4 mx-0 text-xl my-5 underline-offset-2"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Registrar usuario
        </h2>
        <RegisterForm />
        <p className="justify-center flex gap-1">
          ¿Ya tienes una cuenta?
          <Link
            href={"/login"}
            className="text-custom-blue hover:underline no-underline"
          >
            Ingresar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
