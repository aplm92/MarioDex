<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Personaje;
use Illuminate\Http\Request;

class PersonajeController extends Controller
{
    public function index()
    {
        return Personaje::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|min:3',
            'tipo'   => 'required',
            'poder'  => 'required|integer|min:1',
            'mundo'  => 'required'
        ]);

        return Personaje::create($validated);
    }

    public function destroy($id)
    {
        Personaje::destroy($id);
        return response()->json(['message' => 'Eliminado']);
    }
}
