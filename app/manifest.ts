import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Advocate Naman Mishra | Allahabad High Court",
    short_name: "Adv. Naman Mishra",
    description: "Official Chamber Website of Advocate Naman Mishra, High Court of Judicature at Allahabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#E8A850",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
