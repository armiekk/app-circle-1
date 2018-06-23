import React from 'react';
import { View, Text } from 'react-native';
import { Link, Route } from 'react-router-native';

import styles from '../../styles/styles';
import Topic from './components/topic';

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <Text style={styles.topic}>Please select topic.</Text>}
    />
  </View>
);

export default Topics;
