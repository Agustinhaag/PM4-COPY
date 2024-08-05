import LoginForm from "@/components/Forms/LoginForm";
import Link from "next/link";
import React from "react";

const Login: React.FC = () => {
  return (
    <main
      className="bg-cover pb-4"
      style={{ backgroundImage: "url(/fondo2.jpg)" }}
    >
      <section className="bg-black opacity-90 text-custom-white w-2/5 mx-auto pt-4 pb-5 mt-5 min-w-72 rounded-xl">
        <h2
          className="text-center md:my-4 mx-0 md:text-2xl text-xl my-5 underline-offset-2"
          style={{ textDecoration: "1.5px underline #FBA14D" }}
        >
          Iniciar sesión
        </h2>
        <LoginForm />
        <p className="justify-center flex gap-1 px-1">
          ¿No tienes una cuenta?
          <Link
            href={"/register"}
            className="text-custom-blue hover:underline no-underline"
          >
            Registrate
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
