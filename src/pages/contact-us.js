import React from "react";
import { CustomButton, CustomFooter, CustomHeader, Template, Title } from "../components";
import CustomInput from "../components/material-kit-components/CustomInput/CustomInput.js";
import GridContainer from "../components/material-kit-components/Grid/GridContainer.js";
import GridItem from "../components/material-kit-components/Grid/GridItem.js";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
import InputAdornment from "@material-ui/core/InputAdornment";
import { CircularProgress } from '@material-ui/core';
import Axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import InstaIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GirlImage from "../assets/images/contact-us/contact-girl.png";
import CustomTextField from "../components/FormikField/CustomTextField.js";
import FacebookOutlineIcon from "../assets/images/contact-us/facebook.png";

class contactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            to: "columbiavirtualcampus@gmail.com",
            subject: "",
            from: "",
            text: "",
            activityIndicatory: false,
            feedbackSubmit: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ activityIndicatory: true });
        const data = {
            from: this.state.from,
            subject: 'CONTACT US: ' + this.state.subject,
            text: this.state.text
        }

        Axios.post("https://us-central1-columbia-virtual-campus.cloudfunctions.net/sendEmail", data)
            .then(res => {
                this.setState({ activityIndicatory: false });
                this.setState({ feedbackSubmit: true });
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        return ( 
            <div style = {{ backgroundColor: "white" }}>
            <Template active = { "contact-us" } title = { "Contact Us" }>
                <Title color = { 'blue' } style = {{textSize:'36px', textAlign: "left", marginLeft: 10, marginBottom: 20}}>Want to send us feedback?</Title>
                <div style = {{ textAlign: "left" }}>
                    <a style = {{ textAlign: "center", color: "#0072CE", display: 'inline-block', overflow: 'hidden'}}
                    href = "https://bit.ly/virtual-campus-group"> 
                        <div style = {{ textAlign: "left", marginTop: 10, marginLeft: 14}}>
                            
                            <CustomButton
                                text = { "FACEBOOK" }
                                style = {{fontFamily: "Poppins", fontSize: "16px"}}
                                startIcon={<FacebookIcon style = {{marginLeft: 25, marginRight: -15}}/>}
                                
                                color = { "blue" }
                                size = { "large" }
                                rounded = { "10px" }
                                onClick = { this.handleClick }
                                style = {{borderRadius: '10px', width:'159.43px', height:'45px'}}
                            /> 
                        </div>
                    </a>
                    
                    <a style = {{ textAlign: "left", color: "#0072CE", display: 'inline-block'}}
                    href = { "mailto:columbiavirtualcampus@gmail.com" }> 
                        <div style = {{ textAlign: "left", marginTop: 10, marginLeft: 14, marginBottom: 20}}>
                            <CustomButton  
                                text = { "EMAIL" }
                                style = {{fontFamily: "Poppins", fontSize: "16px"}}
                                startIcon={<MailOutlineIcon style = {{marginLeft: 20, marginRight: -15}}/>}
                                color = { "blue" }
                                size = { "large" }
                                rounded = { "10px" }
                                onClick = { this.handleClick }
                                style = {{float:'left', borderRadius: '10px', width:'159.43px', height:'45px'}} 
                            /> 
                        </div>
                    </a>
                </div>
                <div style = {{ minHeight: "40px" }}/>

                
                {this.state.activityIndicatory &&

                    <div style = {{ backgroundColor: "white" }}>
                        <div style = {{ backgroundColor: "white" }}>
                            <CustomHeader active = { "schedule" } brand = { "VIRTUAL CAMPUS" }/> 
                            <div style = {{ marginTop: '3%', marginLeft: '49%' }}>
                                <CircularProgress />
                            </div> 
                        </div> 
                    </div>
                }

                {
                    !this.state.feedbackSubmit && !this.state.activityIndicatory &&
                        <div>
                            <img alt = "Contact Girl Picture" src={GirlImage} style = {{float:'right', width:'750px', height:'700px', padding: '0px 250px 200px 3px', marginTop:'-100px', marginBottom: '-100px', marginRight: '5px'}}></img>
                            <GridContainer style = {{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                            <GridItem xs = { 18 } sm = { 18 } md = { 10 }>
                                <CustomTextField
                                    required placeholder = "Name *" 
                                    id = "material"
                                    style = {{textAlign: "left", width:'659px'}}
                                    formControlProps = {
                                        { fullWidth: true }
                                    }
                                    inputProps = {
                                        {
                                            endAdornment: ( 
                                                <InputAdornment position = "end" >
                                                </InputAdornment> 
                                            )
                                        }
                                    }
                                    value = { this.state.name }
                                    onChange = {
                                        (val) => {
                                            this.setState({ name: val.target.value });
                                        }
                                    }
                                    // required
                                />
                                <br/>
                            </GridItem> <br/> 
                            
                            <div style = {{ textAlign: "left", marginTop: 10 }}></div>
                            <GridItem xs = { 18 } sm = { 18 } md = { 10 }>
                                <CustomTextField
                                    placeholder = "Subject *" required
                                    id = "material"
                                    
                                    formControlProps = {
                                        { fullWidth: true }
                                    }
                                    inputProps = {
                                        {
                                            endAdornment: ( 
                                                <InputAdornment position = "end" >
                                                </InputAdornment> 
                                            )
                                        }
                                    }
                                    value = { this.state.subject }
                                    onChange = {
                                        (val) => {
                                            this.setState({ subject: val.target.value });
                                        }
                                    }
                                />
                                <br/>
                            </GridItem> <br/>

                            <div style = {{ textAlign: "left", marginTop: 10 }}></div>
                            <GridItem xs = { 18 } sm = { 18 } md = { 10 }>
                                <CustomTextField
                                    placeholder = "Email *"
                                    id = "material"
                                    formControlProps = {
                                        {
                                            fullWidth: true
                                        }
                                    }
                                    inputProps = {
                                        {
                                            endAdornment: ( 
                                                <InputAdornment position = "end" >
                                                </InputAdornment> 
                                            )
                                        }
                                    }
                                    value = { this.state.from }
                                    onChange = {
                                        (val) => {
                                            this.setState({ from: val.target.value });
                                        }
                                    }
                                    required
                                />
                                <br/>
                            </GridItem> <br/>
                            
                            <div style = {{ textAlign: "left", marginTop: 10 }}></div>
                            <GridItem xs = { 18 } sm = { 18 } md = { 10 }>
                                <CustomTextField
                                    placeholder = "Message"
                                    id = "material"
                                    formControlProps = {
                                        {
                                            fullWidth: true
                                        }
                                    }
                                    inputProps = {
                                        {
                                            endAdornment: ( 
                                                <InputAdornment position = "end" >
                                                </InputAdornment> 
                                            )
                                        }
                                    }
                                    value = { this.state.text }
                                    onChange = {
                                        (val) => {
                                            this.setState({ text: val.target.value });
                                        }
                                    }
                                    multiline
                                    rows = "5"
                                />
                                <br/>
                            </GridItem> 
                        </GridContainer> 
                        
                        <div style = {{ textAlign: "left", marginTop: 10, marginLeft: 14}}>
                            <CustomButton 
                                text = { "SUBMIT" }
                                style = {{fontFamily: "Poppins", fontSize: "20px"}}
                                color = { "orange" }
                                size = { "large" }
                                rounded = { "10px" }
                                onClick = { this.handleClick }
                                style = {{borderRadius: '10px', width:'162px', height:'48px'}}
                            /> 
                        </div> 
                        </div>} 
                        {this.state.feedbackSubmit && !this.state.activityIndicatory &&
                        <div>
                            <div style = {{ minHeight: "20px" }}/> 
                            <div style = {{ textAlign: "center" }}>
                            Thank you for submitting feedback!We really value your opinion.  
                            <br/> <br/>
                            We will get back to you shortly after one of the board members processes it. 
                            </div> 
                        <div style = {{ height: "300px" }}/> 
                        </div>
                        }
            </Template>

            <CustomFooter/>

            </div>
        );
    }
}

export default contactUs;