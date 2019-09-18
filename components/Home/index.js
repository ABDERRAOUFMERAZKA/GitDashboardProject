
import React, {Component, Fragment} from 'react'
import Head from '../Header'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import InputForm from '../InputForm'
import DetailsRepository from '../DetailsRepository'

// I had some problems with fetch javascript function
import axios from 'axios'

import styles from './HomeStyle'

export default class App extends Component {

constructor( ) {
  super()
}

state = {
  UserName: '',
  data: [],
  isDataFetched: false,
  isUserExist: true,
  repository: {},
  isRepositoryPressed: false,
}
  onChangeText(text) {
    this.setState(prevState => ({
      ...prevState,
      UserName: text
    }))
  }

  repositoryPressed(element) {
    this.setState(prevState => ({
      ...prevState,
      repository: element,
      isRepositoryPressed: true
    }))
  }

  returnToHome() {
    this.setState(prevState => ({
      ...prevState,
      isRepositoryPressed: false
    }))
  }

  validateName() {
    const { UserName } = this.state
    const URL = `https://api.github.com/users/${UserName}/repos`
    this.setState({
      isDataFetched: true,
      isUserExist: true,
    })
    if (UserName !== '') {
      return axios.get(URL,
      {
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'}
      })
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        this.setState({
          isUserExist: false,
        })
      })
    }
  }

  goToHome() {
    this.setState(prevState => ({
      ...prevState,
      isUserExist: false,
    }))
  }

  render () {
    const {
      UserName,
      isDataFetched,
      data,
      isUserExist,
      isRepositoryPressed,
      repository
    } = this.state

    const avatarUrl = data.length !== [] &&
      isDataFetched &&
      isUserExist &&
      data[0] &&
      data[0].owner &&
      data[0].owner.avatar_url

    const content = data.length !== [] &&
    isDataFetched &&
    isUserExist ? (
      <Fragment>
          <ListItem
            leftAvatar={{
              source: { uri: avatarUrl }
            }}
            title={UserName}
          />
        <ScrollView style={{flex: 1}}>
          {
            data.map((element) => (
              <TouchableOpacity
                style={styles.dataContent}
                key={element.id}
                onPress={() => this.repositoryPressed(element)}
              >
                <Icon
                  name='inbox'
                />
                <Text style={styles.text}>{element.name}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </Fragment>
    ) : (
      <View style={styles.formContainer} >
        <InputForm
          validateName={() => this.validateName()}
          onChangeText={(text) => this.onChangeText(text)}
        />
      </View>
    )
    const bodyContent = isRepositoryPressed ? (
      <DetailsRepository
        data={repository}
        userName={UserName}
        backToHome={() => this.returnToHome()}
      />
    ) : (
      <Fragment>
        {content}
      </Fragment>
    )
    return(
      <Fragment>
        <Head goToHomePage={() => this.goToHome()} />
        {bodyContent}
      </Fragment>
   )
 }
}
