import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const confServices = {
    service: import.meta.env.VITE_SERVICE_CODE,
    template: import.meta.env.VITE_YOUR_TEMPLATE_ID,
    key: import.meta.env.VITE_YOUR_PUBLIC_KEY,
  };

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const getAllValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (Object.values(values).includes("")) {
      toast("Complete todos los campos", { type: "error" });
      return;
    }

    emailjs
      .sendForm(
        confServices.service,
        confServices.template,
        form.current,
        confServices.key
      )
      .then(
        (result) => {
          toast("Mensaje enviado con exito " + result.text, {
            type: "success",
          });
          setValues({
            fullname: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast(error.text, { type: "error" });
          setValues({
            fullname: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        }
      );
  };
  const form = useRef();

  return (
    <>
      <div className="text-center m-10">
        <h2 className="underline text-[#9621B8] font-bold">
          CONTÁCTATE CON NOSOTROS
        </h2>
        <p>Una solución contable adaptada a tu empresa.</p>
      </div>

      <section className="flex w-full justify-center mx-auto flex-col md:flex-row">
        <div className="flex justify-center md:col-span-1 mb-4 ">
          <img src="/image/contact1.png" alt="Image contact" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-[780px]"
        >
          <div className="">
            <label className="text-lg font-semibold" htmlFor="name"></label>
            <input
              className="block w-full p-2 border-b-2 border-r-2  border-[#9621B8] outline-none"
              type="text"
              value={values.fullname}
              name="fullname"
              id="fullname"
              onChange={getAllValues}
              placeholder="Nombre Completo"
            />
          </div>
          <div className="col-start-2">
            <label className="text-lg font-semibold" htmlFor="email"></label>
            <input
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              type="email"
              id="email"
              value={values.email}
              name="email"
              onChange={getAllValues}
              placeholder="Correo"
            />
          </div>
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              type="text"
              id="company"
              value={values.company}
              name="company"
              onChange={getAllValues}
              placeholder="Departamento"
            />
          </div>
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              type="number"
              id="phone"
              value={values.phone}
              name="phone"
              onChange={getAllValues}
              placeholder="Telefono"
            />
          </div>
          <div className="col-span-2">
            <label className="text-lg font-semibold" htmlFor="message"></label>
            <textarea
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] sm:h-32 outline-none"
              id="message"
              name="message"
              value={values.message}
              onChange={getAllValues}
              placeholder="Descripcion del Mensaje"
            />
          </div>
          <div className="md:col-start-2 flex md:justify-end">
            <input
              className="bg-yellow-dark text-lg font-semibold text-white w-full md:w-max p-2 md:px-2 rounded-md cursor-pointer "
              type="submit"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
