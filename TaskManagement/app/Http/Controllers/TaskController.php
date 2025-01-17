<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function index(){
        $tasks = Task::all();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'title' =>  'required',
            'description' => 'required',
            'priority' => 'required',
            'status' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'invalid fields',
                'errors' => $validator->errors()

            ]);
        }

        $task = Task::create($validator->validate());

        return response()->json([
            'message' => 'created successfully',
            'task' => $task
        ]);
    }

    public function show($id){

        $task = Task::find($id);
        if($task){
            return response()->json([
                'task'=> $task
            ]);
        }
    }

    public function update(Request $request, $id){
        $task = Task::find($id);
        if(!$task){
            return response()->json([
                'message' => 'id not found'
            ]);
        }

        $task->update($request->all());

        return response()->json([
            'message' => 'data updated',
            'task' => $task
        ]);
    }

    public function destroy($id){
        $task = Task::find($id);
        if(!$task){
            return response()->json([
                'message' => 'id not found'
            ]);
        }

        $task->delete();

        return response()->json([
            'message' => 'data deleted'
        ]);
    }

}
