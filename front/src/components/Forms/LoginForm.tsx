"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validarLogin } from "@/helpers/validateForms";
import "../../styles/forms.css";
import ContainerInput from "./ContainerInput";
import { useRouter } from "next/navigation";
import { handleSubmit } from "@/helpers/fetchForms";
import PATHROUTES from "@/helpers/PathRoutes";
import { IUser, UserSessionProps } from "@/helpers/types";
import { useAuth } from "@/context/AuthContext";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { dataUser, setDataUser } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const url = process.env.NEXT_PUBLIC_URL;

  const handleSubmitLogin = async (values: IUser) => {
    const response = await handleSubmit({
      setError: setError,
      textError: "Error al iniciar sesión. Intentelo nuevamente.",
      textSwal: "Haz completado el login correctamente!",
      titleSwal: "Inicio de sesión exitoso!",
      url: `${url}/users/login`,
      values: values,
    });

    if (response?.data.login === true) {
      const userData: UserSessionProps = {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        address: response.data.user.address,
        phone: response.data.user.phone,
        token: response.data.token,
      };

      await setDataUser(userData);
      router.push(PATHROUTES.LANDING);
    } else {
      throw new Error("Error al loguear un usuario");
    }
  };

  return (
    <div className="cont-form w-10/12 mx-auto">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validarLogin}
        onSubmit={async (values) => {
          try {
            await handleSubmitLogin(values);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formikProps) => (
          <Form className="flex flex-col items-start">
            <ContainerInput
              error={error}
              formikProps={formikProps}
              nombre="email"
              title="Email"
              type="email"
            />

            <ContainerInput
              error={error}
              formikProps={formikProps}
              nombre="password"
              title="Contraseña"
              type="password"
            />

            {error && (
              <p className="text-red-600 text-center mb-2 w-full">¡{error}!</p>
            )}
            <div className="cont-btn flex w-full justify-center mb-5">
              <button
                type="submit"
                className=" bg-none border border-custom-orange text-custom-orange  rounded-3xl md:text-base md:py-2 md:px-5 hover:cursor-pointer hover:bg-custom-orange hover:text-custom-white text-sm py-1.5 px-4"
              >
                Ingresar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
