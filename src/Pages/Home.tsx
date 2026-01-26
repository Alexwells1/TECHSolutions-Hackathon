import Divider from "@/components/Divider";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Judging from "@/components/judging";
import Layout from "@/components/Layout";
import Objectives from "@/components/objectives";
import Prizes from "@/components/Prizes";
import StructureTimeline from "@/components/StructureTimeline";
import Team from "@/components/team";
import Theme from "@/components/Theme";
import Vision from "@/components/vision";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Divider variant="dots" />
        <Vision />
        <Divider variant="line" />
        <Objectives />
        <Divider variant="dots" />
        <Theme />
        <Divider variant="line" />
        <StructureTimeline />
        <Divider variant="dots" />
        <Judging />
        <Divider variant="dots" />
        <Prizes />
        <Divider variant="dots" />
        <Team />
      </Layout>
      <Footer />
    </div>
  );
}
