const Contact = () => {
  return (
    <div className=" min-h-screen">
      <h1 className="font-bold text-2xl ">Contact on this page</h1>
      <div>
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Massage"
          />
          <button className=" flex bg-black text-white p-2 m-2 rounded-lg">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
