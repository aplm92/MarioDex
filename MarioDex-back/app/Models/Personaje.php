<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Personaje extends Model
{
    protected $fillable = ['nombre', 'tipo', 'poder', 'mundo'];
}
