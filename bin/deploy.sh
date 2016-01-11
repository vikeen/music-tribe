#!/usr/bin/env bash

npm test;
git push origin master;
git push heroku master;
heroku run sequelize db:migrate;
