"use client";
import React from "react";
import styles from "./ContactDetails.module.scss";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoIosLocate } from "react-icons/io";

const ContactDetails = ({ data, slug, ...props }) => {
  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-white to-[#f9fafd] py-10 lg:py-[100px]"
      id="contactSec"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.items?.map((section, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-2xl shadow p-8 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {section.title}
              </h3>
              <p className="text-sm  text-black/60 mb-1">
                {section.description}
              </p>

              <ul className="space-y-4 mt-4">
                {section?.items?.map((item, index) => {
                  let href = "#";
                  if (item.type === "phone") {
                    href = `tel:${item.value}`;
                  } else if (item.type === "mail") {
                    href = `mailto:${item.value}`;
                  } else if (item.type === "location" && item.valueUrl) {
                    href = item.valueUrl;
                  }
                  return (
                    <a
                      key={`${section.id}-${index}`}
                      className="flex items-center"
                      href={href}
                      target={item.type === "location" ? "_blank" : undefined}
                      rel={
                        item.type === "location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e6e8fa] text-[#3b3b6d] mr-3">
                        {item.type === "phone" && (
                          <IoIosCall className="w-4 h-4" />
                        )}
                        {item.type === "mail" && (
                          <IoIosMail className="w-4 h-4" />
                        )}
                        {item.type === "location" && (
                          <IoIosLocate className="w-4 h-4" />
                        )}
                      </div>
                      <span className="text-sm text-blue-900 font-medium">
                        {item.value}
                      </span>
                    </a>
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
