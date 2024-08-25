import { ComplexitySection } from "@/app/assessing-design/_components/sections/complexity";
import { HeroSection } from "@/app/assessing-design/_components/sections/hero";
import { HighLevelAssumptionsSection } from "@/app/assessing-design/_components/sections/high-level-assumtions";
import { IntroductionSection } from "@/app/assessing-design/_components/sections/introduction";
import { PinPointsSection } from "@/app/assessing-design/_components/sections/pinpoints";
import { QuestionsSection } from "@/app/assessing-design/_components/sections/questions";
import { Main } from "@/lib/ui/craft";

export default function AssessingDesign() {
  return (
    <>
      <Main>
        <HeroSection />
        <IntroductionSection />
        <HighLevelAssumptionsSection />
        <PinPointsSection />
        <ComplexitySection />
        <QuestionsSection />
      </Main>
    </>
  );
}
