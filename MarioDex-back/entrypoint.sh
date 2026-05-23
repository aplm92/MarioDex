#!/bin/bash

# Generar APP_KEY si no existe
if [ ! -f /var/www/html/storage/app_key_set ]; then
    php artisan key:generate --force
    touch /var/www/html/storage/app_key_set
fi

# Ejecutar migraciones automáticamente
php artisan migrate --force || true

# Iniciar Apache (NO usar php artisan serve)
apache2-foreground
