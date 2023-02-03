import React from 'react';

export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-col justify-center items-start max-w-4xl mx-auto mt-8 pb-16'>

      {children}

    </section>
  )
}