import { RouteComponentProps } from "react-router-dom";
import {
  Login,
  Signup,
  Score,
  ScoreSheet,
  ForgotPassword,
  LeagueEditor,
  LeaguePageRender,
  SeasonCreate
} from "../components/pages";
import { IRoutePageProps } from "../types";

export interface IRoutePropsObject extends IRoutePageProps {
  path: string;
  exact: boolean;
}

export interface IRouteProps extends Array<IRoutePropsObject> {}

export const ROUTES_CONFIG = [
  {
    path: "/",
    exact: true,
    Page: Login,
    hasMenu: false,
    requiresAuth: false
  },
  {
    path: "/login",
    exact: true,
    Page: Login,
    hasMenu: false,
    requiresAuth: false
  },
  {
    path: "/login/identity",
    exact: true,
    Page: ForgotPassword,
    hasMenu: false,
    requiresAuth: false
  },
  {
    path: "/signup",
    exact: true,
    Page: Signup,
    hasMenu: false,
    requiresAuth: false
  },
  {
    path: "/score",
    exact: true,
    Page: Score,
    hasMenu: true,
    requiresAuth: true
  },
  {
    path: "/league",
    exact: true,
    Page: LeaguePageRender,
    hasMenu: true,
    requiresAuth: true
  },
  {
    path: "/league/:leagueId",
    exact: true,
    Page: LeagueEditor,
    hasMenu: true,
    requiresAuth: true
  },
  {
    path: "/league/:leagueId(d+)/season",
    exact: true,
    Page: SeasonCreate,
    hasMenu: true,
    requiresAuth: true
  },
  {
    path: "/scoresheet",
    exact: true,
    Page: ScoreSheet,
    hasMenu: true,
    requiresAuth: true
  }
  // {
  //   path: "/profile",
  //   exact: true,
  //   Page: null,
  //   hasMenu: true,
  //   requiresAuth: true
  // },
  // {
  //   path: "/logout",
  //   exact: true,
  //   Page: Logout,
  //   hasMenu: true,
  //   requiresAuth: true
  // },
];
