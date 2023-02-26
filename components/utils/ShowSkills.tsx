'use client';

import { useTheme } from 'next-themes';
import { Badge } from '@mantine/core';

export const ShowSkills = ({ skills }: { skills: string | string[] }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { resolvedTheme } = useTheme();

  if (skills instanceof Array) {
    return (
      <>
        {
          skills.map((skill) => <Badge key={skill} color={resolvedTheme === 'dark' ? 'dark' : 'gray'} size='lg' radius='xs' variant='filled'>{skill}</Badge>)
        }
      </>
    )
  }


  return <Badge color={resolvedTheme === 'dark' ? 'dark' : 'gray'} size='lg' radius='xs' variant='filled'>{skills}</Badge>
}