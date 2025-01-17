<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' =>  'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'invalid fields',
                'errors' => $validator->errors()

            ]);
        }

        $category = Category::create($validator->validate());

        return response()->json([
            'message' => 'created successfully',
            'category' => $category
        ]);
    }

    public function show(string $name)
    {

        $category = Category::where('name', $name)->first();
        if ($category) {
            return response()->json([
                'category' => $category
            ]);
        }
    }

    public function showTasks(string $name)
    {
        $category = Category::where('name', $name)->first();
        if ($category) {
            return response()->json([
                'category' => $category
            ]);
        }

        $tasks = $category->tasks;
        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function update(Request $request, string $name)
    {
        $category = Category::where('name', $name)->first();
        if (!$category) {
            return response()->json([
                'message' => 'id not found'
            ]);
        }

        $category->update($request->all());

        return response()->json([
            'message' => 'data updated',
            'category' => $category
        ]);
    }

    public function destroy(string $name)
    {
        $category = Category::where('name', $name)->first();
        if (!$category) {
            return response()->json([
                'message' => 'id not found'
            ]);
        }

        $category()->delete();

        return response()->json([
            'message' => 'data deleted'
        ]);
    }
}
