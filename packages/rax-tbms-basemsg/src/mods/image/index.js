/**
 * ----------------------------------
 * @file index.js
 * @desc image
 * @create: 2018/6
 * ----------------------------------
 */
import {Component, createElement, PropTypes, render} from 'rax';
import {isWeex, isWeb} from 'universal-env';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBody: {
    fontSize: 40,
    color: '#999'
  }
};

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerBody}>hello world</Text>
      </View>
    );
  }
}


export default App
