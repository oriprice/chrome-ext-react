import React from 'react';
import { withRouter } from 'react-router';
import { shape, string } from 'prop-types';

const App = ({ location }) => (location.search.indexOf('options') > 0
  ? <div>This is the settings page</div> : <div>This is the app</div>
);

App.propTypes = {
  location: shape({
    search: string,
  }).isRequired,
};

export default withRouter(App);
