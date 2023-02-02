import Link from "next/link";

const myFavProjects = [
  {
    id: '1',
    title: 'MapsApp',
    des: 'Project using mapbox.com with React + TypeScript.',
    img: 'https://cdn.sanity.io/images/jqaxrty6/production/587bf66c35c35c26dc6c20d85e9166d236227e29-1440x806.png'
  },
  {
    id: '2',
    title: 'Podedex',
    des: 'ISR Project using PokeAPI with Next.js + TypeScript.',
    img: 'https://cdn.sanity.io/images/jqaxrty6/production/0844f66435c099fb020b8235657491a3166bd713-1280x800.png'
  },
  {
    id: '3',
    title: 'GitHub Issues',
    des: 'Project using React Query with React + TypeScript.',
    img: 'https://cdn.sanity.io/images/jqaxrty6/production/bb12572785fdc98c304ff9823cab3f60bc16f8b7-1422x809.png'
  }
];

const FavProjects = () => {
  return (
    <div className='mb-16'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-10 text-black dark:text-white text-start'>
        Fav projects
      </h2>

      <div className='flex items-center justify-center gap-5 mb-8 mx-auto'>

        {
          myFavProjects.map(({ id, title, des, img }) => (
            <article key={id} className='mx-auto shadow-xl bg-cover transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-3xl max-h-70' style={{ backgroundImage: `url(${img})` }}>
              <div className='bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-3xl max-h-70'>

                <h1 className='text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300'>
                  {title}
                </h1>

                <div className='w-16 h-2 bg-indigo-700 rounded-full mb-8 transform translate-y-20 group-hover:translate-y-0 duration-300'>
                </div>

                <p className='opacity-0 text-white group-hover:opacity-80 transform duration-500 mb-5'>
                  {des}
                </p>

              </div>
            </article>
          ))
        }

      </div>

      <div className='text-1xl md:text-1xl text-center text-gray-600 dark:text-gray-400 hover:text-white'>
        <Link href='/projects' className='hover:text-white hover:underline transition-all ease'>
          See all my /projects
        </Link>
      </div>

    </div>
  )
}

export default FavProjects;