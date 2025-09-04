//footer
export const FOOTER = "/api/footer";
//header
export const HEADER = "/api/header";

//pages
export const GLOBAL = "/api/global?populate[favicon]=true&populate[menu][populate][submenu]=true&populate[footer][populate][link]=true";

export const HOME_PAGE = "/api/home?populate=widgets.items.img,widgets.items.cover,widgets.link,widgets.cover,seo";
export const CONTACT_PAGE = "/api/contact-page?populate=widgets.cover,seo,widgets.links.icon";
export const PAGES = "/api/pages";
export const SERVICES = "/api/services";
export const BLOGS = "/api/articles";
export const CATEGORIES = "/api/categories";
export const BLOG_PAGE = "/api/blog";
// export const LEADER_PAGE = "/api/leaders-page?populate=widgets.cover"
export const LEADER_PAGE = "/api/doctor-page?populate=widgets.cover,widgets.items.img,seo"
export const SERVICE_PAGE = "/api/service-page?populate=widgets.items.img,widgets.items.cover,widgets.link,widgets.cover,seo"
export const LEADER_SINGLE = "/api/doctors"
export const PACKAGES_PAGE = "/api/packages"   
export const ISSUE_SINGLE = "/api/issues"
export const ISSUES_PAGE = "/api/issues-page?populate=widgets.cover,widgets.items.cover,seo"
export const MEDIA_PAGE = "/api/media?populate=widgets.cover,widgets.items.cover,widgets.popular.cover,widgets.latest.cover,seo"
export const MEDIA_SINGLE = "/api/articles"
export const PACKAGE_PAGE = "/api/package-page?populate=widgets.items.img,widgets.cover,widgets.items.cover,widgets.items.category"
