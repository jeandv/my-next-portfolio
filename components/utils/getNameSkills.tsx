import { Badge } from '@mantine/core';
import { useTheme } from 'next-themes';

export const getNameSkills = (skills: string) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { resolvedTheme } = useTheme();

  // return skills.map((skill, i) => <Badge key={i} color={resolvedTheme === 'dark' ? 'dark' : 'gray'} size='lg' radius='xs' variant='filled'>{skill}</Badge>);

  return <Badge color={resolvedTheme === 'dark' ? 'dark' : 'gray'} size='lg' radius='xs' variant='filled'>{skills}</Badge>

}