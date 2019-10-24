import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Theme } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import Members from "./Members";
import Activities from "./Activities";
import General from "./General/General";
import Season from "./Season";
import { Score } from "../../Score";
import { PaddingContainer, TopContainer } from "../../../common";
import { ILeagueId } from "../../../../types";
import { LeagueProvider, SeasonProvider } from "../../../../context";

interface IContentProps {
  pageID: number;
}

const Content: React.FC<IContentProps> = ({ pageID }) => {
  const pages = [<General />, <Activities />, <Members />, <Season />, <Score />];
  return pages[pageID];
};

interface IProps extends RouteComponentProps<ILeagueId> {}

const LeagueEditor: React.FC<IProps> = props => {
  const [pageIndex, setPageIndex] = useState(0);
  const handleChangePage = (newIndex: number) => (e: React.EventHandler<any>) => {
    setPageIndex(newIndex);
  };
  const pageTabs = ["General", "Activities", "Members", "Seasons", "Score"];
  const { leagueId } = props.match.params;
  return (
    <SeasonProvider leagueId={leagueId}>
      <LeagueProvider leagueId={leagueId}>
        <TopContainer>
          <AppBar component="div" color="primary" position="static" elevation={0}>
            <Tabs value={pageIndex} textColor="inherit">
              {pageTabs.map((page, index) => (
                <Tab
                  key={index}
                  textColor="inherit"
                  label={page}
                  onClick={handleChangePage(index)}
                />
              ))}
            </Tabs>
          </AppBar>
          <PaddingContainer>
            <Content pageID={pageIndex} />
          </PaddingContainer>
        </TopContainer>
      </LeagueProvider>
    </SeasonProvider>
  );
};

export default LeagueEditor;
