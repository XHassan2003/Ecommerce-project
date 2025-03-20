import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer.jsx";
import CategoryMenu from "./components/FirstPage/CategoryMenu.jsx";
import Sidebar from "./components/FirstPage/Sidebar.jsx";
import ProductGrid from "./components/FirstPage/ProductGrid.jsx";
import SupplierForm from "./components/FirstPage/SupplierForm.jsx";
import DealsAndOffers from "./components/FirstPage/DealsAndOffers.jsx";
import HeroSection from "./components/FirstPage/HeroSection.jsx";
import RecommendedProducts from "./components/FirstPage/RecommendedItems.jsx";
import Services from "./components/FirstPage/Services.jsx";
import ListingHeader from "./components/SecondPage/ListingHeader";
import Filters from "./components/SecondPage/Filters.jsx";
import ProductList from "./components/SecondPage/ProductList.jsx";
import Pagination from "./components/SecondPage/Pagination.jsx";
import { homeProducts, gadgetsProducts, recommendedProducts, brandproducts } from "./components/data.products.js";

function HomePage() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <main className="container mx-auto px-4 py-8 flex-grow bg-gray-100">
        <div className="container grid grid-cols-4 gap-6 items-stretch h-full">
          <div className="h-full">
            <Sidebar />
          </div>
          <div className="col-span-3 h-full">
            <HeroSection />
          </div>
        </div>

        <div className="container mx-auto p-4 ">
        <DealsAndOffers />
        </div>

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
      <Footer />
    </>
  );
}

function ProductsPage() {
  const [isGridView, setIsGridView] = useState(true);
  
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <main className="container mx-auto px-4 py-8 flex-grow bg-gray-100">
        <div className="flex gap-8">
          {/* Sidebar (Filters) */}
          <div className="w-1/4">
            <Filters />
          </div>

          {/* Content Section */}
          <div className="w-3/4 flex flex-col gap-4">
            <ListingHeader isGridView={isGridView} onViewToggle={setIsGridView} />
            <ProductList products={brandproducts} isGridView={isGridView} />
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
