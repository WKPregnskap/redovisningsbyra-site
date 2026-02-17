import { createMetadata } from "@/lib/metadata";
import { cityLandings } from "@/content/city-landings";
import { CityLandingContent } from "@/components/sections/city-landing-content";

const landing = cityLandings.find((item) => item.slug === "regnskapsforer-stavanger")!;

export const metadata = createMetadata({
  title: landing.title,
  description: landing.description,
  path: "/regnskapsforer-stavanger",
});

export default function Page() {
  return <CityLandingContent landing={landing} />;
}
