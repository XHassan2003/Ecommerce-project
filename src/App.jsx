import React from "react";
import CategoryMenu from "./components/CategoryMenu";
import Sidebar from "./components/SideBar";
import ProductGrid from "./components/ProductGrid";
import SupplierForm from "./components/SupplierForm";
import DealsAndOffers from "./components/DealsAndOffers";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { homeProducts, gadgetsProducts, recommendedProducts } from "./components/data.products.js";
import RecommendedProducts from "./components/RecommendedItems.jsx";
import Services from "./components/services.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <CategoryMenu />

      {/* Main content grows to push footer down */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-4 gap-6 items-stretch h-full">
          <div className="h-full">
            <Sidebar />
          </div>
          <div className="col-span-3 h-full">
            <HeroSection />
          </div>
        </div>

        <DealsAndOffers />

        <div className="container mx-auto p-4 bg-gray-100">
          <ProductGrid
            title1="Home and Outdoor"
            products1={homeProducts} 

            title2="Consumer Electronics and Gadgets"
            products2={gadgetsProducts} 
          />
        </div>

        <div className="container mx-auto p-4 bg-gray-100">
          <SupplierForm />
        </div>

        <div>
          <RecommendedProducts products={recommendedProducts} />
        </div>

        <div className="bg-gray-100">
          <Services />
        </div>
      </main>

      {/* Footer always at the bottom */}
      <Footer />  
    </div>
  );
}

export default App;
