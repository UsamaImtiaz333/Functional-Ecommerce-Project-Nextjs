import CompanyFeedBack from "@/components/CompanyFeedBack";
import StatsCard from "@/components/StatsCard";
import TeamCard from "@/components/TeamCard";
import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "About-Page"
};

function About() {
  return (
    <div>
      <AboutPage />
      <StatsCard />
      <TeamCard />
      <CompanyFeedBack />
    </div>
  );
}

export default About;
