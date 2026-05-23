<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Builder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
       // Desactivar migraciones internas que no necesitamos
        Builder::defaultMorphKeyType('uuid');

        $this->app->bind('migrator', function ($app) {
            $migrator = new \Illuminate\Database\Migrations\Migrator(
                $app['migration.repository'],
                $app['db'],
                $app['files'],
                $app['events']
            );

            // Evitar cargar migraciones internas de Laravel
            $migrator->path(database_path('migrations'));

            return $migrator;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
       Schema::defaultStringLength(191);
    }
}
