import React, { PureComponent } from 'react';
import cx from 'classnames';
import axios from 'axios';

import { EYELINEARS } from '../../constants';

import s from './Home.module.scss';

export default class Home extends PureComponent {
  state = {
    selected: {}
  };

  onSelect = ({ type, property, product }) => {
    const selected = { ...this.state.selected };

    if (selected[property] === type) {
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
        [property]: type
      }
    });
  };

  onFinishTestClick = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN_API}/test/result`, {
      result: this.state.selected
    });

    this.setState({ selected: {} });
  };

  render() {
    const { selected } = this.state;
    console.log(selected);
    return (
      <div className={s.root}>
        <h1 className={s.title}>Eyeliner</h1>
        {Object.keys(EYELINEARS).map(property => {
          const { types, name } = EYELINEARS[property];

          return (
            <div key={property} className={s.property}>
              <h2>{name}</h2>
              <div className={s.types}>
                {types.map(type => (
                  <div
                    key={type}
                    className={cx(
                      s.type,
                      selected[property] === type && s.selectedType
                    )}
                    onClick={() =>
                      this.onSelect({ type, property, product: EYELINEARS })
                    }
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <button onClick={this.onFinishTestClick}>Finish test</button>
      </div>
    );
  }
}
