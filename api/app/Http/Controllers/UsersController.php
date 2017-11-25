<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller {

	function index(Request $request) {

		if($request->isJson()) {
			$users = User::all();
			return response()->json($users);
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}

	}

	function createUser(Request $request) {
		if($request->isJson()) {
			$user = new User;
			$user->username = $request->username;
			$user->first_name = $request->first_name;
			$user->last_name = $request->last_name;
			$user->password = $request->password;
			$user->email = $request->email;
			$user->address = $request->address;
			$user->zip_code = $request->zip_code;
			$user->save();
			return response()->json($user);
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}

	function deleteUser(Request $request) {
		$user = User::find($request->id);

		if($request->isJson()) {
			if($user) {
				$user->delete();
				return response()->json("User successfully deleted");
			} else {
				return response()->json(['error' => 'User does not exist']);
			}
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}

	function updateUser(Request $request) {
		$user = User::find($request->id);

		if($request->isJson()) {
			if($user) {
				$user->username = $request->username;
				$user->first_name = $request->first_name;
				$user->last_name = $request->last_name;
				$user->password = $request->password;
				$user->email = $request->email;
				$user->address = $request->address;
				$user->zip_code = $request->zip_code;
				$user->save();
				return response()->json("User successfully updated");
			} else {
				return response()->json(['error' => 'User does not exist']);
			}		
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}
}

