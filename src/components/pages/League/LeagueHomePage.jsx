import React, { useContext } from "react";
import { useFetch } from "../../../utils";
import { CreateNewGroup, TopContainer, PaddingContainer, LoadingContainer, CardContainer } from "../../common";
import { authContext } from "../../../context";
import LeagueTable from "./LeagueTable";

const LeagueHomePage = () => {
  const routeUrl = {
    pathname: "/league",
    type: "create"
  };

  const { auth } = useContext(authContext);
  const { id: member_id } = auth
  const leagueUrl = `http://localhost:5000/league/member/${member_id}`;

  let { response: leagueData, error, loading } = useFetch({ url: leagueUrl })

  const createBtnText = "Create New League";
  return (
    <TopContainer>
      <PaddingContainer>
        <CardContainer>
          <CreateNewGroup routeUrl={routeUrl} createBtnText={createBtnText} />
          <PaddingContainer>
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
