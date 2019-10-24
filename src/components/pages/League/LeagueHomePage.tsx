import React, { useContext } from "react";
import { useForm, useAuthValue } from "../../../utils";
import {
  CreateNewGroup,
  TopContainer,
  PaddingContainer,
  LoadingContainer,
  CardContainer
} from "../../common";
import LeagueTable from "./LeagueTable";

const LeagueHomePage = () => {
  const routeUrl = {
    pathname: "/league",
    type: "create"
  };

  const { auth } = useAuthValue();
  const { id: member_id } = auth;
  const leagueUrl = `http://localhost:5000/leagues/members/${member_id}`;

  let { values: leagueData, loading } = useForm({
    url: leagueUrl,
    onMount: true
  });

  const createBtnText = "Create New League";
  return (
    <TopContainer>
      <PaddingContainer>
        <CardContainer>
          <CreateNewGroup routeUrl={routeUrl} createBtnText={createBtnText} />
          <PaddingContainer center>
            <LoadingContainer loading={loading}>
              <LeagueTable data={leagueData} />
            </LoadingContainer>
          </PaddingContainer>
        </CardContainer>
      </PaddingContainer>
    </TopContainer>
  );
};

export default LeagueHomePage;
