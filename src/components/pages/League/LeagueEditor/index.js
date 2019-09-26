import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Members from "./Members";
import Activities from "./Activities";
import General from "./General/General";
import Season from "./Season";
import { PaddingContainer, TopContainer } from "../../../common";

const Content = ({ pageID, match }) => {
  const { leagueId } = match.params;
  const pages = [
    <General leagueId={leagueId} />,
    <Activities leagueId={leagueId} />,
    <Members leagueId={leagueId} />,
    <Season leagueId={leagueId} />
  ];
  return pages[pageID];
};

const LeagueEditor = props => {
  const [pageIndex, setPageIndex] = useState(0);
  const handleChangePage = newIndex => e => {
    setPageIndex(newIndex);
  };
  const pageTabs = ["General", "Activities", "Members", "Seasons"];
  return (
    <TopContainer>
      <AppBar component="div" color="primary" position="static" elevation={0}>
        <Tabs value={pageIndex} textColor="inherit">
          {pageTabs.map((page, index) => (
            <Tab key={index} textColor="inherit" label={page} onClick={handleChangePage(index)} />
          ))}
        </Tabs>
      </AppBar>
      <PaddingContainer>
        <Content pageID={pageIndex} {...props} />
      </PaddingContainer>
    </TopContainer>
  );
};

export default LeagueEditor;
