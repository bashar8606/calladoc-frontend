"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from "@/components/Image/image";
import MedicalCard from "@/components/MedicalCard";
import { SERVICE_CATEGORIES, SERVICES } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";

// Loading component for Suspense fallback
function ServiceListingLoading() {
  return (
    <section className="overflow-hidden py-10 lg:py-[100px] relative" id="ServiceListing">
      <div className="container relative z-10">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading services...</div>
        </div>
      </div>
    </section>
  );
}

// Main component that uses useSearchParams
function ServiceListingContent({ data }) {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch services with category data
        const servicesData = data?.items;
        const categoriesData = await nextFetch(SERVICE_CATEGORIES);
        
        if (servicesData) {
          setServices(servicesData);
          setFilteredServices(servicesData);
        }
        
        if (categoriesData?.data) {
          setCategories(categoriesData.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data?.items]);

  // Handle URL parameter on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      filterServicesByCategory(categoryParam);
    }
  }, [searchParams, services]);

  const filterServicesByCategory = (categorySlug) => {
    if (categorySlug === 'all') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service => 
        service.category?.slug === categorySlug
      );
      setFilteredServices(filtered);
    }
  };

  const handleCategoryFilter = (categorySlug) => {
    setSelectedCategory(categorySlug);
    filterServicesByCategory(categorySlug);
    
    // Update URL parameters
    const params = new URLSearchParams(searchParams);
    if (categorySlug === 'all') {
      params.delete('category');
    } else {
      params.set('category', categorySlug);
    }
    
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
  };

  if (loading) {
    return <ServiceListingLoading />;
  }

  return (
    <section className="overflow-hidden py-10 lg:py-[100px] relative" id="ServiceListing">
      <div className="container relative z-10">
        <div className="grid grid-cols-12 justify-center items-end mb-20 gap-y-4">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-blue-600 text-xl font-condensed font-semibold mb-3">
              {data?.title || 'Our Services'}
            </span>
            <h1 className="font-dmSerif text-3xl lg:text-5xl font-semibold lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49] to-[#5B95F9] bg-clip-text text-transparent font-condensed">
              {data?.titleMain || 'Medical Services'}
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className='overflow-x-auto'>
              <div className="flex flex-nowrap gap-3">
                <button
                  onClick={() => handleCategoryFilter('all')}
                  className={`px-6 py-3 ml-auto rounded-full whitespace-nowrap font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Services
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryFilter(category.slug)}
                    className={`px-6 py-3 whitespace-nowrap rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category?.slug
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2 lg:gap-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, i) => (
              <div key={service.id || i}>
                <MedicalCard data={service} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No services found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Main export component wrapped in Suspense
export default function ServiceListing({ data }) {
  return (
    <Suspense fallback={<ServiceListingLoading />}>
      <ServiceListingContent data={data} />
    </Suspense>
  );
}


