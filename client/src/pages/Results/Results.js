import React, { PureComponent } from 'react';
import cx from 'classnames';
import axios from 'axios';

import { EYELINEARS } from '../../constants';

import s from './Results.module.scss';

function sortObject(obj) {
  var arr = [];
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push({
        key: prop,
        value: obj[prop]
      });
    }
  }

  var property_type = typeof arr[0].value == 'string';
  // property_type: true~string, false~number

  arr.sort(function(a, b) {
    return property_type
      ? a.value.toLowerCase().localeCompare(b.value.toLowerCase())
      : a.value - b.value;
  });
  return arr; // returns array
}

export default class Results extends PureComponent {
  state = {
    stats: {}
  };

  async componentDidMount() {
    const {
      data: { results }
    } = await axios.get(
      `${process.env.REACT_APP_SERVER_DOMAIN_API}/test/results`
    );

    const stats = {};

    results.forEach(result => {
      Object.keys(result).forEach(property => {
        const { name } = EYELINEARS[property];
        if (stats[name]) {
          const type = result[property];
          let count = stats[name][type];
          stats[name][type] = count ? count + 1 : 1;
        } else {
          const type = result[property];
          stats[name] = { [type]: 1 };
        }
      });
    });

    Object.keys(stats).forEach(property => {
      const gonnaSort = { ...stats[property] };
      stats[property] = sortObject(gonnaSort).reverse();
    });

    this.setState({ stats });
  }

  render() {
    const { stats } = this.state;

    return (
      <div className={s.root}>
        <h1 className={s.title}>Results</h1>
        {Object.keys(stats).map(property => {
          return (
            <div key={property} className={s.property}>
              <h2>{property}</h2>
              <table className={s.types}>
                {stats[property].map(({ key, value }) => (
                  <tr key={key} className={cx(s.type)}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
