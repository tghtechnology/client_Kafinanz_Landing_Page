import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { depart } from "../data/depart";

const confServices = {
  service: import.meta.env.VITE_SERVICE_CODE,
  template: import.meta.env.VITE_YOUR_TEMPLATE_ID,
  key: import.meta.env.VITE_YOUR_PUBLIC_KEY,
};

const initialState = {
  fullname: "",
  email: "",
  phone: "",
  department: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialState);
  const form = useRef();

  const getAllValues = (e) => {
    const { name, value } = e.target;
    const regPhone = new RegExp(!/^[0-9]*$/);

    if (name === "phone" && regPhone.test(value)) {
      toast("Por favor, ingrese solo números en el campo de teléfono", {
        type: "error",
      });
      return;
    }

    if (name === "department") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(values);

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
          setValues(initialState);
        },
        (error) => {
          toast(error.text, { type: "error" });
          setValues(initialState);
        }
      );
  };

  return (
    <>
      <div id="contact" className="text-center grid grid-cols-12 m-10">
        <div className="col-span-6 col-start-1 col-end-12  md:col-start-6 md:col-end-11">
          <h2 className=" underline text-purple-black font-bold my-3 text-2xl uppercase">
            Contáctate con nosotros
          </h2>
          <p>Una solución contable adaptada a tu empresa.</p>
        </div>
      </div>

      <div className="flex w-full justify-center mx-auto flex-col md:flex-row gap-4 mb-4">
        <div className="flex justify-center md:col-span-1 mb-4 ">
          <img
            src="/image/contact.svg"
            alt="Image contact"
            className="hidden md:block"
          />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-[780px] grid gap-4 md:grid-cols-2 p-4 md:p-8 bg-white rounded-lg shadow-2xl"
        >
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2  border-[#9621B8] outline-none"
              type="text"
              value={values.fullname}
              name="fullname"
              onChange={getAllValues}
              placeholder="Nombre Completo"
              aria-label="Nombre"
            />
          </div>
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              type="email"
              value={values.email}
              name="email"
              onChange={getAllValues}
              placeholder="Correo"
              aria-label="Correo"
            />
          </div>
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              type="text"
              id="phone"
              value={values.phone}
              name="phone"
              onChange={getAllValues}
              placeholder="Telefono"
              aria-label="Telefono"
            />
          </div>
          <div className="">
            {/* Seleccionar Departamento */}
            <select
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none bg-white"
              onChange={getAllValues}
              value={values.department} // Asegúrate de que el valor del departamento esté configurado correctamente
              name="department"
              aria-label="Departamento"
            >
              <option value="department">Departamentos</option>
              {depart.map((depart) => (
                <option key={depart.id} value={depart.nombre}>
                  {depart.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="h-[247px] md:col-span-2">
            <textarea
              className="block h-full w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none"
              name="message"
              value={values.message}
              onChange={getAllValues}
              placeholder="Descripcion del Mensaje"
              aria-label="Descripcion"
            />
          </div>

          <div className="flex justify-end md:col-span-2">
            <input
              className="bg-yellow-dark text-lg font-semibold text-white  w-full md:w-max p-2 md:px-9   rounded-md cursor-pointer "
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
