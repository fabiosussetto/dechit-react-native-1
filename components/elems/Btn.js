import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    ThemeProvider,
  } from 'react-native';

import PropTypes from 'prop-types';

import {LayoutStyle, BtnStyle, BtnStyleDanger} from '../../stylesheets/styles';
import { Sizes } from '../../constants/Theme';

// TODO far prendere anche stile Text

export class Btn extends React.Component {
  render() {
    return (
      <TouchableHighlight {...this.props} style={[BtnStyle.box,this.props.style]}>
        <Text style={BtnStyle.text}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    )
  }
}

export default Btn
