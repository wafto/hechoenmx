#!/usr/bin/env bash

php artisan down
php artisan route:clear
php artisan config:clear
git fetch --all
git reset --hard origin/master
composer install
php artisan migrate
php artisan route:cache
php artisan config:cache
php artisan optimize
bower install --allow-root
npm install
gulp --production
php artisan up
