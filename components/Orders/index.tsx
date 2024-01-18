import Input from '../Atoms/Input';

const Orders = () => {
  return <section className="flex flex-col md:flex-row align-center mb-20 w-full md:items-stretch md:overflow-hidden bg-auto bg-blue-800">
    <div className="md:w-1/2 p-20  bg-cover flex flex-col align-center text-white justify-center items-center">
      <h1 className="mb-5">Unlock Innovation with Equip Link Pro</h1>
      <p className="mb-5 text-2xl text-center">
      Discover a world of cutting-edge equipment solutions at your fingertips. Our catalog is a gateway to efficiency, performance, and unparalleled innovation.
      </p>
      <button className="text-blue-600 bg-yellow-300 px-6 py-4 rounded-full text-3xl drop-shadow-xl">Open Catalog</button>
    </div>
    <div className="hidden md:flex w-5 bg-yellow-200/40 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-yellow-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="md:w-1/2 p-10 flex justify-center items-center md:-skew-x-6 lg:-skew-x-12 lg:pl-32 lg:pr-32 md:max-w-screen-sm bg-gradient-to-r from-yellow-200 to-yellow-300">
      <form className="flex flex-row flex-wrap gap-4 md:skew-x-6 lg:skew-x-12 justify-center md:justify-end">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="equipmentId" placeholder="Equipment Id" required />
        <textarea id="message" name="message" placeholder="Message" rows={4} required className="py-2 px-4 w-full"></textarea>
        <button type="submit" className="bg-blue-600 text-yellow-300 px-6 py-4 rounded-full text-3xl">Place an Inquiry</button>
      </form>
    </div>
    <div className="hidden md:flex w-5 bg-yellow-200/70 -skew-x-6 lg:-skew-x-12"></div>
    <div className="hidden md:flex w-5 bg-yellow-200/40 -skew-x-6 lg:-skew-x-12"></div>
  </section>
}

export default Orders;
