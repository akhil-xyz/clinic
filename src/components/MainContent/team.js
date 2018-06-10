import React from 'react';

export default class Team extends React.Component {
    render() {
        return <div class="col-sm-8">
            <h3 style={{ color: "#009ABB" }}>OUR TEAM</h3>
            <div class="row">
                <img src="doctor-male.jpg" class="img-rounded" alt="Doctor male" />
                <h6 style={{ paddingLeft: 20, alignSelf: "flex-end" }}>
                    Asst. Prof. Dr. Gerin Thomas Paul<br />
                    BDS, MDS
                </h6>

            </div>
            <div class="row" style={{ marginTop: 20 }}>
                <img src="doctor-female.jpg" class="img-rounded" alt="Doctor female" />
                <h6 style={{ paddingLeft: 20, alignSelf: "flex-end" }}>
                    Dr.Maria Gerin<br />
                    BDS
                </h6>

            </div>
        </div>
    }
}