import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, ApplicationState } from "#Store";
// import { Contact } from "#Entities";
import { RouteComponentProps } from "react-router-dom";

import {
  List,
  Paper,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Contacts: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { list: contacts, loading, error } = useSelector(
    (state: ApplicationState) => state.contacts
  );
  useEffect(() => {
    dispatch(actionCreators.getContacts());
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        className="100vh p-3"
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-3 min-40vh">
            <LinearProgress
              className={
                loading ? `paper-loader-top` : `paper-loader-top v-hidden`
              }
            />
            <Typography variant="h6" display="block" className="mt-3">
              Neudesic Contact List
            </Typography>
            <Typography
              variant="h6"
              display="block"
              className={error ? `` : `v-hidden`}
            >
              {error?.message}
            </Typography>
            <List dense>
              {contacts.length > 0 &&
                contacts.map((contact) => {
                  return (
                    <ListItem
                      button
                      key={contact.ID}
                      onClick={() => history.push(`contacts/${contact.ID}`)}
                    >
                      <ListItemText primary={contact.Name} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() =>
                            dispatch(actionCreators.deleteContact(contact))
                          }
                          disabled={loading}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Contacts;
