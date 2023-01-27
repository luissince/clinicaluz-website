import { clients } from "../constants";

const Clients = () => (
  <section className={`w-full my-12`}>
    <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6">
      <div className={`flex justify-center items-center flex-wrap`}>
        {/* {clients.map((client) => (
          <div key={client.id} className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))} */}
      </div>
    </div>
  </section>
);

export default Clients;