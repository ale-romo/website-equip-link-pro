import Input from '../Atoms/Input';
import { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';
import Banner from '../Banner';

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

  return <section id="catalogo" className="flex flex-col md:flex-row align-center w-full md:items-stretch primary-gradient">
    <div className="md:w-1/2 p-20 h-auto bg-cover flex flex-col align-center gap-10 text-white justify-center items-center">
      <h1 className="text-amber-400">Prepárese para Elevar sus Proyectos con EquipLinkPro</h1>
      <p className="text-center text-xl">Un enfoque revolucionario para la intermediación de equipos. Nuestras listas mensuales de equipos cuentan con una selección cuidadosa de maquinaria funcional y bien mantenida.
      </p>
      <button onClick={openPdfInNewTab} className="text-blue-800 text-bold bg-amber-400  px-8 py-3 rounded-full text-2xl drop-shadow-xl lg:hover:bg-amber-300 font-medium">Explora la lista</button>
    </div>
    <div className="hidden md:flex w-5 bg-amber-200/40 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-amber-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="md:w-1/2 p-10 flex justify-center items-center md:-skew-x-6 lg:-skew-x-12 lg:px-24 md:max-w-screen-sm secondary-gradient">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap gap-2 md:skew-x-6 lg:skew-x-12 justify-center md:justify-end"
      >
        <h2 className="text-blue-800 pb-6 w-full text-left">Solicita tu cotización</h2>
        <Input id="name" placeholder="Nombre" onChange={handleChange} required/>
        <Input id="company" placeholder="Compañía"  onChange={handleChange} required />
        <Input type="tel" id="phone" placeholder="Teléfono"  onChange={handleChange} required />
        <Input type="email" id="email" placeholder="Email"  onChange={handleChange} required />
        <Input id="equipmentId" placeholder="ID del equipo"  onChange={handleChange} required />
        <textarea id="message" name="message" placeholder="Mensaje" rows={4}  onChange={handleChange} required className="py-2 px-4 w-full bg-white/70 placeholder:italic"></textarea>
        {messageSent ?<p className="w-full text-center font-bold text-amber-400 bg-blue-800 rounded-lg p-4">Tu mensaje se ha enviado, pronto estaremos en contacto</p>:
        <button type="submit" disabled={submitting} className="bg-blue-800 text-amber-400 px-6 py-2 rounded-full text-xl font-medium mt-2  lg:hover:bg-blue-700 disabled:opacity-75">Enviar</button>}
      </form>
    </div>
    <div className="hidden md:flex w-5 bg-amber-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-amber-200/40 -skew-x-6 lg:-skew-x-12"></div>
  </section>
}

export default Orders;
