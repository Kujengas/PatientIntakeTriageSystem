import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Locations from './components/Locations';
import FacilityDashboard from './components/FacilityDashboard';
import Facilities from './components/Facilities';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/facilities/' exact component={Facilities} />
        <Route path='/dashboard/:locationId' component={FacilityDashboard} />
  </Layout>
);
