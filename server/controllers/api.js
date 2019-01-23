const { promisify } = require('util');
const request = require('request');
const path = require('path');
const webshot = require('webshot');
const uniqid = require('uniqid');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');

const Eyeliners = require('../models/Eyeliners');

exports.getStatus = (req, res) => {
  res.send('OK');
};

exports.postTestResult = async (req, res, next) => {
  const { result } = req.body;

  const errors = req.validationErrors();
  if (errors) {
    return next(errors);
  }

  console.log(result);
  const eyelinersModel = new Eyeliners({ ...result });

  eyelinersModel.save((err) => {
    if (err) {
      return next(err, 'Save New Eyeliner to Mongo');
    }
    res.send();
  });
};

exports.getTestResults = async (req, res, next) => {
  Eyeliners.find({},
    {
      createdAt: false,
      updatedAt: false,
      __v: false,
      _id: false
    },
    (err, eyeliners) => {
      res.send({ results: eyeliners });
    });
};
