export type ILeagueId = {
  leagueId?: string;
};

export type IMemberLeagues = {
  league_id: number;
  member_id: number;
  privilege: string;
};

export interface IGeneralProps extends ILeagueId {
  data: any;
  className?: string;
}

export interface IActivityProps {
  id: number;
  name: string;
  points: number;
  member_activity_week?: any[];
  limit?: any;
  league_id: number;
  bonus: boolean;
  delete?: boolean;
  created?: boolean;
}

export interface IMemberProps {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  leagues?: IMemberLeagues[];
  privilege: string;
  member_activity_week?: any[];
  password: string;
  delete?: boolean;
  created?: boolean;
}

export interface ILeagueProps {
  id: number;
  members?: IMemberLeagues[];
  name: string;
  type: string;
}

export interface ISeasonProps {
  id: number | string;
  weeks_number: number;
  start_date: string | Date;
  disabled: boolean;
  weeks: IWeekProps[];
}

export interface IWeekProps {
  id: number;
  index: number;
  season_id: number;
  member_activity_week: IMemberActivityWeekProps[];
}

export interface IMemberActivityWeekProps {}
