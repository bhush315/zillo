import pro1 from "../assets/products/1.webp";
import pro2 from "../assets/products/2.webp";
import pro3 from "../assets/products/3.webp";
import "./Item.css";

const Items = () => {
  return (
    <section className="flex-col justify-center items-center mx-auto space-y-5 sm:flex sm:flex-col sm:gap-8 sm:items-center sm:justify-center  lg:flex lg:flex-row lg:px-18 lg:gap-8 bg-[#F7F7F7] my-9 py-12">
      {/* FIRST MAIN */}
      <br />
      <main className="card">
        <div>
          <img src={pro1} className="img" />
        </div>

        <div>
          <h1 className="text-2xl font-black mb-2">Buy a home</h1>
          <p className="text-[15px] mb-5">
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button className="but">Browse homes</button>
        </div>
      </main>

      {/* SECOND MAIN */}
      <main className="card">
        <div>
          {" "}
          <img src={pro2} className="img" />
        </div>

        <div>
          <h1 className="text-2xl font-black mb-2">Sell a home</h1>
          <p className="text-[15px] mb-5">
            No matter what path you take to sell your home, we can help you
            navigate a successful sale
          </p>
          <button className="but">See your Options</button>
        </div>
      </main>

      {/* THIRD MAIN */}
      <main className="card">
        <div>
          {" "}
          <img src={pro3} className="img" />
        </div>

        <div>
          <h1 className="text-2xl font-black mb-2">Rent a home</h1>
          <p className="text-[15px] mb-5">
            We’re creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </p>
          <button className="but">Find rentals</button>
        </div>
      </main>
    </section>
  );
};

export default Items;
