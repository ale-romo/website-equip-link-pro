import Input from '../Atoms/Input';

const Orders = () => {
  return <section className="flex flex-col md:flex-row align-center mb-20 w-full md:items-stretch primary-gradient">
    <div className="md:w-1/2 p-20 h-auto bg-cover flex flex-col align-center gap-10 text-white justify-center items-center">
      <h1 className="text-gold-600">Unlock Innovation with Equip Link Pro</h1>
      <p className="text-center">
      Discover a world of cutting-edge equipment solutions at your fingertips. Our catalog is a gateway to efficiency, performance, and unparalleled innovation.
      </p>
      <button className="text-blue-950 text-bold secondary-gradient  px-8 py-3 rounded-full text-2xl drop-shadow-xl lg:opacity-80 lg:hover:opacity-100 font-medium">Open Catalog</button>
    </div>
    <div className="hidden md:flex w-5 bg-gold-200/40 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-gold-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="md:w-1/2 p-10 flex justify-center items-center md:-skew-x-6 lg:-skew-x-12 lg:pl-32 lg:pr-32 md:max-w-screen-sm secondary-gradient">
      <form className="flex flex-row flex-wrap gap-2 md:skew-x-6 lg:skew-x-12 justify-center md:justify-end">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="equipmentId" placeholder="Equipment Id" required />
        <textarea id="message" name="message" placeholder="Message" rows={4} required className="py-2 px-4 w-full bg-white/70"></textarea>
        <button type="submit" className="primary-gradient text-gold-300 px-6 py-2 rounded-full text-xl font-medium mt-2 lg:opacity-90 lg:hover:opacity-100">Place request</button>
      </form>
    </div>
    <div className="hidden md:flex w-5 bg-gold-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-gold-200/40 -skew-x-6 lg:-skew-x-12"></div>
  </section>
}

export default Orders;
