import React, { Fragment } from "react";
import { Button, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/styles";
import { useForm, useFetch } from "../../../../utils";
import { CardContainer } from "../../../common";
import { FormContainer } from "../../../forms";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  addMember: {
    marginRight: theme.spacing(1)
  },
  selectInput: {
    margin: theme.spacing(1),
    minWidth: "100%"
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
    onMount: true
  };

  const {
    values = { members: [] },
    handleInputChange,
    handleSubmit,
    loading,
    fetchResponse,
    setValues
  } = useForm({ ...useFormProps });
  console.log(values);
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
        <CardContainer>
          <FormContainer
            type="signin"
            handleSubmit={handleSubmit}
            loading={loading}
            {...formContainerProps}
          >
            {values.members.length > 0 && (
              <Grid container spacing={1}>
                {values.members.map((member, index) => {
                  console.log(member);
                  const privilege = member.leagues
                    ? member.leagues.find(({ league_id }) => league_id === +leagueId).privilege
                    : "";

                  const memberName =
                    member.first_name && member.last_name
                      ? `${member.first_name} ${member.last_name}`
                      : "";

                  return (
                    <Fragment key={index}>
                      {/* <Grid item md={6} sm={3} xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          required
                          id={`${index}`}
                          label={`Member ${index + 1}`}
                          name={`${index}`}
                          autoFocus
                          value={memberName}
                        />
                      </Grid> */}
                      <Grid item md={6} sm={3} xs={6}>
                        <FormControl className={classes.selectInput}>
                          <InputLabel htmlFor="member-name">Member {index + 1}</InputLabel>
                          <Select
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={member.id}
                            // onChange={handleChange}
                            inputProps={{
                              name: `Member ${index + 1}`,
                              id: "member-name"
                            }}
                            disabled={member.id}
                          >
                            <MenuItem value="">None</MenuItem>
                            {member.id && <MenuItem value={member.id}>{memberName}</MenuItem>}
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
                      <Grid item md={2} sm={3} xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          required
                          id={"privilege"}
                          label="Privilege"
                          name={"privilege"}
                          value={privilege}
                          onChange={handleInputChange("privilege", index, "members")}
                        />
                      </Grid>
                      <Grid container item md={2} sm={3} xs={6} alignItems="center">
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
