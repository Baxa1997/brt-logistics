import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Feedback from "@/components/Feedback";
import Mission from "@/components/Mission";
import QuestionsSection from "@/components/QuestionsSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mission />
      <Services />
      <BlogSection />
      <QuestionsSection />
      <Feedback />
    </main>
  );
}
