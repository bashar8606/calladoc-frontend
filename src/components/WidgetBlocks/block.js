"use client"
import { HOME_BANNER, HOME_SERVICES, HOME_DOCTORS, HOME_STATS, HOME_CHOOSE, HOME_BLOGS, HOME_SPEC, HOME_ABOUT, HOME_FAQ, CEO_MESSAGE, PACKAGES, PACKAGE_DETAIL } from "@/constants/resources";
import DefaultComponent from "./DefaultComponent";
import HomeBanner from "@/widgets/HomeBanner";
import HomeServices from "@/widgets/HomeServices";
import HomeDoctors from "@/widgets/HomeDoctors";
import HomeStats from "@/widgets/HomeStats";
import HomeChoose from "@/widgets/HomeChoose";
import HomeBlogs from "@/widgets/HomeBlogs";
import HomeSpec from "@/widgets/HomeSpec";
import HomeAbout from "@/widgets/HomeAbout";
import HomeFaq from "@/widgets/HomeFaq";
import CeoMessage from "@/widgets/CeoMessage";
import Packages from "@/widgets/Packages";
import PackageDetail from "@/widgets/PackageDetail";



const setComponent = (widget) => {
  const components = {
    [HOME_BANNER]: HomeBanner,
    [HOME_SERVICES]: HomeServices,
    [HOME_DOCTORS]: HomeDoctors,
    [HOME_STATS]: HomeStats,
    [HOME_CHOOSE]: HomeChoose,
    [HOME_BLOGS]: HomeBlogs,
    [HOME_SPEC]: HomeSpec,
    [HOME_ABOUT]: HomeAbout,
    [HOME_FAQ]: HomeFaq,
    [CEO_MESSAGE]: CeoMessage,
    [PACKAGES]: Packages,
    [PACKAGE_DETAIL]: PackageDetail,
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


