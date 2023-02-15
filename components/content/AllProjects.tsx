import { CardProject } from './CardProject';
import { CardProjectProps } from '@/types';

export const AllProjects = (resultSearch: CardProjectProps[]) => {

  return resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />);

}