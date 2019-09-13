import React from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from './DetailsRepositoryStyle'

// All Strings are saved in constant.js
import { DETAILS_REPOSITORY } from '../../constant'


const DetailsRepository = ({
    data,
    userName,
    backToHome
}) => {

  return (
    <View>
      <ListItem
        leftAvatar={{
          source: { uri: data.owner.avatar_url }
        }}
        title={userName}
        subtitle={data.html_url}
      />
      <ListItem
        title={data.name}
        subtitle={data.language}
        titleStyle={styles.container}
        subtitleStyle={styles.container}
      />
      <ListItem
        title={data.description}
        titleStyle={styles.container}
        subtitleStyle={styles.container}
      />
      <Icon
        name={DETAILS_REPOSITORY.icon.name}
        onPress={backToHome}
      />
    </View>
  )
}

DetailsRepository.propTypes = {
  data: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  backToHome: PropTypes.func.isRequired,
}

export default DetailsRepository;
