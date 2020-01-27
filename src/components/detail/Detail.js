import React from 'react';
import '../detail/Detail.css'
import companyIcon from './image/company.png';
import bioIcon from './image/bio.png';
import emailIcon from './image/email.png';
import follwerIcon from './image/follower.png';

class Detail extends React.Component {

    render() {
        
        return (
            <div style={{display: this.props.showDetail}} id="detail">
                <img id="avatar-image" src={this.props.detailProps.avatar_url}></img>
                <h1>{this.props.detailProps.login}</h1>
                <label id="txt-name">{this.props.detailProps.name}</label>
                <div id="detail-icon-content">
                    <table>
                        <tr>
                            <td><h6><img src= {companyIcon} className="sub-detail"></img>Compañia:</h6></td>
                            <td><p className="sub-detail-text">{this.props.detailProps.company}</p></td>
                        </tr>
                        <tr>
                            <td><h6><img src= {bioIcon} className="sub-detail"></img>Biografía:</h6></td>
                            <td><p className="sub-detail-text">{this.props.detailProps.bio}</p></td>
                        </tr>
                        <tr>
                            <td><h6><img src= {emailIcon} className="sub-detail"></img>Correo:</h6></td>
                            <td><p className="sub-detail-text">{this.props.detailProps.email}</p></td>
                        </tr>
                        <tr>
                            <td><h6><img src= {follwerIcon} className="sub-detail"></img>Seguidores:</h6></td>
                            <td><p className="sub-detail-text">{this.props.detailProps.followers}</p></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    } 
}

export default Detail;

