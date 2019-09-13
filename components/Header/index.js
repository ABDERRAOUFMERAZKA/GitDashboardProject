import React, {Fragment} from 'react'
import { Header } from 'react-native-elements'
import styles from './HeaderStyle'

// All Strings are saved in constant.js
import { HEADER } from '../../constant'

const Head = () => {
  return (
    <Fragment>
        {/* Use header of react-native-element */}
        <Header
          leftComponent={{ icon: HEADER.icon.name, color: HEADER.icon.color }}
          centerComponent={{ text: HEADER.title, style: styles.titleStyle }}
          containerStyle={styles.container}
        />
    </Fragment>
  )
}

export default Head;
