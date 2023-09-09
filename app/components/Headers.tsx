import React from 'react';
import Link from 'next/link';

const Headers = () => {
  return (
    <header className='bg-gradient-to-b from-sky-200 to-sky-50 border shadow p-2 flex'>
      <Link className='text-sky-600' href={'/'}>
        Home
      </Link>
    </header>
  );
};

export default Headers;
