"use client";
import React from "react";
import styles from "./Packages.module.scss";
import Image from "@/components/Image/image";
import Link from "next/link";

const Packages = ({ data, slug, ...props }) => {
  return (
    <section className={`packages-widget relative overflow-hidden py-[60px] lg:py-[100px] ${styles.container || ''}`}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl xl:text-6xl font-light text-gray-900 mb-6">
            {data?.title || "Our Packages"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data?.description || "Discover our comprehensive packages designed to meet your needs"}
          </p>
        </div>

        {/* Packages Grid */}
        {data?.items && data.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((packageItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Package Image */}
                {packageItem.cover && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={packageItem.cover.url}
                      alt={packageItem.cover.alternativeText || packageItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {/* Package Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {packageItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {packageItem.description}
                  </p>
                  
                  {/* Package Features */}
                  {packageItem.features && (
                    <ul className="mb-6 space-y-2">
                      {packageItem.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    {packageItem.price && (
                      <div className="text-2xl font-bold text-blue-600">
                        {packageItem.price}
                      </div>
                    )}
                    <Link 
                      href={`/packages/${packageItem.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No packages available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;