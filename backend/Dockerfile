FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    sqlite3 \
    libsqlite3-dev \
    unzip \
    git \
    curl \
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

COPY . /var/www

WORKDIR /var/www

RUN composer install

EXPOSE 8000

RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
