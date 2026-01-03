import cinematic from "../assets/cinematic.jpg";
import wedding from "../assets/wedding.jpg";
import owner from "../assets/owner.jpg";
import {
  hero1,
  hero4,
  hero5,
  portrait,
  preWedding,
  portraitOne,
  cinematicOne,
  cinematicTwo,
  cinematicThree,
  engagement,
  engagementOne,
  engagementTwo,
} from "../assets/assets";

export const portfolioData = [
  {
    title: "Wedding Shoot",
    slug: "wedding-shoot",
    type: "photo",
    cover: hero5,
    images: [hero1, hero4, hero5],
  },
  {
    title: "Cinematic Film",
    slug: "cinematic-film",
    type: "video",
    cover: cinematicOne,
    images: [cinematicOne, cinematicTwo, cinematicThree],
  },
  {
    title: "Engagement Shoot",
    slug: "engagement-shoot",
    type: "photo",
    cover: engagement,
    images: [engagement, engagementOne, engagementTwo],
  },
  {
    title: "Pre Wedding & Portrait",
    slug: "pre-wedding-&-portrait-photography",
    type: "photo",
    cover: portrait,
    images: [portrait, preWedding, portraitOne],
  },
  {
    title: "Event Coverage",
    slug: "event-coverage",
    type: "video",
    cover: cinematic,
    images: [cinematic, wedding, owner],
  },
  {
    title: "Portrait Photography",
    slug: "portrait-photography",
    type: "photo",
    cover: owner,
    images: [owner, owner, wedding],
  },
  {
    title: "Fashion Shoot",
    slug: "fashion-shoot",
    type: "photo",
    cover: cinematic,
    images: [cinematic, owner, wedding],
  },
  {
    title: "Product Shoot",
    slug: "product-shoot",
    type: "photo",
    cover: wedding,
    images: [wedding, cinematic, owner],
  },
  {
    title: "Drone",
    slug: "drone",
    type: "video",
    cover: cinematic,
    images: [cinematic, wedding, owner],
  },
  {
    title: "Baby Shoot",
    slug: "baby-shoot",
    type: "photo",
    cover: owner,
    images: [owner, wedding, cinematic],
  },
];
