import React, {Component} from 'react';

export default class MyProfile extends Component{
    render(){
        const {name,company,picture,about,email,phone,address,registered} = this.props.profileData
        return(
            <div className="profileContainer">
                <div className="row"><label>Name:&nbsp;</label><div><span>{`${name.first} ${name.last}`}</span></div></div>
                <div className="row">
                <div className="row"><label>Company:&nbsp;</label> <div><span>{company}</span></div></div>
                    <div><img src={picture} alt="company logo" /></div>
                </div>
                <div className="row"><label>About:&nbsp;</label> <div><span>{about}</span></div></div>
                <div className="row"><label>Email:&nbsp;</label> <div><span>{email}</span></div></div>
                <div className="row"><label>Phone:&nbsp;</label><div><span>{phone}</span></div></div>
                <div className="row"><label>Address:&nbsp;</label><div><span>{address}</span></div></div>
                <div className="row"><label>Registered Date:&nbsp;</label><div><span>{registered}</span></div></div>
            </div>
        )
    }
}