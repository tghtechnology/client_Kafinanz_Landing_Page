// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
// import { toast } from "react-toastify";

const Contact = () => {
  // const confServices = {
  //   service: import.meta.env.VITE_SERVICE_CODE,
  //   template: import.meta.env.VITE_YOUR_TEMPLATE_ID,
  //   key: import.meta.env.VITE_YOUR_PUBLIC_KEY,
  // };

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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   if (Object.values(values).includes("")) {
  //     toast("Complete todos los campos", { type: "error" });
  //     return;
  //   }

  //   emailjs
  //     .sendForm(
  //       confServices.service,
  //       confServices.template,
  //       form.current,
  //       confServices.key
  //     )
  //     .then(
  //       (result) => {
  //         toast("Mensaje enviado con exito " + result.text, {
  //           type: "success",
  //         });
  //         setValues({
  //           fullname: "",
  //           email: "",
  //           company: "",
  //           phone: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         toast(error.text, { type: "error" });
  //         setValues({
  //           fullname: "",
  //           email: "",
  //           company: "",
  //           phone: "",
  //           message: "",
  //         });
  //       }
  //     );
  // };


  const form = useRef();


  return (
    <section className="w-full mx-auto md:w-1/2 relative mt-8 md:my-16">
      <form
        ref={form}
        // onSubmit={sendEmail}
        className="p-4 md:p-1 gap-3 grid md:grid-cols-2 z-20"
      >
        <div className="">
          <input
            className="block w-full p-2 border-b-2 border-r-2 border-pink-gray outline-none"
            type="text"
            value={values.fullname}
            name="fullname"
            id="fullname"
            onChange={getAllValues}
            placeholder="Nombre Completo"
          />
        </div>
        <div className="">
          <label className="text-lg font-semibold" htmlFor="email"></label>
          <input
            className="block w-full p-2 border-b-2 border-r-2 border-pink-gray outline-none"
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
            className="block w-full p-2 border-b-2 border-r-2 border-pink-gray outline-none"
            type="text"
            id="company"
            value={values.company}
            name="company"
            onChange={getAllValues}
            placeholder="Telefono"
          />
        </div>
        <div className="">
          <input
            className="block w-full p-2 border-b-2 border-r-2 border-pink-gray outline-none"
            type=""
            id="phone"
            value={values.phone}
            name="phone"
            onChange={getAllValues}
            placeholder="Departamento"
          />
        </div>
        <div className="md:col-span-2">
          <textarea
            className="block w-full p-2 border-b-2 border-r-2 border-pink-gray sm:h-32 outline-none"
            id="message"
            name="message"
            value={values.message}
            onChange={getAllValues}
            placeholder="Descripción del mensaje"
          />
        </div>
        <div className="md:col-start-2 flex md:justify-end">
          <input
            className="bg-blue-600 text-lg font-semibold text-white w-full md:w-max p-2 md:px-5 rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue-800"
            type="submit"
          />
        </div>
      </form>
      <img
        className="mx-auto absolute -bottom-0 -left-80 z-10 max-w-sm hidden md:block"
        src="/image/contact.svg"
        alt="Image contact"
      />
    </section>
  );
};

export default Contact;
