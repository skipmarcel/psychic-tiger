const photo = '{ alt, asset, hotspot, crop }';

// Everything the site needs, in one request.
export const SITE_QUERY = `{
  "settings": *[_id == "siteSettings"][0]{ gymName, addressLine1, addressLine2, mapsUrl },
  "home": *[_id == "homePage"][0]{
    heroSlides[]{ _key, alt, asset, hotspot, crop },
    slideSeconds, introHeading, introParagraphs, gymEyebrow, gymHeading, gymText
  },
  "about": *[_id == "aboutPage"][0]{ heading, photo ${photo}, photoCaption, story, signature },
  "services": *[_id == "servicesPage"][0]{
    eyebrow, heading,
    services[]{ _key, title, image ${photo}, prices[]{ _key, label, price }, note, policyTitle, policyText, homeSummary, homePrice }
  },
  "contact": *[_id == "contactPage"][0]{ eyebrow, heading, photo ${photo}, serviceChoices, successHeading, successText }
}`;
