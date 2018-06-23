import React from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import styles from './src/app/styles/styles';
import Home from './src/app/pages/Home/Home';
import About from './src/app/pages/About/About';
import Topics from './src/app/pages/Topics/Topics';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>About</Text>
            </Link>
            <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Topics</Text>
            </Link>
          </View>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </View>
      </NativeRouter>
    );
  }
}
