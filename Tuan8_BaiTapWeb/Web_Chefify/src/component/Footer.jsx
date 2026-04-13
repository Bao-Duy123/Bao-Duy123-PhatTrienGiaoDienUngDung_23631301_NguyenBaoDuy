import { useEffect, useState } from 'react';
import LoginButton from './LoginButton';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { mockApi } = await import('../services/mockApi');
        const [data, img] = await Promise.all([
          mockApi.getFooterData(),
          mockApi.getBrandingImages(),
        ]);
        setFooterData(data);
        setImages(img);
      } catch (error) {
        console.error('Failed to load footer data:', error);
      }
    };

    loadData();
  }, []);

  if (!footerData || !images) {
    return null;
  }

  return (
    <footer className="mt-8 bg-slate-900 text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-10 md:grid-cols-[1.8fr,1fr,1fr]">
        <div>
          <h4 className="text-sm font-semibold">{footerData.about.title}</h4>
          <p className="mt-3 max-w-[380px] text-sm text-slate-300">
            {footerData.about.description}
          </p>
          <div className="mt-4 flex max-w-[360px] items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none"
            />
            <button type="button" className="h-10 rounded-md bg-pink-500 px-4 text-sm font-semibold text-white">
              Send
            </button>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <h4 className="font-semibold text-white">Learn More</h4>
          <ul className="mt-3 space-y-2">
            {footerData.learnMore.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-pink-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-slate-300">
          <h4 className="font-semibold text-white">Recipes</h4>
          <ul className="mt-3 space-y-2">
            {footerData.recipes.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-pink-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between border-t border-slate-800 px-6 py-4 text-xs text-slate-300">
        <img src={images.footerLogo} alt="Chefify" className="h-7 w-auto" />
        <span>{footerData.company}</span>
        <span>Terms of Service | Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
