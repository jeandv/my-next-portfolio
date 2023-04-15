import { ExternalLinkProps } from '@/types';

const ExternalLink = ({ href, customClassName = 'flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease', children }: ExternalLinkProps) => (
  <a
    className={customClassName}
    target='_blank'
    rel='noreferrer'
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;