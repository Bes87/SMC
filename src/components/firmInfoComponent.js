import React from 'react';

class FirmInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="firm-info-card text-start" style={{padding:"2rem 0"}}>
                <h3>{this.props.infoSection.title}</h3>
                <p>{this.props.infoSection.description}</p>
                <p>{this.props.infoSection.pIva.title} <span className="info-value">{this.props.infoSection.pIva.value}</span></p>
                <p>{this.props.infoSection.via}</p>
                <h3>{this.props.infoSection.tel.title}</h3>
                {this.props.infoSection.tel.contacts.map((item, index) => {
                     return <p key={index}>{item.owner} <span className="info-value">{item.number}</span></p>
                    }
                )}
                <h3>{this.props.infoSection.email.title}</h3>
                <p><span className="info-value">{this.props.infoSection.email.email}</span></p>
                <h3>{this.props.infoSection.orari.title}</h3>
                <p>{this.props.infoSection.orari.description} 
                <span className="info-value">{this.props.infoSection.orari.start}</span>
                {this.props.infoSection.orari.description2}
                <span className="info-value">{this.props.infoSection.orari.end}</span>
                </p>
            </div>
        );
    }
}

export default FirmInfoComponent;