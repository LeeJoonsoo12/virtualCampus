import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import FormikField from "../form-components/FormikField"

import { Field } from "formik"

import { Select } from "material-ui-formik-components/Select";


const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  title: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#0072CE"
  }
}))



const EntryDetails = (props) => {
  const classes = useStyles()

  const eventOptions = [
    {
      value: 'social',
      label: 'Social Event'
    },
    {
      value: 'faculty',
      label: 'Faculty Event'
    }
  ]
  return (
    <div style={{ margin: "15px 0 0 0" }}>
      <div className={classNames(classes.root, classes.title)}>
        {props.title}
      </div>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <FormikField
            label={props.entryTitle}
            name="title"
            error={props.errorTitle}
            touch={props.touchedTitle}
            required
          />
        </Grid>
        <Grid item sm={3} xs={12}>
            <Field
                name="event_type"
                label="Event Type"
                options={eventOptions}
                component={Select}
                required
                error={props.errorsEventType}
                touch={props.touchedEventType}
            />
        </Grid>
      </Grid >
    </div>
  )
}

export default EntryDetails