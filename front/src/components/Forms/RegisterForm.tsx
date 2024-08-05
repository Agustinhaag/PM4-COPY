"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validarRegister } from "@/helpers/validateForms";
import "../../styles/forms.css";
import ContainerInput from "./ContainerInput";
import { useRouter } from "next/navigation";
import { handleSubmit } from "@/helpers/fetchForms";
import PATHROUTES from "@/helpers/PathRoutes";
import { IUser } from "@/helpers/types";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const url = process.env.NEXT_PUBLIC_URL;

  const handleSubmitRegister = async (values: IUser) => {
    const response = await handleSubmit({
      setError: setError,
      textError: "Error al registrar un usuario. Intentelo nuevamente.",
      textSwal: "Haz completado el registro correctamente!",
      titleSwal: "Registro exitoso",
      url: `${url}/users/register`,
      values: values,
    });
    if (response?.response.ok) {
      router.push(PATHROUTES.LOGIN);
    } else {
      throw new Error("Error al crear un usuario");
    }
  };
  return (
    <div className="cont-form w-3/5 mx-auto">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          address: "",
          phone: "",
        }}
        validate={validarRegister}
        onSubmit={async (values) => {
          try {
            await handleSubmitRegister(values);
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
              nombre="name"
              title="Nombre completo"
              type="text"
            />
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
              nombre="phone"
              title="Teléfono"
              type="text"
            />
            <ContainerInput
              error={error}
              formikProps={formikProps}
              nombre="address"
              title="Dirección propia"
              type="text"
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
                Registrarse
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
