import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import AddMember from "./AddMember";
import General from "./General/General";
import Season from "./Season";
import { PaddingContainer, TopContainer } from "../../../layout";

const Content = ({ pageID }) => {
  const pages = [<General />, null, <AddMember />, <Season />];
  return pages[pageID];
};

const LeagueEditor = () => {
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
        <Content pageID={pageIndex} />
      </PaddingContainer>
    </TopContainer>
  );
};

export default LeagueEditor;
