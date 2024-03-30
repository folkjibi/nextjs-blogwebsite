import AboutPage from "@/components/AboutPage";
import Banner from "@/components/Banner";
import BlogPage from "@/components/BlogPage";
import ContactPage from "@/components/ContactPage";

export default function Home() {
  return (
    <main>
      <Banner />
      <BlogPage />
      <AboutPage />
      <ContactPage />
    </main>
  );
}
