import React from "react";
import UserCard from "./UserCard";
import Preloader from "./Preloader";
import Button from "./Button";
export default class UserList extends React.Component {
  state = {
    person: null
  };
 async handleClick() {
     this.setState({preloader: true});
    const url = "https://randomuser.me/api/?inc=name,gender,location,email,dob,phone,picture&results=10&noinfo";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, button: true});
     this.setState({preloader: false});
  }

  render() {
      if (this.state.preloader){
      return <Preloader />;
    }
    if (!this.state.button) {
        
      return <Button onClick={this.handleClick.bind(this)} />;
    }
    if (!this.state.person){
      return <div>didn't get a person</div>;
    }

    return (
        
      <div className="UserList-container">
        <Button onClick={this.handleClick.bind(this)} />
        <UserCard user={this.state.person.results[0]} />
        <UserCard user={this.state.person.results[1]} />
        <UserCard user={this.state.person.results[2]} />
        <UserCard user={this.state.person.results[3]} />
        <UserCard user={this.state.person.results[4]} />
        <UserCard user={this.state.person.results[5]} />
      </div>
    );
  }
}