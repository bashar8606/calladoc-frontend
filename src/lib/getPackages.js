import { PACKAGE_SINGLE } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";

export async function getPackage(slug, lang) {
    const url = `${PACKAGE_SINGLE}/${slug}`;
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}

export async function getPackages(lang) {
    const url = PACKAGE_SINGLE;
    const urlParamsObject = {
        locale: lang,
    };
    const data = await strapiFetch(url, urlParamsObject);
    return data;
}