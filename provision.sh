!/usr/bin/env bash

apt-get update

apt-get -y upgrade

apt-add-repository ppa:nginx/stable -y

apt-add-repository ppa:ondrej/php5-5.6 -y

apt-get install -y build-essential dos2unix gcc git libmcrypt4 libpcre3-dev

apt-get install php5-cli php5-dev php-pear php5-mysqlnd php5-pgsql php5-sqlite php5-apcu php5-json php5-curl php5-gd php5-gmp php5-imap php5-mcrypt php5-xdebug php5-memcached

sudo php5enmod mcrypt

curl -sS https://getcomposer.org/installer | php

mv composer.phar /usr/local/bin/composer

apt-get install nginx php5-fpm

service nginx restart

sed -i "s/user www-data;/user www-data;/" /etc/nginx/nginx.conf

sed -i "s/# server_names_hash_bucket_size.*/server_names_hash_bucket_size 64;/" /etc/nginx/nginx.conf

sed -i "s/user = www-data/user = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/group = www-data/group = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/listen.owner.*/listen.owner = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/listen.group.*/listen.group = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/;listen.mode.*/listen.mode = 0666/" /etc/php5/fpm/pool.d/www.conf

service nginx restart

service php5-fpm restart

apt-get install nodejs

ln -s /usr/bin/nodejs /usr/bin/node

apt-get install npm

npm install --global gulp

npm install -g bower

echo "mysql-server-5.6 mysql-server/root_password password root" | sudo debconf-set-selections

echo "mysql-server-5.6 mysql-server/root_password_again password root" | sudo debconf-set-selections

apt-get install mysql-server-5.6

sql_secure_installation

mysql --user="root" --password="root" -e "CREATE USER 'hechoenmx'@'localhost' IDENTIFIED BY 'hechoenmx';"

mysql --user="root" --password="root" -e "GRANT ALL ON . TO 'hechoenmx'@'localhost' IDENTIFIED BY 'hechoenmx' WITH GRANT OPTION;"

mysql --user="root" --password="root" -e "GRANT ALL ON . TO 'hechoenmx'@'%' IDENTIFIED BY 'hechoenmx' WITH GRANT OPTION;"

mysql --user="root" --password="root" -e "FLUSH PRIVILEGES;"

mysql --user="root" --password="root" -e "CREATE DATABASE hechoenmx;"

service mysql restart
