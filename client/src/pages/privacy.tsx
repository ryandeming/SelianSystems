import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Privacy() {
  useMetaTags({
    title: "Privacy Policy - Selian Systems",
    description: "Privacy Policy for Selian Systems. Learn how we collect, use, and protect your personal information.",
    ogTitle: "Privacy Policy - Selian Systems",
    ogDescription: "Privacy Policy for Selian Systems. Learn how we collect, use, and protect your personal information.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                Selian Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, industry, business type)</li>
                <li>Usage data (how you interact with our website and services)</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Communicate with you, including for customer service and marketing purposes</li>
                <li>Send you updates, promotional materials, and other information</li>
                <li>Process your transactions and manage your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3.1. Text Messaging and Phone Calls</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                By providing your phone number to Selian Systems, you consent to receive text messages (SMS) and phone calls from us. We may use automated technology to send you text messages and make phone calls for the following purposes:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4 mb-4">
                <li>Service-related communications (account updates, appointment reminders, service notifications)</li>
                <li>Customer support and assistance</li>
                <li>Important updates about our services</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Message Frequency:</strong> Message frequency varies. You may receive messages as needed for service-related communications.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Message and Data Rates:</strong> Standard message and data rates may apply. Please check with your mobile carrier for details about your messaging plan.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Opt-Out:</strong> You may opt out of receiving text messages at any time by replying "STOP" to any text message you receive from us, or by contacting us directly. You may opt out of receiving phone calls by requesting to be added to our do-not-call list. After opting out, you may still receive service-related messages that are necessary for the operation of your account.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong>Help:</strong> For assistance with text messages, reply "HELP" to any message you receive, or contact us at the information provided in the Contact Us section.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong>Carrier Information:</strong> We are not liable for delayed or undelivered messages. Supported carriers include, but are not limited to: AT&T, T-Mobile, Verizon, Sprint, and other major carriers. Carrier coverage is not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>With service providers who assist us in operating our services</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-white/80 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-white/80 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="text-white/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-white/80 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                <strong>Selian Systems</strong><br />
                Email: privacy@seliansystems.com<br />
                Website: https://seliansystems.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

