<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller {

	function index(Request $request) {

		if($request->isJson()) {
			$categories = Category::all();
			return response()->json($categories);
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}

	}
	
	function createCategory(Request $request) {
		if($request->isJson()) {
			$category = new Category;
			$category->name = $request->name;
			$category->save();
			return response()->json($category);
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}
	
		function deleteCategory(Request $request) {
		$category = Category::find($request->id);

		if($request->isJson()) {
			if($category) {
				$category->delete();
				return response()->json("Category successfully deleted");
			} else {
				return response()->json(['error' => 'Category does not exist']);
			}
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}
	
	function updateCategory(Request $request) {
		$category = Category::find($request->id);

		if($request->isJson()) {
			if($category) {
				$category->name = $request->name;
				$category->save();
				return response()->json("Category successfully updated");
			} else {
				return response()->json(['error' => 'Category does not exist']);
			}		
		} else {
			return response()->json(['error' => 'Unauthorized']);
		}
	}
}