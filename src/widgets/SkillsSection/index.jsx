import React from "react";

// SVGs for each skill
const icons = {
  figma: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#F24E1E"/><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" fill="#A259FF"/><path d="M12 18a3 3 0 100-6 3 3 0 000 6z" fill="#1ABCFE"/><path d="M6 9a3 3 0 106 0 3 3 0 00-6 0z" fill="#0ACF83"/><path d="M6 15a3 3 0 106 0 3 3 0 00-6 0z" fill="#FF7262"/></svg>
  ),
  nextjs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#000"/><path d="M16.5 16.5L7.5 7.5" stroke="#fff" strokeWidth="1.5"/><path d="M12 7.5v9" stroke="#fff" strokeWidth="1.5"/></svg>
  ),
  gsap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#88CE02"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  strapi: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#8E75FF"/><path d="M7 17L17 7H7v10z" fill="#fff"/></svg>
  ),
  spline: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#861AF5"/><path d="M12 7l5 10H7l5-10z" fill="#fff"/></svg>
  ),
};

// Example data structure for the widget
const defaultData = {
  title: "My Skills",
  subtitle: "What I can do for you",
  skills: [
    {
      icon: icons.figma,
      title: "UI/UX Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.",
      tools: [
        { name: "Figma", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
        { name: "Adobe XD", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
      ],
    },
    {
      icon: icons.nextjs,
      title: "Frontend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.",
      tools: [
        { name: "Next js", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
        { name: "React js", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
        { name: "Tailwind", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
      ],
    },
    {
      icon: icons.gsap,
      title: "Interactive Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.",
      tools: [
        { name: "GSAP", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
        { name: "Three JS", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
      ],
    },
    {
      icon: icons.strapi,
      title: "CMS Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.",
      tools: [
        { name: "Strapi Js", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
        { name: "Wordpress", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
      ],
    },
    {
      icon: icons.spline,
      title: "3d Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.",
      tools: [
        { name: "Spline", color: "bg-[#F8F8F8] text-black border-[#F8F8F8]" },
      ],
    },
  ],
};

export default function SkillsSection({ data = defaultData }) {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-[146px] pt-[123px] pb-[153px] bg-black">
      {/* Title and subtitle */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-[93px]">
        <h3 className="text-[18px] font-medium text-[#EDEDED] text-center mb-2 font-dm-sans">{data.title}</h3>
        <h2 className="text-[40px] md:text-[80px] font-normal text-white text-center leading-[1.3] font-dm-sans">{data.subtitle}</h2>
      </div>
      {/* Skills cards */}
      <div className="w-full flex flex-wrap gap-[23px] justify-center items-stretch">
        {data.skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 w-full max-w-[526px] min-w-[320px] flex-1"
            style={{ minHeight: 370 }}
          >
            {/* Icon area with SVG */}
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              {skill.icon}
            </div>
            <div>
              <h4 className="text-[32px] font-normal text-black mb-2 text-center font-dm-sans">{skill.title}</h4>
              <p className="text-[#D8D8D8] text-base mb-4 text-left font-red-hat-display">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className={`inline-block border rounded-full px-4 py-1 text-sm font-red-hat-display ${tool.color}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 