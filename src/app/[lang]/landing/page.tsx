import Image from 'next/image';

import { Locale } from '@/src/types';
import { getDictionary } from '../dictionaries';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import './landing.css';

interface Props {
  params: {
    lang: Locale;
  };
}

const LandingPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div className='bg-gray-700'>
      <section className='landing-bg-image'>
        <div className='z-20 bg-gradient-to-b from-black/80 to-black/50 px-6 text-center h-full'>
          <div className='max-w-screen-lg mx-auto'>
            <Navbar lang={lang} />

            <h1 className='text-[32px] leading-tight font-bold mt-[30px] text-pretty lg:mt-20 lg:font-black lg:text-5xl lg:leading-normal'>
              {dict.landing.title}
            </h1>

            <p className='text-lg mt-4 lg:text-2xl'>{dict.landing.slogan}</p>

            <div className='px-6 pb-10'>
              <h3 className='text-lg mt-6 lg:text-xl'>
                {dict.landing.registerSubtitle}
              </h3>

              <RegisterForm dictionary={dict} />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-black'>
        <h2>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>

        <Image src='/tv.png' alt='TV' width={530} height={400} />
      </section>
    </div>
  );
};

export default LandingPage;
