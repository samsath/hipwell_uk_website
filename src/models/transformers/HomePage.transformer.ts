import type {HomepageDocument} from "@/models/types.generated.ts";
import {asImageSrc, asText, asHTML} from "@prismicio/client";
import type {HomePageMainProps, HomePageSEOProps} from "@/models/types.generic.ts";

export const homePageMain = (raw: HomepageDocument): HomePageMainProps => {
    return {
        'header': asText(raw.data.header),
        'tagline': asText(raw.data.tagline),
        'description': asHTML(raw.data.description),
        'body': raw.data.body
    }
}

export const homePageSEO = (raw: HomepageDocument): HomePageSEOProps => {
    return {
        'og_title': asText(raw.data.og_title),
        'og_description': asText(raw.data.og_description),
        'og_image': asImageSrc(raw.data.og_image) || '',
    }
}
