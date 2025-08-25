"use client";
import React from "react";
import styles from "./PackageDetail.module.scss";
import Image from "@/components/Image/image";
import Link from "next/link";

const PackageDetail = ({ data, slug, ...props }) => {
  return (
    <section className={`package-detail-widget relative overflow-hidden py-[60px] lg:py-[100px] ${styles.container || ''}`}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/packages" className="hover:text-blue-600 transition-colors">
                Packages
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium">{data?.title}</li>
          </ol>
        </nav>

        {/* Package Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Package Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            {data?.cover ? (
              <Image
                src={data.cover.url}
                alt={data.cover.alternativeText || data.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          {/* Package Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl xl:text-5xl font-light text-gray-900 mb-4">
                {data?.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {data?.description}
              </p>
            </div>

            {/* Price */}
            {data?.price && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {data.price}
                </div>
                <p className="text-gray-600">Starting price</p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Included</h2>
            {data?.features && data.features.length > 0 ? (
              <ul className="space-y-4">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No features listed for this package.</p>
            )}
          </div>

          {/* Package Info Card */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Package Details</h3>
            <div className="space-y-3">
              {data?.duration && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{data.duration}</span>
                </div>
              )}
              {data?.category && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{data.category}</span>
                </div>
              )}
              {data?.difficulty && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">{data.difficulty}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Content */}
        {data?.additionalContent && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {data.additionalContent}
            </div>
          </div>
        )}

        {/* Back to Packages */}
        <div className="mt-16 text-center">
          <Link 
            href="/packages"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageDetail;