export interface CouncilMemberType {

  name: string;
  role: string;
  github_link: string;
  linkedin_link: string;
  quote: string;
  quote2: string;
  quote3: string;
  image?: string;
}

export interface MemberType {

  github_link: string;
  linkedin_link: string;
  name: string;
  quote: string;
  quote2: string;
  quote3: string;
  image?: string;
}

export interface EventsType {
  title: string;
  description: string;
  image?: string;
}
