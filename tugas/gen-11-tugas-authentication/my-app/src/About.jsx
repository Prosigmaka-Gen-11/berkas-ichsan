import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <h1>Ini juga page About</h1>
      <Link to="/home">Back to Home</Link>
    </Fragment>
  )
}

export default About;