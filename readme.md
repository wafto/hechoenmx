## RETO #HECHOEN.MX
Desarrollar una plataforma para promover la presencia de empresas emergentes de TIC y ofrecer mayores oportunidades de negocio para éstas.

### Notas importantes de desarrollo

- **No hacer fork del proyecto.**
- No se permitiran commits directamente en las branches de develop y master ya que estas serán administradas por el RM (Release Manager), solo casos especiales a criterio del equipo de trabajo y del RM.
- Se debe usar el modelo de branching de [git-flow](http://danielkummer.github.io/git-flow-cheatsheet/).
- Cada vez que se trabaje en algo se debe crear una branch a partir de develop y posteriormente al finalizar los cambios en vez de hacer un ```git flow feature finish nombre``` se subirá la branch al repo y de esa branch enviar el Pull Request a develop para que a su momento y después de que alguien más revise el código haga el merge a develop.
- El nombre de los commits debe ser en inglés empezando con letra mayúscula y bien explicado de lo que se trata el commit.
- El nombre de las feature branch debe ser también en inglés y al estilo ```feature/cursos-api-implementation```.
- Cuando se agregue alguna dependencia tanto en [NPM](https://www.npmjs.com) o [Bower](http://bower.io), usar versiones exactas sin anteponer tilde en la versión.

### Autores
- Aftab Hussain Miranda (wafto.mx@gmail.com)
- Salvador Lopez Mendoza (simiographics@gmail.com)
- Eduardo Ortiz Ramírez (edbr.or@gmail.com)

### Video de funcionamiento +  Plan de Trabajo y Cronograma
https://drive.google.com/folderview?id=0Bz71CcNvpZFDVTRaVkh6SlQtX2M&usp=sharing

### Manual de Instalación

El prototipo mx_C cuenta con un sencillo proceso de instalación para lo cual es necesario contar con los requerimientos siguientes en el servidor:

- Ubuntu 14.04
- NGINX 1.8.0
- MySQL 5.5
- PHP 5.6
- Node 0.12.7
- Gulp 3.9.0
- NPM 2.11.3
- Bower 1.5.3
- Composer 1.0
- Angular 1.4.7
- Laravel 5.0

Dicho proceso contempla los siguientes pasos:

1. Instalar NGINX, MySQL y PHP
2. Instalacion de gestores de paquetes y automatizadores (Composer, Node, NPM, Bower, Gulp)
3. Configurar MySQL
4. Configurar NGINX
5. Clonar repositorio
6. Configurar archivo .env
7. Instalar dependencias de PHP con Composer
8. Instalar dependencias de JS con NPM
9. Instalar dependencias adicionales con Bower
10. Generar archivos CSS y JS con Gulp


#### Preparamos el servidor

Accedemos via SSH al servidor, creamos una carpeta nueva llamada hechoenmx en /var/www/ y en ella creamos un archivo llamado provision.sh dentro del cual copiamos la siguiente informacion en el:

 #!/usr/bin/env bash
 
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

sed -i "s/listen\.owner.*/listen.owner = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/listen\.group.*/listen.group = www-data/" /etc/php5/fpm/pool.d/www.conf

sed -i "s/;listen\.mode.*/listen.mode = 0666/" /etc/php5/fpm/pool.d/www.conf

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

mysql --user="root" --password="root" -e "GRANT ALL ON *.* TO 'hechoenmx'@'localhost' IDENTIFIED BY 'hechoenmx' WITH GRANT OPTION;"

mysql --user="root" --password="root" -e "GRANT ALL ON *.* TO 'hechoenmx'@'%' IDENTIFIED BY 'hechoenmx' WITH GRANT OPTION;"

mysql --user="root" --password="root" -e "FLUSH PRIVILEGES;"

mysql --user="root" --password="root" -e "CREATE DATABASE hechoenmx;"

service mysql restart

####Damos permisos de ejecución al archivo provision.sh y lo ejecutamos
- chmod +x provision.sh
- ./yourscript.sh

#### Configuramos NGINX

- cd /etc/nginx/sites-available
- rm -rf default
- touch rm -rf default
- nano default

server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    root /var/www/expertic/public;
    index index.php index.html index.htm;

    server_name server_domain_or_IP;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php5-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}

- ctrl + o
- ctrl + x
- service nginx restart

#### Colonamos el repositorio
- git clone https://github.com/wafto/hechoenmx

#### Asignamos permisos de usuario
- chown -R www-data:root hechoenmx/
- cd hechoenmx/

#### Configuramos archivo .env
- cp .env.example .env

APP_ENV=production

APP_DEBUG=false

APP_KEY=bn1XbLpq71v7sU9CZz38NJMis7JWHO2w

DB_HOST=localhost

DB_DATABASE=hechoenmx

DB_USERNAME=hechoenmx

DB_PASSWORD=hechoenmx

CACHE_DRIVER=file

SESSION_DRIVER=file

QUEUE_DRIVER=sync

MAIL_DRIVER=smtp

MAIL_HOST=mailtrap.io

MAIL_PORT=2525

MAIL_USERNAME=null

MAIL_PASSWORD=null

MAIL_ENCRYPTION=null

JWT_SECRET=t64aa1PhphT8RURRN5pebMwgtH5BD1Ab

JWT_TTL=60

API_PREFIX=api

#### Instalamos la aplicacion con Composer
- composer install

#### Instalamos dependencias con NPM
- npm install

#### Instalamos dependencias con Bower
- bower install --allow-root

#### Corremos Gulp para generar CSS y JS
- gulp --production



 

