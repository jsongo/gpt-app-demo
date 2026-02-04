import { useState, useEffect } from 'react';
import { AppsSDKUIProvider } from '@openai/apps-sdk-ui/components/AppsSDKUIProvider';
import { ParkRow } from './components/ParkRow';
import { parseParkData } from './data';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

function App() {
  const parks = parseParkData();
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') setView('privacy');
      else if (hash === '#terms') setView('terms');
      else setView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return (
          <>
            {/* Header */}
            <header className="px-6 pt-12 pb-4 max-w-screen-xl mx-auto">
              <h1 className="heading-2xl text-primary tracking-tighter">
                深圳公园探索
              </h1>
              <p className="text-secondary mt-2 font-medium">
                发现身边的自然之美，开启你的城市漫步
              </p>
            </header>

            {/* Content */}
            <main className="max-w-screen-xl mx-auto">
              <ParkRow title="热门推荐" parks={parks} />

              {/* Call to Action */}
              <section className="px-6 py-12">
                <div className="rounded-3xl bg-primary p-10 text-inverse shadow-2xl overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="heading-xl mb-3">准备好出发了吗？</h3>
                    <p className="text-inverse/80 text-base max-w-md leading-relaxed">
                      在这里你可以找到最详细的徒步路线、开花季节以及观鸟指南。
                    </p>
                  </div>
                  {/* Subtle decorative element */}
                  <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl" />
                </div>
              </section>
            </main>
          </>
        );
    }
  };

  return (
    <AppsSDKUIProvider linkComponent="a">
      <div className="min-h-screen bg-canvas selection:bg-primary selection:text-inverse flex flex-col">
        <div className="flex-grow">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="p-12 text-center text-tertiary text-xs font-semibold uppercase tracking-[0.2em] flex flex-col gap-4">
          <div>
            &copy; 2026 Park Explorer Demo · Apps SDK UI
          </div>
          <div className="flex justify-center gap-6 normal-case">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </AppsSDKUIProvider>
  );
}

export default App;
