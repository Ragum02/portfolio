<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{


    public function newToken(Request $request){
        $token = $request->user()->createToken($request->token_name);

        return ['admin-token' => $token->plainTextToken];
    }
    public function signin(Request $request)
    {
        $credentials = $request->validate([
            'name' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);
          if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

return response()->json("c'est bon", 200);
        }

return response()->json("c'est pas bon", 403);
    }


}
