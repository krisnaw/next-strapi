import {fetchAPI} from "@/utils/fetch-api";
import {getStrapiURL} from "@/utils/get-strapi-url";
import qs from "qs";

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              image: {
                fields: [
                  "url",
                  "alternativeText"
                ]
              },
              logo: {
                populate: {
                  image: {
                    fields: [
                      "url",
                      "alternativeText"
                    ]
                  }
                }
              },
              cta: true
            }
          },
          "blocks.info-block": {
            populate: {
              image: {
                fields: [
                  "url",
                  "alternativeText"
                ]
              },
              cta: true
            }
          }
        }
      }
    }
  }
)

export async function getHomePage() {
  const path = "/api/tf-home-page"
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: true,
        cta: true,
      },
    },
  },
});

export async function getGlobalSettings() {
  const path = "/api/tf-global"
  const BASE_URL = getStrapiURL()
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return await fetchAPI(url.href, { method: "GET" });
}