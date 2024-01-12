import Input from '../Atoms/Input';

const Orders = () => {
  return <section className="flex flex-col lg:flex-row align-center mb-20 w-full bg-yellow-300 items-stretch overflow-hidden">
    <div className="lg:w-1/2 py-20 lg:py-52 bg-cover flex justify-center items-center -mr-32" style={{ backgroundImage: 'url(/images/hero-bg.webp)'}}>
      <button className="text-white bg-yellow-500 px-4 py-2 rounded-xl">Open Catalog</button>
    </div>
    <div className=" w-10 bg-yellow-200/40 -skew-x-12">x</div>
    <div className=" w-10 bg-yellow-200/70 -skew-x-12">x</div>
    <div className="lg:w-1/2 py-10 flex justify-center items-center -skew-x-12 pl-36 bg-gradient-to-r from-yellow-200 to-yellow-300">
      <form className="flex flex-row flex-wrap gap-10 skew-x-12">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="address" placeholder="Address" required/>
        <Input id="equipmentId" placeholder="Equipment Id" required/>
        <textarea id="message" name="message" placeholder="Message" rows={4} required></textarea>
        <button type="submit" className="bg-white text-yellow-500 px-4 py-2 rounded-xl">Place an Inquiry</button>
      </form>
    </div>
  </section>
}

export default Orders;
