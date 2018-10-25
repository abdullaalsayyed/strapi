import React from 'react';
import { get, isEmpty, map, mapKeys, isObject, reject, includes, upperFirst } from 'lodash';

import styles from './styles.scss';
import {FormattedMessage} from 'react-intl';


function LocationInputWithErrors (requiredClass, inputDescription, handleBlur) {

  let spacer = !isEmpty(this.props.inputDescription) ? <div className={styles.spacer} /> : <div />;

  if (!this.props.noErrorsDescription && !isEmpty(this.state.errors)) {
    spacer = <div />;
  }

  return (
    <div className={`${styles.inputTextArea} ${this.props.customBootstrapClass || 'col-md-6'} ${requiredClass}`}>
      <label htmlFor={this.props.label}>
        <FormattedMessage id={`${this.props.label}`} defaultMessage={upperFirst(this.props.label)} />
      </label>
      <FormattedMessage id={this.props.placeholder || this.props.label}>
        {(placeholder) => (
          <LocationInput
            className={`form-control ${!this.props.deactivateErrorHighlight && !isEmpty(this.state.errors) ? 'is-invalid': ''}`}
            label={`${this.props.label}`}
            value={this.props.value}
            tabIndex={this.props.tabIndex}
            onChange={(data) => this.props.onChange({ target: {
                name: this.props.name,
                value: data,
              }})}
          />
        )}
      </FormattedMessage>
      <div className={styles.inputTextAreaDescriptionContainer}>
        <small>{inputDescription}</small>
      </div>
      {this.renderErrors(styles.errorContainerTextArea)}
      {spacer}
    </div>
  );
}
