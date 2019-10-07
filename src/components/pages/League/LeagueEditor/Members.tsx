import React, { Fragment, useMemo } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useForm } from "../../../../utils";
import { CardContainer } from "../../../common";
import { FormContainer } from "../../../forms";
import { ILeagueId, IMemberProps } from "../../../../types";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Members: React.FC<ILeagueId> = props => {
  const classes = useStyles({});
  const { leagueId } = props;

  const useFormOnMountProps = {
    url: `http://localhost:5000/auth/members`,
    initialState: [] as any[],
    onMount: true
  };

  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/members`,
    initialState: { members: [] as any[] },
    formPath: "members",
    updateFormValues: true,
    formKeys: useMemo(
      () => [
        {
          name: "id"
        },
        {
          name: "privilege",
          valueFormatter: (data: IMemberProps) => {
            return data.leagues
              ? data.leagues.find(league => league.league_id === +leagueId).privilege
              : null;
          }
        },
        {
          name: "delete",
          valueFormatter: () => false
        }
      ],
      [leagueId]
    )
  };

  const { values: allMembers = [] } = useForm({ ...useFormOnMountProps });

  const {
    values: currMembers = { members: [] },
    onFormCreateValues = { members: [] },
    handleInputChange,
    handleSubmit,
    loading,
    fetchResponse,
    setValues
  } = useForm({ ...useFormProps });
  const ButtonComponent = () => {
    return currMembers.members.length > 0 ? (
      <Button type="submit" variant="contained" color="primary" className={classes.submit}>
        Update Members
      </Button>
    ) : null;
  };

  const deleteMember = (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValues = [...currMembers.members];
    newValues.splice(id, 1);
    setValues({ members: [...newValues] });
  };
  const addMember = () => {
    const newMember = { id: "", privilege: "member", delete: false, created: true };
    setValues({ members: [...currMembers.members, { ...newMember }] });
  };

  const formContainerProps = {
    formHeader: "League Members",
    ButtonComponent: ButtonComponent,
    addItemText: "Add new member",
    addItem: addMember,
    type: "edit"
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CardContainer center>
          <FormContainer handleSubmit={handleSubmit} loading={loading} {...formContainerProps}>
            {currMembers.members.length > 0 && (
              <Fragment>
                {currMembers.members.map(
                  (member: IMemberProps, index: number, currMembersList: IMemberProps[]) => {
                    return (
                      <Grid container spacing={1} key={index}>
                        <Grid item md={4} sm={12} xs={12}>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="member-name">Member {index + 1}</InputLabel>
                            <Select
                              variant="outlined"
                              fullWidth
                              value={member.id || ""}
                              onChange={handleInputChange("id", index, "members")}
                              inputProps={{
                                name: `Member ${index + 1}`,
                                id: "member-name"
                              }}
                              disabled={
                                member.id &&
                                onFormCreateValues.members.find(
                                  (initMember: IMemberProps) => initMember.id === member.id
                                )
                                  ? true
                                  : false
                              }
                            >
                              <MenuItem value="">None</MenuItem>
                              {allMembers.reduce((acc: IMemberProps[], curr: IMemberProps) => {
                                const foundCurrMemberIndex = currMembersList.findIndex(
                                  m => m.id === curr.id
                                );
                                if (foundCurrMemberIndex === -1 || foundCurrMemberIndex === index)
                                  return [
                                    ...acc,
                                    <MenuItem key={curr.id} value={curr.id}>
                                      {curr.first_name} {curr.last_name}
                                    </MenuItem>
                                  ];
                                return acc;
                              }, [])}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="member-privilege">Privilege</InputLabel>
                            <Select
                              variant="outlined"
                              fullWidth
                              value={member.privilege || "member"}
                              onChange={handleInputChange("privilege", index, "members")}
                              inputProps={{
                                name: `Privilege`,
                                id: "member-privilege"
                              }}
                            >
                              <MenuItem value="member">Member</MenuItem>
                              <MenuItem value="admin">Admin</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid
                          container
                          item
                          md={4}
                          sm={12}
                          xs={12}
                          justify="center"
                          alignItems="center"
                        >
                          {!member.created && (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value={member.delete || false}
                                  checked={member.delete}
                                  onChange={handleInputChange("delete", index, "members")}
                                  color="primary"
                                />
                              }
                              label="Remove Member?"
                              labelPlacement="top"
                            />
                          )}
                          {member.created && (
                            <Fab
                              color="primary"
                              variant="extended"
                              className={classes.button}
                              aria-label="delete member"
                              onClick={deleteMember(index)}
                            >
                              <DeleteIcon />
                              Delete
                            </Fab>
                          )}
                        </Grid>
                      </Grid>
                    );
                  }
                )}
              </Fragment>
            )}
          </FormContainer>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Members;
