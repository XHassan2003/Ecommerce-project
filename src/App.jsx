import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb.jsx";
import {homeProducts, gadgetsProducts, recommendedProducts, brandproducts } from "./components/data.products.js";
import {CategoryMenu, Sidebar, ProductGrid, SupplierForm, DealsAndOffers, HeroSection, RecommendedProducts, Services } from "./components/FirstPage";
import {ListingHeader, Filters, ProductList, Pagination } from "./components/SecondPage";
import {ProductDetails, ProductGallery, SupplierInfo, ProductInfo, ExampleProducts, RelatedProducts, DiscountBanner,} from "./components/ThirdPage";
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
        {/* Breadcrumb with padding */}
        <div className="px-4">
          <Breadcrumb />
        </div>

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

const ProductDetail = () => {
  return (
    <>
    <Navbar />
    <CategoryMenu />
    <div className="min-h-screen bg-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-3">
        <Breadcrumb />
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ProductGallery />
            </div>
            
            <div className="lg:col-span-1">
              <ProductDetails />
            </div>
            
            <div className="lg:col-span-1">
              <SupplierInfo />
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ProductInfo />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ExampleProducts />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-6 mt-8">
      <RelatedProducts />
      <DiscountBanner />
    </div>
    </div>
    <Footer showNewsletter={false}/>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
