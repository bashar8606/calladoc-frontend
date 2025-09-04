import { ISSUE_SINGLE, LEADER_SINGLE, MEDIA_SINGLE, PACKAGES_PAGE, PAGES, SERVICES } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";


export async function getPage(slug) {
    const url = `${PAGES}/${slug}`
    const urlParamsObject = {
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}

export async function getSingleService(slug) {
    const url = `${SERVICES}/${slug}`
    const urlParamsObject = {
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}

export async function getSinglePackage(slug) {
    const url = `${PACKAGES_PAGE}/${slug}`
    const urlParamsObject = {
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}

export async function getSingleLeader(slug) {
    const url = `${LEADER_SINGLE}/${slug}`
 
    const data = await strapiFetch(url);
    return data;
}

export async function getSingleIssue(slug, lang) {
    const url = `${ISSUE_SINGLE}/${slug}`
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}




export async function getSingleMedia(slug, lang) {
    const url = `${MEDIA_SINGLE}/${slug}`

    const data = await strapiFetch(url);
    return data;
}
