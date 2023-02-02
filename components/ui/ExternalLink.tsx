import { ExternalLinkProps } from '@/types';

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    className='flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);