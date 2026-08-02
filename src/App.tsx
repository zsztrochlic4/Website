import { useEffect, useState, type ReactNode } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import UniqueAbout from "./components/UniqueAbout";
import Process from "./components/Process";
import TheStudio from "./components/TheStudio";
import MeetTheCoach from "./components/MeetTheCoach";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LegalDocument from "./components/LegalDocument";
import HomeSections from "./components/HomeSections";
import NotFound from "./components/NotFound";
import StickyMobileCta from "./components/StickyMobileCta";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { legalDocsBySlug, type LegalSlug } from "./content/legal";

const normalizePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

function legalPage(slug: LegalSlug): { title: string; node: ReactNode } {
  const doc = legalDocsBySlug[slug];
  return {
    title: doc.documentTitle,
    node: (
      <>
        <Navbar />
        <LegalDocument slug={slug} />
        <Footer />
      </>
    ),
  };
}

function renderPage(path: string): { title: string; node: ReactNode } {
  switch (path) {
    case '/privacy':
      return legalPage('privacy');
    case '/terms':
      return legalPage('terms');
    case '/health-safety':
      return legalPage('health-safety');
    case '/platform':
      return {
        title: 'Platform | StrengthHub Online',
        node: (
          <>
            <Navbar />
            <main className="pt-[72px]">
              <UniqueAbout />
              <Process />
              <ContactForm />
            </main>
            <Footer />
            <StickyMobileCta />
          </>
        ),
      };
    case '/universities':
      return {
        title: 'For Universities & Organisations | StrengthHub Online',
        node: (
          <>
            <Navbar />
            <main className="pt-[72px]">
              <TheStudio />
              <ContactForm />
            </main>
            <Footer />
            <StickyMobileCta />
          </>
        ),
      };
    case '/about':
      return {
        title: 'Our Story | StrengthHub Online',
        node: (
          <>
            <Navbar />
            <main className="pt-[72px]">
              <MeetTheCoach />
              <ContactForm />
            </main>
            <Footer />
            <StickyMobileCta />
          </>
        ),
      };
    case '/':
      return {
        title: 'StrengthHub Online | Young Adult Fitness & Wellbeing Platform',
        node: (
          <>
            <Navbar />
            <Hero />
            <StatsBanner />
            <HomeSections />
            <ContactForm />
            <Footer />
            <StickyMobileCta />
          </>
        ),
      };
    default:
      return {
        title: 'Page not found | StrengthHub Online',
        node: (
          <>
            <Navbar />
            <div className="pt-[72px]">
              <NotFound />
            </div>
            <Footer />
          </>
        ),
      };
  }
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  // Re-run the scroll reveal for each route so newly mounted content animates in.
  useScrollAnimation(path);

  useEffect(() => {
    const syncFromLocation = () => setPath(normalizePath(window.location.pathname));

    // Intercept internal link clicks and navigate client-side (no full reload),
    // which removes the black loading gap on mobile. External links, new-tab
    // links, downloads and in-page hash links keep their default behaviour.
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (
        !href ||
        !href.startsWith('/') ||
        href.includes('#') ||
        anchor.getAttribute('target') === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return;
      }

      event.preventDefault();
      const next = normalizePath(href);
      if (next !== normalizePath(window.location.pathname)) {
        window.history.pushState({}, '', href);
      }
      setPath(next);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', syncFromLocation);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const { title, node } = renderPage(path);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // key={path} remounts the page so the content-fade animation replays per route.
  return (
    <div key={path} className="page-enter min-h-screen">
      {node}
    </div>
  );
}

export default App;
