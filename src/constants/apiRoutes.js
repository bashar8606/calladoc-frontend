//footer
export const FOOTER = "/api/footer";
//header
export const HEADER = "/api/header";

//pages
export const GLOBAL = "/api/global?populate[favicon]=true&populate[menu][populate][submenu]=true";

export const HOME_PAGE = "/api/home?populate=widgets.items.img";
export const CONTACT_PAGE = "/api/contact-page?populate=widgets.cover,seo,widgets.links.icon";
export const PAGES = "/api/pages";
export const BLOGS = "/api/articles";
export const CATEGORIES = "/api/categories";
export const BLOG_PAGE = "/api/blog";
// export const LEADER_PAGE = "/api/leaders-page?populate=widgets.cover"
export const LEADER_PAGE = "/api/leaders-page?populate=widgets.cover,widgets.items.cover,seo"
export const LEADER_SINGLE = "/api/leaders"
export const ISSUE_SINGLE = "/api/issues"
export const ISSUES_PAGE = "/api/issues-page?populate=widgets.cover,widgets.items.cover,seo"
export const MEDIA_PAGE = "/api/media-page?populate=widgets.cover,widgets.items.cover,widgets.popular.cover,widgets.latest.cover,seo"
export const MEDIA_SINGLE = "/api/articles"
