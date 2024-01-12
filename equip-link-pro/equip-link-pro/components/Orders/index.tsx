import Input from '../Atoms/Input';

const Orders = () => {
  return <section className="flex flex-row align-center mb-20 w-full">
    <div className="w-1/2 py-52 bg-cover flex justify-center items-center" style={{ backgroundImage: 'url(/collage.jpg)'}}>
      <button className="text-white bg-orange-400 px-4 py-2 rounded-xl">Open Catalog</button>
    </div>
    <div className="w-1/2 px-20 flex justify-center items-center bg-orange-400">
      <form className="flex flex-row flex-wrap gap-10">
        <Input id="name" placeholder="Name" required/>
        <Input id="company" placeholder="Company"required />
        <Input type="tel" id="phone" placeholder="Phone" required />
        <Input type="email" id="email" placeholder="Email" required />
        <Input id="address" placeholder="Address" required/>
        <Input id="equipmentId" placeholder="Equipment Id" required/>
        <textarea id="message" name="message" placeholder="Message" rows={4} required></textarea>
        <button type="submit" className="bg-white text-orange-400 px-4 py-2 rounded-xl">Place an Inquiry</button>
      </form>
    </div>
  </section>
}

export default Orders;
