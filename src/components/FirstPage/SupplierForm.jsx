export default function SupplierForm() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-400 p-12 text-white">
      <div className="absolute inset-0">
        <img
          src="/src/assets/Image/extraa/formsupplier.png"
          alt="Warehouse"
          className="w-full h-full object-cover opacity-30" 
        />
      </div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center"> 
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-3 leading-snug">
            An easy way to send <br /> requests to all suppliers
          </h2>
          <p className="text-blue-100 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 w-[500px] ml-auto"> 
          <h3 className="text-gray-900 text-lg font-semibold mb-3">Send quote to suppliers</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="What item you need?"
              />
            </div>
            <div>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="2"
                placeholder="Type more details"
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="0"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-medium">Unit</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Pcs</option>
                  <option>Kilograms</option>
                  <option>Tons</option>
                </select>
              </div>
            </div>
            <button className="min-w-30 bg-blue-700 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-500 transition">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
