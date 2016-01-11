#!/usr/bin/env bash

git push origin master;
git push heroku master;
heroku run sequelize db:migrate;
