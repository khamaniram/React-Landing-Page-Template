import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <div className="list-style">
                  <div className="col-xs-12 col-md-6">
                    <h3>Vision</h3>
                    <p>{this.props.data ? this.props.data.Vision : 'loading...'}</p>
                    
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <h3>Purpose</h3>
                    <p>{this.props.data ? this.props.data.Purpose : 'loading...'}</p>
                  </div>
                  <div className="col-xs-12 ">
                  <h3 className="mission">Mission</h3>
                    <p >
                      {this.props.data ? this.props.data.Mission : 'loading...'}
                    </p>
                    </div>
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <h3>We are inspired to:</h3>
                    <p >
                      {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
