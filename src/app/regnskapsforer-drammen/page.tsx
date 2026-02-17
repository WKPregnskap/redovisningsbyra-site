import { createMetadata } from "@/lib/metadata";
import { cityLandings } from "@/content/city-landings";
import { CityLandingContent } from "@/components/sections/city-landing-content";

const landing = cityLandings.find((item) => item.slug === "regnskapsforer-drammen")!;

export const metadata = createMetadata({
  title: landing.title,
  description: landing.description,
  path: "/regnskapsforer-drammen",
});

export default function Page() {
  return <CityLandingContent landing={landing} />;
}
