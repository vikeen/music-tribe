#!/usr/bin/env bash

NODE_ENV=test npm test &&
git push origin master &&
git push heroku master &&
heroku run sequelize db:migrate;
