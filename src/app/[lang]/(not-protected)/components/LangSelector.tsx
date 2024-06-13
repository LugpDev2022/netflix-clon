'use client';

import { ChangeEventHandler } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
  theme: 'light' | 'dark';
}

//TODO: Add theme colors
const LangSelector: React.FC<Props> = ({ lang, theme }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (lang === value) return;

    const newPathname = pathname.replace(lang, value);
    router.push(newPathname);
  };

  return (
    <>
      <div
        className='
          bg-black/80
          border-[0.2px]
          border-white/40
          rounded-md
          text-base
          relative
          inline-flex
        '
      >
        <Image
          src='/translate.png'
          className='h-4 absolute top-1/2 left-3 transform -translate-y-1/2'
          alt='Translate'
          width={16}
          height={16}
        />

        <select
          className='bg-transparent py-1 px-8 appearance-none w-0.5 sm:w-auto sm:px-9'
          onChange={handleLangChange}
          defaultValue={lang}
        >
          <option className='bg-black' value='en'>
            English
          </option>
          <option className='bg-black' value='es'>
            Español
          </option>
        </select>

        <Image
          src='/arrow.svg'
          className='h-2 absolute top-1/2 right-3 transform -translate-y-1/2'
          alt='Arrow'
          width={8}
          height={8}
        />
      </div>
    </>
  );
};

export default LangSelector;
