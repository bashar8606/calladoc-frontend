"use client"
import React from 'react';
import styles from './ContactDetails.module.scss';

const iconClass =
  "inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e6e8fa] text-[#3b3b6d] mr-3";

const PhoneIcon = () => (
  <span className={iconClass} aria-label="Phone">
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M3.75 4.167A2.083 2.083 0 0 1 5.833 2.083h1.25A1.25 1.25 0 0 1 8.333 3.333v2.5a1.25 1.25 0 0 1-1.25 1.25H6.25a.833.833 0 0 0-.833.833v1.25a10.417 10.417 0 0 0 10.417 10.417h1.25a.833.833 0 0 0 .833-.833v-1.25a1.25 1.25 0 0 1 1.25-1.25h2.5a1.25 1.25 0 0 1 1.25 1.25v1.25A2.083 2.083 0 0 1 19.167 17.5c-8.284 0-15-6.716-15-15Z" fill="#3b3b6d"/>
    </svg>
  </span>
);

const EmailIcon = () => (
  <span className={iconClass} aria-label="Email">
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M2.5 5.833A2.083 2.083 0 0 1 4.583 3.75h10.834A2.083 2.083 0 0 1 17.5 5.833v8.334a2.083 2.083 0 0 1-2.083 2.083H4.583A2.083 2.083 0 0 1 2.5 14.167V5.833Zm1.667.417 6.25 4.167 6.25-4.167" stroke="#3b3b6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const LocationIcon = () => (
  <span className={iconClass} aria-label="Location">
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 18.333s6.25-5.417 6.25-10A6.25 6.25 0 1 0 3.75 8.333c0 4.583 6.25 10 6.25 10Z" stroke="#3b3b6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="8.333" r="2.083" stroke="#3b3b6d" strokeWidth="1.5"/>
    </svg>
  </span>
);

const iconMap = {
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
};

const defaultSections = [
  {
    id: "general-inquiries",
    titleSmall: "General Inquiries",
    titleLarge:
      "For general questions or information about our services, please contact us at",
    items: [
      { type: "phone", label: "+971 5072 46289" },
      { type: "email", label: "hello@calladoc.ae" },
      { type: "location", label: "Dubai, UAE" },
    ],
  },
  {
    id: "career-opportunities",
    titleSmall: "Career Opportunities",
    titleLarge:
      "To apply for a position or for any inquiries related to careers, please send your CV and cover letter to",
    items: [{ type: "email", label: "career@calladoc.ae" }],
  },
  {
    id: "business-partnerships",
    titleSmall: "Business Partnerships",
    titleLarge:
      "For information about business partnerships or collaborations, please reach out to",
    items: [
      { type: "phone", label: "+971 5072 46289" },
      { type: "email", label: "marketing@calladoc.ae" },
    ],
  },
];

const ContactDetails = ({ data, slug, ...props }) => {
  const sections = Array.isArray(data?.sections) && data.sections.length > 0 ? data.sections : defaultSections;

  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-white to-[#f9fafd] py-10 lg:py-[100px]"
      id="contactSec"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.items?.map((section, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow p-8 flex flex-col h-full">
              
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {section.title}
              </h3>
              <p className="text-sm  text-black/60 mb-1">
                {section.description}
              </p>
           
              <ul className="space-y-4 mt-4">
                {section?.items?.map((item, index) => {
                  const Icon = iconMap[item.type] ?? (() => null);
                  return (
                    <li key={`${section.id}-${index}`} className="flex items-center">
                      <Icon />
                      <span className="text-sm text-blue-900 font-medium">{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails; 