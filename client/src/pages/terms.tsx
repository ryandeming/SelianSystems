import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Terms() {
  useMetaTags({
    title: "Terms of Service - Selian Systems",
    description: "Terms of Service for Selian Systems. Read our terms and conditions for using our website and services.",
    ogTitle: "Terms of Service - Selian Systems",
    ogDescription: "Terms of Service for Selian Systems. Read our terms and conditions for using our website and services.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing or using Selian Systems' website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Selian Systems' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
              <p className="text-white/80 leading-relaxed">
                Selian Systems provides website development, marketing automation, and CRM services for contractors. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Our services are provided on a subscription basis. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Pay all fees associated with your subscription</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method for recurring fees</li>
                <li>Understand that fees are non-refundable except as required by law</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Content</h2>
              <p className="text-white/80 leading-relaxed">
                You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for the purpose of providing and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Prohibited Uses</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to access our services without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
              <p className="text-white/80 leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Selian Systems and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer</h2>
              <p className="text-white/80 leading-relaxed">
                The materials on Selian Systems' website are provided on an "as is" basis. Selian Systems makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-white/80 leading-relaxed">
                In no event shall Selian Systems or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Selian Systems' website, even if Selian Systems or a Selian Systems authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="text-white/80 leading-relaxed">
                You agree to indemnify and hold harmless Selian Systems, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of our services or violation of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p className="text-white/80 leading-relaxed">
                We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service. Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
              <p className="text-white/80 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Selian Systems operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
              <p className="text-white/80 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                <strong>Selian Systems</strong><br />
                Email: legal@seliansystems.com<br />
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

