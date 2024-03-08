import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import yourData from './CollegeBasketballTeams.json';

//header about site
function Header() {
  return (
    <div>
      <h1>NCAA Basketball Info</h1>
    </div>
  );
}

interface Info {
  school: string;
  name: string;
  city: string;
  state: string;
}

class School extends React.Component<Info> {
  render() {
    const oneSchool = this.props;

    return (
      <div style={{ border: '1px solid #000', padding: '10px' }}>
        <h2>{oneSchool.school}</h2>
        <h3>Mascot: {oneSchool.name}</h3>
        <h3>
          Location: {oneSchool.city}, {oneSchool.state}
        </h3>
      </div>
    );
  }
}

function SchoolInfo() {
  return (
    <div>
      {yourData.teams.map((schoolNum, index) => (
        <School key={index} {...schoolNum} />
      ))}
    </div>
  );
}

class SchoolNames extends React.Component<Info> {
  render() {
    const oneSchool = this.props;

    return (
      <div>
        <h4>{oneSchool.school}</h4>
      </div>
    );
  }
}

function AllSchools() {
  return (
    <div>
      {yourData.teams.map((schoolNum, index) => (
        <SchoolNames key={index} {...schoolNum} />
      ))}
    </div>
  );
}

// return functions
function App() {
  return (
    <div className="App">
      <Header />
      <SchoolInfo />
      <h1>All Schools</h1>
      <AllSchools />
    </div>
  );
}

export default App;
