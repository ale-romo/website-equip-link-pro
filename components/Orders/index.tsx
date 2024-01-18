import Input from '../Atoms/Input';

const Orders = () => {
  return <section className="flex flex-col lg:flex-row align-center mb-20 w-full bg-yellow-300 lg:items-stretch lg:overflow-hidden bg-auto" style={{ backgroundImage: 'url(/images/hero-bg.webp)'}}>
    <div className="lg:w-1/2 py-20 lg:py-52 bg-cover flex justify-center items-center lg:-mr-32" >
      <button className="text-blue-600 bg-yellow-300 px-6 py-4 rounded-full text-3xl drop-shadow-xl">Open Catalog</button>
    </div>
    <div className="hidden lg:flex w-10 bg-yellow-200/40 -skew-x-12"></div>
    <div className="hidden lg:flex w-10 bg-yellow-200/70 -skew-x-12"></div>
    <div className="lg:w-1/2 p-10 flex justify-center items-center lg:-skew-x-12 lg:pl-32 lg:pr-32 max-w-screen-sm bg-gradient-to-r from-yellow-200 to-yellow-300">
      <form className="flex flex-row flex-wrap gap-4 lg:skew-x-12 justify-end">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="equipmentId" placeholder="Equipment Id" required />
        <textarea id="message" name="message" placeholder="Message" rows={4} required className="py-2 px-4 w-full"></textarea>
        <button type="submit" className="bg-blue-600 text-yellow-300 px-6 py-4 rounded-full text-3xl">Place an Inquiry</button>
      </form>
    </div>
    <div className="hidden lg:flex w-10 bg-yellow-200/70 -skew-x-12"></div>
    <div className="hidden lg:flex w-10 bg-yellow-200/40 -skew-x-12"></div>
  </section>
}

export default Orders;
