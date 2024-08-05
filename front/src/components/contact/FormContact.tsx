"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import ContainerInput from "../Forms/ContainerInput";
import { validarContact } from "@/helpers/validateForms";
import emailjs from "emailjs-com";
import "../../styles/forms.css";

const FormContact: React.FC = () => {
  const [formSubmit, setFormSubmit] = useState<boolean>(false);
  const publicKey: string | undefined = process.env.NEXT_PUBLIC_PUBLICKEY;
  const templateId: string | undefined = process.env.NEXT_PUBLIC_TEMPLATEID;
  const serviceId: string | undefined = process.env.NEXT_PUBLIC_SERVICEID;
  return (
    <div className="sm:w-1/2 w-full bg-custom-white py-5 px-3 text-black rounded-xl opacity-85">
      {formSubmit ? (
        <div className="flex flex-col items-center justify-center w-full h-64">
          <h3 className="text-xl italic">
            Muchas gracias por comunicarse con nosotros!
          </h3>
          <p className="my-4">En breve nos pondremos en contacto.</p>
          <div className="flex justify-end w-2/3 mb-5 cont-btn">
            <button
              className=" bg-none text-custom-blue border border-custom-blue rounded-xl md:text-base md:py-2 md:px-5 hover:cursor-pointer hover:bg-custom-blue hover:text-custom-white text-sm py-1.5 px-4"
              onClick={() => {
                setFormSubmit(false);
              }}
            >
              Volver
            </button>
          </div>
        </div>
      ) : (
        <div className=" w-full">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validate={validarContact}
            onSubmit={(values, { resetForm }) => {
              emailjs
                .sendForm(serviceId!, templateId!, "#form", publicKey)
                .then((res) => {
                  resetForm();
                  setFormSubmit(true);
                })
                .catch((error) => console.log(error));
            }}
          >
            {(formikProps) => (
              <Form id="form" className="flex flex-col items-start">
                <ContainerInput
                  formikProps={formikProps}
                  nombre="name"
                  title="Nombre"
                  type="text"
                  contact={true}
                />
                <ContainerInput
                  formikProps={formikProps}
                  nombre="email"
                  title="Email"
                  type="email"
                  contact={true}
                />

                <ContainerInput
                  formikProps={formikProps}
                  nombre="message"
                  title="Mensaje"
                  type="text"
                  textarea={true}
                  contact={true}
                />

                <div className="cont-btn flex w-full justify-end">
                  <button
                    type="submit"
                    className=" bg-none border border-custom-orange text-custom-orange  rounded-3xl md:text-base md:py-2 md:px-10 hover:cursor-pointer hover:bg-custom-orange hover:text-custom-white text-sm py-1.5 px-4"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default FormContact;
