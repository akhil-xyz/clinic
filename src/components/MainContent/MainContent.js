import React from 'react';
import './MainContent.css';
import Home from "./home";
import Profile from "./profile";
import Team from "./team";
import Facilities from "./facilities";
import DentalTourism from "./dentalTourism";
import LocateUs from "./locateus";
import ContactUs from "./contactus";

export default class MainContent extends React.Component {

    state = { selected: "home" }

    renderContent() {
        switch (this.state.selected) {
            case "home": return <Home />;
            case "profile": return <Profile />;
            case "team": return <Team />;
            case "facilities": return <Facilities />;
            case "tourism": return <DentalTourism />;
            case "locateUs": return <LocateUs />;
            case "contactUs": return <ContactUs />;
            default: return <Home />
        }
    }

    render() {
        return <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    {/* <h2>About Clinic</h2>
                    <h5>Photo of me:</h5>
                    <div class="fakeimg">Fake Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>Some Links</h3>
                    <p>Lorem ipsum dolor sit ame.</p> */}
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item" onClick={() => this.setState({ selected: "home" })} >
                            {this.state.selected === "home" ? <a class="nav-link active">Home</a> : <a class="nav-link">Home</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "profile" })}>
                            {this.state.selected === "profile" ? <a class="nav-link active">Our Profile</a> : <a class="nav-link">Our Profile</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "team" })}>
                            {this.state.selected === "team" ? <a class="nav-link active">Our Team</a> : <a class="nav-link">Our Team</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "facilities" })}>
                            {this.state.selected === "facilities" ? <a class="nav-link active">Our Facilities</a> : <a class="nav-link">Our Facilities</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "tourism" })}>
                            {this.state.selected === "tourism" ? <a class="nav-link active">Dental Tourism</a> : <a class="nav-link">Dental Tourism</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "locateUs" })}>
                            {this.state.selected === "locateUs" ? <a class="nav-link active">Locate Us</a> : <a class="nav-link">Locate Us</a>}
                        </li>
                        <li class="nav-item" onClick={() => this.setState({ selected: "contactUs" })}>
                            {this.state.selected === "contactUs" ? <a class="nav-link active">Contact Us</a> : <a class="nav-link">Contact Us</a>}
                        </li>
                    </ul>
                    <p class="message">Quality dental treatment at affordable cost</p>
                    {/* <hr class="d-sm-none" /> */}
                </div>
                {this.renderContent()}
            </div>
        </div >
    }
}