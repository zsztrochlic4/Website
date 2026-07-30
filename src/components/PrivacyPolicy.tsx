const emailLink = (
  <a
    href="mailto:info@strengthhubonline.com"
    className="font-semibold text-[#9FE264] underline decoration-[#7ED957]/35 underline-offset-4 transition hover:text-white"
  >
    info@strengthhubonline.com
  </a>
);

const PrivacyPolicy = () => {
  return (
    <main className="relative overflow-hidden bg-[#0A0A0B] pb-20 pt-[72px] text-white sm:pb-28">
      <div className="pointer-events-none absolute left-[-14rem] top-24 h-[32rem] w-[32rem] rounded-full bg-[#7ED957]/[0.07] blur-[120px]" />

      <div className="container relative">
        <article className="mx-auto max-w-[820px] py-14 sm:py-20">
          <header className="border-b border-white/[0.08] pb-10 sm:pb-12" data-reveal>
            <p className="eyebrow">StrengthHub Online</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm font-semibold text-[#9FE264]">Last updated: 29 July 2026</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/[0.64]">
              <p>
                StrengthHub Online (&quot;StrengthHub&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a fitness, training and
                nutrition app for university students. This policy explains what information we collect, how we use it, who we share it with, and the choices and rights you have. It is written to reflect what the app actually does.
              </p>
              <p>If you have any questions, contact us at {emailLink}.</p>
            </div>
          </header>

          <div className="space-y-12 pt-10 text-base leading-8 text-white/[0.64] sm:pt-12">
            <section aria-labelledby="privacy-who-we-are">
              <h2 id="privacy-who-we-are" className="text-2xl font-black tracking-[-0.025em] text-white">
                1. Who we are
              </h2>
              <div className="mt-5 space-y-5">
                <p>
                  StrengthHub Online is operated by <strong className="font-semibold text-white">Strengthhubonline</strong>. For any privacy question or request, email {emailLink}.
                </p>
                <p>
                  The app is intended for users <strong className="font-semibold text-white">aged 18 and over</strong> who are studying at university. It is not directed at children (see section 9).
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-information">
              <h2 id="privacy-information" className="text-2xl font-black tracking-[-0.025em] text-white">
                2. What information we collect
              </h2>
              <div className="mt-5 space-y-6">
                <p>We only collect what the app needs to work for you:</p>

                <div>
                  <h3 className="font-bold text-white">Account information</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>Your email address and a password (used to create and secure your account).</li>
                    <li>Optionally, a display name you choose.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white">Your fitness and profile data <span className="font-normal text-white/[0.64]">(the content you create in the app)</span></h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>Your goals, training experience and preferences.</li>
                    <li>Workouts, sessions and exercises you log.</li>
                    <li>Nutrition entries, meal logs and food &quot;check in&quot; tags.</li>
                    <li>Body metrics you choose to enter, such as weight, and streaks/progress.</li>
                    <li>Any injuries, limitations or dietary preferences you tell the app so it can tailor guidance to you.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white">Meal photos (only when you use the photo scan)</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>
                      When you take or upload a photo of a meal, the image is sent to Google&apos;s Gemini AI to estimate its nutrition (see section 4). <strong className="font-semibold text-white">We do not store your meal photos on our servers.</strong> Only the resulting estimate (for example the meal name and calorie/macro figures) is saved to your account if you choose to log it.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white">Device and notification data</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>
                      If you turn on notifications, we store a &quot;push token&quot; for your device so we can send the reminders you asked for. You can turn this off at any time in the app&apos;s settings or your device settings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white">Technical data</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>
                      Basic information needed to run a mobile app and keep it secure (for example app version and general error information). We do <strong className="font-semibold text-white">not</strong> use external analytics or advertising SDKs.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="privacy-use">
              <h2 id="privacy-use" className="text-2xl font-black tracking-[-0.025em] text-white">
                3. How we use your information
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <p>We use your information to:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>Create and secure your account and let you sign in.</li>
                    <li>Provide the app&apos;s core features: training plans, logging, progress tracking, nutrition guidance and reminders.</li>
                    <li>Personalise your experience (for example, respecting your goals, injuries and dietary preferences).</li>
                    <li>Estimate the nutrition of meals you photograph, when you use that feature.</li>
                    <li>Send you the notifications you have enabled.</li>
                    <li>Keep the service safe, prevent abuse, and fix problems.</li>
                  </ul>
                </div>
                <p>
                  We do <strong className="font-semibold text-white">not</strong> sell your personal information, and we do <strong className="font-semibold text-white">not</strong> track you across other apps or websites for advertising.
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-ai">
              <h2 id="privacy-ai" className="text-2xl font-black tracking-[-0.025em] text-white">
                4. Artificial intelligence (AI) features
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <p>Some features use Google&apos;s Gemini AI, provided through Firebase AI Logic:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li>
                      <strong className="font-semibold text-white">Meal photo scan:</strong> the photo you submit is sent to Google&apos;s Gemini AI to estimate its nutrition. The result is an <strong className="font-semibold text-white">estimate only</strong> and is not a substitute for a nutrition label or professional dietary advice.
                    </li>
                    <li>Any other guidance assisted by AI sends the relevant text you provide to Google&apos;s Gemini AI to generate a response.</li>
                  </ul>
                </div>
                <p>
                  When you use these features, the data you submit is processed by Google in accordance with Google&apos;s privacy terms. We ask you not to submit sensitive personal information you would not want processed this way.
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-sharing">
              <h2 id="privacy-sharing" className="text-2xl font-black tracking-[-0.025em] text-white">
                5. Who we share your information with
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <p>We share data only with the service providers that run the app for us, and only as needed to provide the service:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li><strong className="font-semibold text-white">Google Firebase:</strong> authentication, cloud database and storage, and hosting (Google LLC / Google Cloud).</li>
                    <li><strong className="font-semibold text-white">Google Gemini (via Firebase AI Logic):</strong> powers the AI features described in section 4.</li>
                  </ul>
                </div>
                <p>
                  These providers process data on our behalf under their own terms and security commitments. We may also disclose information if required by law, or to protect the rights, safety and security of our users and the service.
                </p>
                <p>We do <strong className="font-semibold text-white">not</strong> sell your personal information to anyone.</p>
              </div>
            </section>

            <section aria-labelledby="privacy-storage">
              <h2 id="privacy-storage" className="text-2xl font-black tracking-[-0.025em] text-white">
                6. Where your data is stored and how we protect it
              </h2>
              <p className="mt-5">
                Your account and app data are stored using Google Firebase, in a data centre region located in <strong className="font-semibold text-white">Australia</strong>. We rely on Firebase&apos;s security controls, enforce access rules so that you can generally only read and write your own data, and take reasonable steps to protect your information. No online service can be guaranteed to be 100% secure, but we work to keep your data safe.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention" className="text-2xl font-black tracking-[-0.025em] text-white">
                7. How long we keep your data
              </h2>
              <p className="mt-5">
                We keep your account and app data for as long as your account is active. If you delete your account (see section 8), we delete your personal data or remove identifying details, except where we are required to keep certain records by law.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="text-2xl font-black tracking-[-0.025em] text-white">
                8. Your rights and choices
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <p>You can:</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#7ED957]">
                    <li><strong className="font-semibold text-white">Access and correct</strong> your information. Most of it is editable directly in the app.</li>
                    <li><strong className="font-semibold text-white">Delete your account and data.</strong> You can request deletion from within the app or by emailing {emailLink}. When you delete your account, we remove your login and associated personal data.</li>
                    <li><strong className="font-semibold text-white">Control notifications.</strong> Turn reminders on or off in the app&apos;s settings or in your device settings.</li>
                    <li><strong className="font-semibold text-white">Contact us</strong> about any privacy request at {emailLink}.</li>
                  </ul>
                </div>
                <p>
                  Depending on where you live, you may have additional rights under local privacy law (for example, the Australian Privacy Principles). Contact us and we will help.
                </p>
              </div>
            </section>

            <section aria-labelledby="privacy-children">
              <h2 id="privacy-children" className="text-2xl font-black tracking-[-0.025em] text-white">
                9. Children&apos;s privacy
              </h2>
              <p className="mt-5">
                StrengthHub Online is intended for users <strong className="font-semibold text-white">aged 18 and over</strong>. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal information, contact us and we will delete it.
              </p>
            </section>

            <section aria-labelledby="privacy-disclaimer">
              <h2 id="privacy-disclaimer" className="text-2xl font-black tracking-[-0.025em] text-white">
                10. Health and wellbeing disclaimer
              </h2>
              <p className="mt-5">
                StrengthHub Online provides <strong className="font-semibold text-white">general fitness, training and nutrition information for health and wellbeing</strong>. It is <strong className="font-semibold text-white">not a medical device</strong> and does not provide medical advice, diagnosis or treatment. Calorie and nutrition figures (including AI photo estimates) are approximate. Always seek advice from a qualified professional before making significant changes to your exercise or diet, and for any medical or mental health concern.
              </p>
            </section>

            <section aria-labelledby="privacy-changes">
              <h2 id="privacy-changes" className="text-2xl font-black tracking-[-0.025em] text-white">
                11. Changes to this policy
              </h2>
              <p className="mt-5">
                We may update this policy from time to time. When we do, we will change the &quot;Last updated&quot; date above and, where appropriate, notify you in the app. Your continued use of StrengthHub Online after an update means you accept the revised policy.
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact" className="text-2xl font-black tracking-[-0.025em] text-white">
                12. Contact us
              </h2>
              <address className="mt-5 not-italic">
                <p>Strengthhubonline</p>
                <p>Email: {emailLink}</p>
              </address>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
