export default function PrivacyPolicy() {
  const lastUpdated = "April 18 2026"; // Replace with actual date
  const contactEmail = "chronomind.contact.dev@gmail.com"; // Replace with your email

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="mb-12 border-b border-slate-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-xl font-bold mb-3">1. Overview</h2>
            <p>
              Chronomind is built with a "privacy-first" philosophy. We believe that your data 
              belongs to you. Our application is designed to function without the need to collect, 
              store, or transmit any of your personal identification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Data Collection</h2>
            <p className="mb-4">
              <strong>Personal Data:</strong> We do not collect personally identifiable information 
              (such as your name, email address, or phone number). 
            </p>
            <p>
              <strong>Local Storage:</strong> Any data you create within the app is stored locally 
              on your device using encrypted storage. We have no access to this data.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-3 underline decoration-sky-500">3. Frameworks & Service Providers</h2>
            <p className="text-sm">
              Our app is developed using the <strong>Expo/React Native</strong> framework. While we 
              do not personally collect data, Expo may process minimal technical identifiers 
              (such as device type or unique installation tokens) solely to facilitate essential 
              app functions like Over-the-Air (OTA) updates. This data is non-identifying and 
              is not used for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Children's Privacy</h2>
            <p>
              Our services do not address anyone under the age of 13. We do not knowingly collect 
              personally identifiable information from children. If you are a parent and discover 
              your child has provided us with personal data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this policy, please reach out via email:
            </p>
            <a 
              href={`mailto:${contactEmail}`} 
              className="inline-block mt-2 text-sky-500 hover:text-sky-600 font-medium transition-colors"
            >
              {contactEmail}
            </a>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-zinc-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Chronomind. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}