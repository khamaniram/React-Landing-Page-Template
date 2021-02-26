import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData: {},
  }
  getResumeData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <>
        <Navigation></Navigation>
        <div>
          <Header data={this.state.resumeData.Header} ></Header>
          <Features data={this.state.resumeData.Features}></Features>
          <About data={this.state.resumeData.About}></About>
          <Services data={this.state.resumeData.Services}></Services>
          <Gallery></Gallery>
          <Testimonials data={this.state.resumeData.Testimonials}></Testimonials>
          <Team data={this.state.resumeData.Team}></Team>
          <Contact data={this.state.resumeData.Contact}></Contact>
        </div>
      </>
    )
  }
}

export default App
