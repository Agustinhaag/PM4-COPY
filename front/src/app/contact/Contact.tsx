import FAQ from "@/components/contact/FAQ";
import FormContact from "@/components/contact/FormContact";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <main
      className="bg-cover"
      style={{ backgroundImage: "url(fondo-contact.jpg)" }}
    >
      <h1
        className="pt-7 text-center text-custom-white text-3xl underline-offset-2"
        style={{ textDecoration: "1.5px underline #FBA14D" }}
      >
        Contactanos
      </h1>
      <section className="flex sm:flex-row flex-col w-11/12 justify-between mx-auto py-5 gap-5">
        <FormContact />
        <div className="text-custom-white sm:w-1/2 w-full flex flex-col gap-5 sm:items-start items-center">
          <div className="flex flex-col">
            <p className="font-extralight text-lg sm:text-start text-center">Canal de WhatsApp</p>
            <div className="flex ">
              <span className="text-green-500 text-3xl">
                <FaWhatsappSquare />
              </span>
              <span className="font-semibold text-lg"> +54 (3548) 604817</span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-extralight text-lg sm:text-start text-center">Encontranos en</p>
            <p className="font-semibold text-lg">
              Av Argentina 200, La falda, Còrdoba.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-extralight text-lg sm:text-start text-center">Siguenos</p>
            <div className="flex gap-2.5">
              <Link
                href="https://www.youtube.com/"
                className="text-red-600 text-3xl"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="text-blue-600 text-3xl"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.twitter.com/"
                className="text-sky-600 text-3xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="text-rose-500 text-3xl"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6833.338745838029!2d-64.4821609506536!3d-31.09112256847411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1720700342440!5m2!1ses-419!2sar"
          width="600"
          className="w-4/5 rounded-md"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <FAQ />
    </main>
  );
};

export default Contact;
