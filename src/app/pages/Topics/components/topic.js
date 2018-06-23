import React from 'react';
import { Text } from 'react-native';
import styles from '../../../styles/styles';

const Topic = ({ match }) => (
  <Text style={styles.header}>{match.params.topicId}</Text>
);

export default Topic;
