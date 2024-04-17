import Input from '../Atoms/Input';
import { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';
import Image from 'next/image';

const Orders = () => {
  const [submit, submitting] = useFormspark({
    formId: "nMHkLiwTq"
  });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    equipmentId: "",
    message: ""
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit(formData);
    setMessageSent(true);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      equipmentId: "",
      message: ""
    });
  };

  const openPdfInNewTab = () => {
    const pdfUrl = "/catalog/feb2024.pdf";
    window.open(pdfUrl, '_blank');
  };

  return <section id="catalogo" className="flex flex-col md:flex-row align-center w-full md:items-stretch">
    <div className="md:w-3/5 h-auto flex flex-col align-right text-white pb-10 primary-gradient">
      <div className="flex flex-col justify-end items-center max-w-screen-lg relative">
        <Image src="/images/hero.webp" alt="Maquinaria seminueva americana" width="2077" height="820" className="w-full h-auto" />
        <div className="flex flex-col gap-5 md:gap-10 items-center">
          <h1 className="text-white bg-black pt-2 pb-4 px-5 md:px-20 w-full">Compra Maquinaria Americana</h1>
          <p className="text-center text-base md:text-lg px-5 sm:px-10 md:px-16 lg:px-20">Un enfoque revolucionario para la intermediación de equipos. Nuestras listas mensuales de equipos cuentan con una selección cuidadosa de maquinaria funcional y bien mantenida.
          </p>
          <button onClick={openPdfInNewTab} className="text-blue-800 text-bold bg-amber-400 px-8 py-3 rounded-full text-2xl drop-shadow-xl lg:hover:bg-amber-300 font-medium">Ver catálogo</button>
        </div>
      </div>
    </div>
    <div className="md:w-2/5 p-5 sm:p-10 flex justify-start items-end secondary-gradient">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap gap-2 justify-center md:justify-end md:max-w-screen-sm"
      >
        <h2 className="text-blue-800 pb-6 w-full text-left">Solicita tu cotización</h2>
        <Input value={formData.name} id="name" placeholder="Nombre" onChange={handleChange} required/>
        <Input value={formData.company} id="company" placeholder="Compañía"  onChange={handleChange} required />
        <Input value={formData.phone} type="tel" id="phone" placeholder="Teléfono"  onChange={handleChange} required />
        <Input value={formData.email}type="email" id="email" placeholder="Email"  onChange={handleChange} required />
        <Input value={formData.equipmentId} id="equipmentId" placeholder="ID del equipo"  onChange={handleChange} required />
        <textarea value={formData.message} id="message" name="message" placeholder="Mensaje" rows={4}  onChange={handleChange} required className="py-2 px-4 w-full bg-white/70 placeholder:italic"></textarea>
        {messageSent && <p className="w-full text-center font-bold text-blue-800 bg-amber-200 rounded-lg p-1">Tu mensaje se ha enviado, pronto estaremos en contacto</p>}
        <button type="submit" disabled={submitting} className="bg-blue-800 text-amber-400 px-6 py-2 rounded-full text-xl font-medium mt-2  lg:hover:bg-blue-700 disabled:opacity-75">Solicitar cotización</button>

      </form>
    </div>
  </section>
}

export default Orders;
