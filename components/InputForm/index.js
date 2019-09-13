import React, {Fragment} from 'react';
import { Button, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './InputFormStyle'

// All Strings are saved in constant.js
import {INPUT_FORM} from '../../constant'


const InputForm = ({
    onChangeText,
    validateName
}) => {
  return (
    <Fragment>
      <TextInput
        placeholder={INPUT_FORM.input_text.placeholder}
        borderBottomColor={INPUT_FORM.input_text.border_color}
        style={styles.container}
        onChangeText={onChangeText}
      />
       <Button
         title={INPUT_FORM.button.title}
         color={INPUT_FORM.button.color}
         onPress={validateName}
      />
    </Fragment>
  );
};

InputForm.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  validateName: PropTypes.func.isRequired,
}

export default InputForm;
