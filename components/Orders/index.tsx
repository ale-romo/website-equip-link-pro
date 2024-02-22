import Input from '../Atoms/Input';

const Orders = () => {
  const openPdfInNewTab = () => {
    const pdfUrl = "/catalog/feb2024.pdf";
    window.open(pdfUrl, '_blank');
  };

  return <section className="flex flex-col md:flex-row align-center mb-20 w-full md:items-stretch primary-gradient">
    <div className="md:w-1/2 p-20 h-auto bg-cover flex flex-col align-center gap-10 text-white justify-center items-center">
      <h1 className="text-amber-400">Prepárese para Elevar sus Proyectos con EquipLinkPro</h1>
      <p className="text-center text-xl">Un enfoque revolucionario para la intermediación de equipos. Nuestras listas mensuales de equipos cuentan con una selección cuidadosa de maquinaria funcional y bien mantenida.
      </p>
      <button onClick={openPdfInNewTab} className="text-blue-800 text-bold bg-amber-400  px-8 py-3 rounded-full text-2xl drop-shadow-xl lg:hover:bg-amber-300 font-medium">Explora la lista</button>
    </div>
    <div className="hidden md:flex w-5 bg-amber-200/40 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-amber-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="md:w-1/2 p-10 flex justify-center items-center md:-skew-x-6 lg:-skew-x-12 lg:pl-32 lg:pr-32 md:max-w-screen-sm secondary-gradient">
      <form className="flex flex-row flex-wrap gap-2 md:skew-x-6 lg:skew-x-12 justify-center md:justify-end">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="equipmentId" placeholder="Equipment Id" required />
        <textarea id="message" name="message" placeholder="Message" rows={4} required className="py-2 px-4 w-full bg-white/70"></textarea>
        <button type="submit" className="bg-blue-800 text-amber-400 px-6 py-2 rounded-full text-xl font-medium mt-2  lg:hover:bg-blue-700">Place request</button>
      </form>
    </div>
    <div className="hidden md:flex w-5 bg-amber-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-amber-200/40 -skew-x-6 lg:-skew-x-12"></div>
  </section>
}

export default Orders;
