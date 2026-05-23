#!/bin/bash

# Generar APP_KEY si no existe
if [ ! -f /var/www/html/storage/app_key_set ]; then
    php artisan key:generate --force
    touch /var/www/html/storage/app_key_set
fi

# Ejecutar migraciones automáticamente
php artisan migrate --force

# Iniciar Laravel
php artisan serve --host=0.0.0.0 --port=80
