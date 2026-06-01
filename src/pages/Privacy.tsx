import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — DG Scales</title>
        <meta
          name="description"
          content="DG Scales privacy policy: how we collect, use, and protect your personal information when you visit our site or book a consultation."
        />
        <link rel="canonical" href="https://dgscales.lovable.app/privacy" />
        <meta property="og:title" content="Privacy Policy — DG Scales" />
        <meta property="og:description" content="How DG Scales collects, uses, and protects your data." />
        <meta property="og:url" content="https://dgscales.lovable.app/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Legal</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Introduction</h2>
                <p>
                  DG Scales ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect when you visit dgscales.lovable.app, book a consultation, or otherwise interact with our services, and how we use and protect that information.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Contact information</strong> you provide when booking a consultation through Cal.com (name, email, phone, business details).</li>
                  <li><strong className="text-foreground">Usage data</strong> such as pages viewed, referring URLs, device, browser, and approximate location.</li>
                  <li><strong className="text-foreground">Cookies and tracking pixels</strong>, including the Meta (Facebook) Pixel, used to measure ad performance and improve our marketing.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to inquiries and schedule consultations.</li>
                  <li>To deliver and improve our advertising services.</li>
                  <li>To measure marketing performance and retarget visitors via platforms like Meta.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Sharing of Information</h2>
                <p>
                  We do not sell your personal information. We share data only with trusted service providers that help us operate the site and our business (e.g., Cal.com for scheduling, Meta for advertising analytics, email providers for notifications), and as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Cookies & Tracking</h2>
                <p>
                  We use cookies and similar technologies, including the Meta Pixel, to understand site usage and improve ad performance. You can disable cookies in your browser settings or opt out of personalized ads through your Meta ad preferences.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Your Rights</h2>
                <p>
                  Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data. To exercise any of these rights, contact us at the email below.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Data Security</h2>
                <p>
                  We implement reasonable safeguards to protect your information, but no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  Questions about this policy? Email{" "}
                  <a href="mailto:dgsales.business@gmail.com" className="text-accent hover:underline">
                    dgsales.business@gmail.com
                  </a>{" "}
                  or call <a href="tel:+16174802895" className="text-accent hover:underline">(617) 480-2895</a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
