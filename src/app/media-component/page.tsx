import { ControlVideoSection } from "@/app/media-component/_components/sections/control-video";
import { DifferentVersionsSection } from "@/app/media-component/_components/sections/different-versions";
import { HeroSection } from "@/app/media-component/_components/sections/hero";
import { HowSection } from "@/app/media-component/_components/sections/how";
import { IntroductionSection } from "@/app/media-component/_components/sections/introduction";
import { OneForAllSection } from "@/app/media-component/_components/sections/one-for-all";
import { ProblemSection } from "@/app/media-component/_components/sections/problem";
import { Main } from "@/lib/ui/craft";

export default function MediaPage() {
  return (
    <Main>
      <HeroSection />
      <IntroductionSection />
      <ProblemSection />
      <HowSection />
      <ControlVideoSection />
      <DifferentVersionsSection />
      <OneForAllSection />
    </Main>
  );
}
