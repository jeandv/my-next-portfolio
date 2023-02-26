export interface TimelineEventProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export interface ExternalLinkProps {
  href: string;
  customClassName?: string;
  children: React.ReactNode;
}

export interface NavItemHeaderAnimation {
  name: string;
  x: number;
  y: number;
  w: string;
}

export interface NavItemProps {
  href: string,
  text: string;
}

export interface AnimationContainerProps {
  children: React.ReactNode;
  customClassName?: string;
  customDelay?: number;
}

export interface CardProjectProps {
  id?: string;
  title: string;
  des: string;
  // category: string[];
  category: string; // FIX THIS
  repo: string;
  link: string;
}