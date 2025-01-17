<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'username' =>  'required',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'invalid fields',
                'errors' => $validator->errors()

            ]);
        }

        $user = User::create([
            'username' => $request->username,
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'register successfully',
            'user' => $user
        ]);
    }

    public function login(Request $request){
        $auth = Auth::attempt([
            'username' => $request->username,
            'password' => $request->password,
        ]);

        if(!$auth){
            return response()->json([
                'message' => 'Unauthenticated',
            ]);
        }

        $token = uuid_create();

        auth()->user()->update([
            'token' => $token
        ]);

        return response()->json([
            'message' => 'login successfully',
            'token' => $token,
            'user' => auth()->user()
        ]);
    }

    public function logout(Request $request){
        $user = User::where('token', $request->bearerToken())->first();

        if(!$user){
            return response()->json([
                'message' => 'Unauthenticated'
            ]);
        }

        $user->update([
            'token' => null
        ]);

        return response()->json([
            'message' => 'logout successfully'
        ]);
    }
}
