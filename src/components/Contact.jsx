import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { depart } from "../data/depart";

const Contact = () => {
  // const handleDepartmentChange = (e) => {
  //   const selectedDepartment = e.target.value;
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     department: selectedDepartment,
  //   }));
  // };

  const confServices = {
    service: import.meta.env.VITE_SERVICE_CODE,
    template: import.meta.env.VITE_YOUR_TEMPLATE_ID,
    key: import.meta.env.VITE_YOUR_PUBLIC_KEY,
  };

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [error, setError] = useState(false);

  const getAllValues = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^[0-9]*$/.test(value)) {
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
      setError(true);
      return;
    }

    setError(false);

    console.log(form.current);

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
            department: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast(error.text, { type: "error" });
          setValues({
            fullname: "",
            email: "",
            department: "",
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
        <h2 className="underline text-[#9621B8] font-bold my-3">
          CONTÁCTATE CON NOSOTROS
        </h2>
        <p>Una solución contable adaptada a tu empresa.</p>
      </div>

      {/* Mensagge of Error */}
      <div className="container flex justify-end py-5">
        {error && (
          <p className="p-4 text-white bg-red-800 font-bold rounded-lg">
            Por favor, complete todos los campos
          </p>
        )}
      </div>

      <div className="flex w-full justify-center mx-auto flex-col md:flex-row gap-4 mb-4">
        <div className="flex justify-center md:col-span-1 mb-4 ">
          <img src="/image/contact1.png" alt="Image contact" />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-[780px] grid gap-4 md:grid-cols-2"
        >
          <div className="">
            <input
              className="block w-full p-2 border-b-2 border-r-2  border-[#9621B8] outline-none"
              type="text"
              value={values.fullname}
              name="fullname"
              onChange={getAllValues}
              placeholder="Nombre Completo"
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
            />
          </div>
          <div className="">
            {/* Seleccionar Departamento */}
            <select
              className="block w-full p-2 border-b-2 border-r-2 border-[#9621B8] outline-none bg-white"
              onChange={getAllValues}
              value={values.department} // Asegúrate de que el valor del departamento esté configurado correctamente
              name="department"
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
