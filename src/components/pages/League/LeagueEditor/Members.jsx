import React, { Fragment, useMemo } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useForm, useFetch } from "../../../../utils";
import { CardContainer } from "../../../common";
import { FormContainer } from "../../../forms";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Members = props => {
  const classes = useStyles();
  const { leagueId } = props;

  const useFetchProps = {
    url: `http://localhost:5000/leagues/${leagueId}/members`,
    queryParams: {
      in: false
    }
  };

  const {
    response: { value: nonMembers = [] }
  } = useFetch({ ...useFetchProps });

  console.log(nonMembers);

  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/members`,
    initialState: { members: [] },
    onMountPath: "members",
    onMount: true,
    formKeys: useMemo(
      () => [
        {
          name: "id"
        },
        {
          name: "privilege",
          pathFn: data => {
            console.log(data, leagueId);
            return data.leagues
              ? data.leagues.find(league => league.league_id === +leagueId).privilege
              : null;
          }
        }
      ],
      [leagueId]
    )
  };

  const {
    values = { members: [] },
    onFormCreateValues = { members: [] },
    handleInputChange,
    handleSubmit,
    loading,
    fetchResponse,
    setValues
  } = useForm({ ...useFormProps });
  console.log(values, onFormCreateValues);
  const ButtonComponent = () => {
    return values.members.length > 0 ? (
      <Button type="submit" variant="contained" color="primary" className={classes.submit}>
        Update League Members
      </Button>
    ) : null;
  };

  const deleteMember = id => e => {
    const newValues = [...values.members];
    newValues.splice(id, 1);
    setValues({ members: [...newValues] });
  };
  const addMember = () => {
    const newMember = { member_id: "", privilege: "" };
    setValues({ members: [...values.members, { ...newMember }] });
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
            {values.members.length > 0 && (
              <Grid container spacing={1}>
                {values.members.map((member, index) => {
                  const privilege = member.leagues
                    ? member.leagues.find(({ league_id }) => league_id === +leagueId).privilege
                    : "";
                  const memberData = onFormCreateValues.members[index] || {};
                  const memberName =
                    memberData.first_name && memberData.last_name
                      ? `${memberData.first_name} ${memberData.last_name}`
                      : "";

                  return (
                    <Fragment key={index}>
                      <Grid item md={4} sm={6} xs={6}>
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
                            // disabled={member.id ? true : false}
                          >
                            <MenuItem value="">None</MenuItem>
                            {!nonMembers.find(e => member.id === e.id) && member.id && (
                              <MenuItem value={member.id}>{memberName}</MenuItem>
                            )}
                            {nonMembers.map(nonMember => {
                              return (
                                <MenuItem key={nonMember.id} value={nonMember.id}>
                                  {nonMember.first_name} {nonMember.lastName}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={4} sm={6} xs={6}>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="member-privilege">Privilege</InputLabel>
                          <Select
                            variant="outlined"
                            fullWidth
                            value={privilege || "member"}
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
                        alignItems="center"
                        justify="center"
                      >
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
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            )}
          </FormContainer>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Members;
