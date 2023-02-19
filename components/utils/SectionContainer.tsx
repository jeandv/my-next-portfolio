import React from 'react';

export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='min-w-xs max-w-screen-md flex flex-col justify-center items-center lg:items-start mx-auto mt-8 pb-16'>

      {children}

    </section>
  )
}