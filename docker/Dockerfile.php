FROM php:8.2-fpm

RUN apt-get update && apt-get install -y default-mysql-client \
    git unzip zip curl libicu-dev libpq-dev libzip-dev libonig-dev \
    && docker-php-ext-install intl pdo pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer