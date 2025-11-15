import Header from "./_components/header";
import Hero from "./_components/hero";
import TransactionCard from "./_components/transaction-card";
import FeatureCards from "./_components/feature-cards";
import FAQ from "./_components/faq";
import Newsletter from "./_components/newsletter";
import Footer from "./_components/footer";
import LogoCloud from "@/components/logo-cloud";
// import CompanyBrands from "./_components/company-brands";

export default function Landing() {
  return (
    <main className="min-h-screen w-full bg-white relative">
      <div className="relative overflow-hidden min-h-screen">
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        /> */}
        <BgPatternStyle />

        <div className="relative z-10">
          <Header />
          <Hero />
          <LogoCloud />
        </div>
      </div>

      <FeatureCards />
      <TransactionCard />
      {/* <CompanyBrands /> */}
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}

const BgPatternStyle = () => (
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
);
