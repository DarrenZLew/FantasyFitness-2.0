import React from "react";
import { CreateNewGroup, TopContainer, PaddingContainer } from "../../layout";

const LeagueHomePage = () => {
  const url = {
    pathname: "/league",
    type: "create"
  };
  const text = "No leagues are currently available";
  const createBtnText = "Create New League";
  return (
    <TopContainer>
      <PaddingContainer>
        <CreateNewGroup routeUrl={url} text={text} createBtnText={createBtnText} />
      </PaddingContainer>
    </TopContainer>
  );
};

export default LeagueHomePage;
