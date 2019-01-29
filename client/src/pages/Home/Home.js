import React, { PureComponent } from 'react';
import cx from 'classnames';
import axios from 'axios';

import { EYELINEARS } from '../../constants';

import s from './Home.module.scss';

export default class Home extends PureComponent {
  state = {
    selected: {},
    isTestFinished: false
  };

  onSelect = ({ typeName, property, product }) => {
    const selected = { ...this.state.selected };

    if (selected[property] === typeName) {
      delete selected[property];

      this.setState({
        selected: {
          ...selected
        }
      });

      return;
    }

    if (selected[property]) {
      delete selected[property];
    }

    this.setState({
      selected: {
        ...selected,
        [property]: typeName
      }
    });
  };

  onFinishTestClick = async () => {
    await axios.post(`http://localhost:8080/api/test/result`, {
      result: this.state.selected
    });

    this.setState({ selected: {}, isTestFinished: true });
  };

  render() {
    const { selected, isTestFinished } = this.state;

    return (
      <div className={s.root}>
        <h1 className={s.title}>Eyeliner</h1>
        {Object.keys(EYELINEARS).map(property => {
          const { types, name } = EYELINEARS[property];
          console.log(types);
          return (
            <div key={property} className={s.property}>
              <h2>{name}</h2>
              <div className={s.types}>
                {types.map(({ name, src }) => (
                  <div
                    key={name}
                    className={cx(
                      s.type,
                      selected[property] === name && s.selectedType
                    )}
                    onClick={() =>
                      this.onSelect({ name, property, product: EYELINEARS })
                    }
                  >
                    {name}
                    {!!src && <img src={src} />}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {isTestFinished ?
          <h2 className={s.thankYouMessage}>Your answers has been sent. Thank you!</h2>
          :
          <button onClick={this.onFinishTestClick}>Finish test</button>
        }
      </div>
    );
  }
}
