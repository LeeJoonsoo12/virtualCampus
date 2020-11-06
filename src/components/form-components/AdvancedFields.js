import React from 'react';
import AdditionalInfo from '../form-components/AdditionalInfo'
import WebsiteAndZoom from "../form-components/WebsiteAndZoom"
import CoverImage from "../form-components/CoverImage"
import Capacity from "../form-components/Capacity"
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames";


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

const AdvancedFields = (props) => {
  let errors = props.errors
  let touched = props.touched

  const content = (
    <div style={{ width: "100%" }}>
       <Capacity
        errors={errors}
        touched={touched}
        />
      <CoverImage
        errors={errors}
        touched={touched}
        fileName={props.fileName}
        imgUpload={props.imgUpload}
      />
      <WebsiteAndZoom
        errors={errors}
        touched={touched}
      />
      <AdditionalInfo
        errorComments={errors.comments}
        touchedComments={touched.comments}
      />
    </div>
  )

  return content
}

export default AdvancedFields