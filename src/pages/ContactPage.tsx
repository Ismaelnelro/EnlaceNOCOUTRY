import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import Input from "../components/Input";

const ContactPage = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, email, subject, message } = formValues;
        const data = {
          personalizations: [
            {
              to: [
                {
                  email: 'correo@gmail.com',
                },
              ],
              subject: subject,
            },
          ],
          from: {
            email: email,
            name: name,
          },
          content: [
            {
              type: 'text/plain',
              value: message,
            },
          ],
        };
        axios.post('https://api.sendgrid.com/v3/mail/send', data, {
            headers: {
            //   Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
              'Content-Type': 'aplication/json',
            },
          })
          .then((response) => {
            alert('Mensaje enviado exitosamente');
            setFormValues({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            console.log(response);
          })
          .catch((error) => {
            alert('Ocurrió un error al enviar el mensaje');
            console.error(error);
          });
      };
    
      return (
        <Layout>
          <div className="px-10 md:px-20 lg:px-40 py-10 ">
            <h1 className="text-hoverPrimary text-3xl font-medium">Contactanos</h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:px-20 lg:px-32">
              <Input
                type="text"
                label="Nombre"
                placeholder="| Ingrese su nombre"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full h-11"
                required
                error=""
              />
              <Input
                type="email"
                label="Email de contacto"
                placeholder="| Ingrese su correo electrónico"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full h-12"
                required
                error=""
              />
              <Input
                type="text"
                label="Asunto"
                id="subject"
                placeholder="| Ingrese el motivo de este mensaje"
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="w-full h-12"
                required
                error=""
              />
              <div className="mt-3 mb-12">
                <label
                  htmlFor="query"
                  className="relative top-3 px-2 py-1 font-medium bg-white text-xs text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="query"
                  placeholder="| Detalle cuál es el problema que necesita resolver"
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-black p-3 text-sm h-32"
                  required
                ></textarea>
              </div>
              <button type="submit" className="py-2 font-semibold text-white rounded-full bg-primary">
                Enviar
              </button>
            </form>
          </div>
        </Layout>
      );
    };

export default ContactPage