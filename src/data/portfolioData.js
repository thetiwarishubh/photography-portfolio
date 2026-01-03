import cinematic from "../assets/cinematic.jpg";
import wedding from "../assets/wedding.jpg";
import owner from "../assets/owner.jpg";
import { hero1, hero4, hero5 } from "../assets/assets";

export const portfolioData = [
  {
    title: "Wedding Shoot",
    slug: "wedding-shoot",
    type: "photo",
    cover: wedding,
    images: [hero1, hero4, hero5],
  },
  {
    title: "Cinematic Film",
    slug: "cinematic-film",
    type: "video",
    cover: cinematic,
    images: [cinematic, wedding, owner],
  },
  {
    title: "Engagement Shoot",
    slug: "engagement-shoot",
    type: "photo",
    cover: owner,
    images: [owner, wedding, cinematic],
  },
  {
    title: "Pre Wedding & Portrait",
    slug: "pre-wedding-&-portrait-photography",
    type: "photo",
    cover: wedding,
    images: [wedding, owner, cinematic],
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
