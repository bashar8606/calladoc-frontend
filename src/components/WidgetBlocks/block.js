"use client"
import { HOME_BANNER, HOME_SERVICES, HOME_DOCTORS, HOME_STATS, HOME_CHOOSE, HOME_BLOGS, HOME_SPEC, HOME_ABOUT, HOME_FAQ, CEO_MESSAGE, INNER_BANNER, BLOG_LISTING, FEATURED_BLOGS, BASHAR_DEMO, DEMO_HERO_WIDGET, DEMO_STAT, DEMO_ABOUT, DETAIL_WIDGET, FEATURE_BLOGS, DOCTORS_CONTENT, DOCTORS_DETAIL, DOCTORS_SINGLE_BANNER, HOME_TESTIMONIALS, HOME_CLIENTS, CTA_SECTION, CONTENT_SEC, SERVICE_ABOUT, SERVICE_BANNER, PACKAGE_WIDGET, PACKAGE_LISTING, CONTACT_BANNER, CONTACT_DETAILS, SERVICE_LISTING } from "@/constants/resources";
import DefaultComponent from "./DefaultComponent";
import HomeBanner from "@/widgets/HomeBanner";
import CeoMessage from "@/widgets/CeoMessage";
import HomeServices from "@/widgets/HomeServices";
import HomeDoctors from "@/widgets/HomeDoctors";
import HomeStats from "@/widgets/HomeStats";
import HomeChoose from "@/widgets/HomeChoose";
import HomeBlogs from "@/widgets/HomeBlogs";
import HomeSpec from "@/widgets/HomeSpec";
import HomeAbout from "@/widgets/HomeAbout";
import HomeFaq from "@/widgets/HomeFaq";
import InnerBanner from "@/widgets/InnerBanner";
import BlogListing from "@/widgets/BlogListing";
import FeaturedBlogs from "@/widgets/FeaturedBlogs";
import DetailWidget from "@/widgets/DetailWidget";
import DoctorsContent from "@/widgets/DoctorsContent";
import DoctorsDetail from "@/widgets/DoctorsDetail";
import DoctorsSingleBanner from "@/widgets/DoctorsSingleBanner";
import HomeTestimonials from "@/widgets/HomeTestimonials";
import HomeClients from "@/widgets/HomeClients";
import CtaSection from "@/widgets/CtaSection";
import ContentSec from "@/widgets/ContentSec";
import ServiceAbout from "@/widgets/ServiceAbout";
import ServiceBanner from "@/widgets/ServiceBanner";
import PackageWidget from "@/widgets/PackageWidget";
import PackageListing from "@/widgets/PackageListing";
import ContactBanner from "@/widgets/ContactBanner";
import ContactDetails from "@/widgets/ContactDetails";
import ServiceListing from "@/widgets/ServiceListing";


const setComponent = (widget) => {
  const components = {
    [HOME_BANNER]: HomeBanner,
    [HOME_SERVICES]: HomeServices,
    [HOME_DOCTORS]: HomeDoctors,
    [HOME_STATS]: HomeStats,
    [HOME_CHOOSE]: HomeChoose,
    [CEO_MESSAGE]: CeoMessage,
    [HOME_BLOGS]: HomeBlogs,
    [HOME_SPEC]: HomeSpec,
    [HOME_ABOUT]: HomeAbout,
    [HOME_FAQ]: HomeFaq,
    [INNER_BANNER]: InnerBanner,
    [BLOG_LISTING]: BlogListing,
    [FEATURED_BLOGS]: FeaturedBlogs,
    [DETAIL_WIDGET]: DetailWidget,
    [DOCTORS_CONTENT]: DoctorsContent,
    [DOCTORS_DETAIL]: DoctorsDetail,
    [DOCTORS_SINGLE_BANNER]: DoctorsSingleBanner,
    [HOME_TESTIMONIALS]: HomeTestimonials,
    [HOME_CLIENTS]: HomeClients,
    [CTA_SECTION]: CtaSection,
    [CONTENT_SEC]: ContentSec,
    [SERVICE_ABOUT]: ServiceAbout,
    [SERVICE_BANNER]: ServiceBanner,
    [PACKAGE_WIDGET]: PackageWidget,
    [PACKAGE_LISTING]: PackageListing,
    [CONTACT_BANNER]: ContactBanner,
    [CONTACT_DETAILS]: ContactDetails,
    [SERVICE_LISTING]: ServiceListing,
    default: DefaultComponent,
  };
  return components[widget.__component] || components["default"];
};


const Block = ({
  widget,
  slug,
}) => {
  const Widget = setComponent(widget);
  // console.log(widget.__component,"widgetwidgetwidget");
  return (
    <Widget
      data={widget}
      {...widget}
      slug={slug}
    />
  );
};

export default Block;


