export default function Contact() {
  const contactEmail = "chronomind.contact.dev@gmail.com";

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="mb-12 border-b border-slate-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">
            We&apos;d love to hear from you!
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-xl font-bold mb-3">Get in Touch</h2>
            <p>
              If you have any questions, feedback, or inquiries, please don&apos;t hesitate to reach out to us.
            </p>
            <p>
              You can contact us directly via email at:
            </p>
            <p className="text-sky-500 font-semibold">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Support</h2>
            <p>
              For support-related questions, please include as much detail as possible regarding your issue, including screenshots if applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Business Inquiries</h2>
            <p>
              For business partnerships or media inquiries, please use the same contact email, and we will get back to you as soon as possible.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}