import React, {Fragment} from 'react'
import { Header } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './HeaderStyle'

// All Strings are saved in constant.js
import { HEADER } from '../../constant'

const Head = ({
  goToHomePage
}) => {
  return (
    <Fragment>
        {/* Use header of react-native-element */}
        <Header
          leftComponent={{ icon: HEADER.icon.name, color: HEADER.icon.color, onPress: goToHomePage }}
          centerComponent={{ text: HEADER.title, style: styles.titleStyle }}
          containerStyle={styles.container}
        />
    </Fragment>
  )
}

Head.propTypes = {
  goToHomePage: PropTypes.func,
}

export default Head;
