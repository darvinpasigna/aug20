<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart_Model;

class Cart_Controller extends Controller
{
    //
    public function index(){
        $data = Cart_Model::all();

        if($data->count() > 0){
            return response()->json([
                'status' => 200,
                'data' => $data
                ]);
        }else{
            return response()->json([
                'status' => 404,
                'data' => "Not Found!"
                ]);
        }
    }

    public function store(Request $request)
    {
       
        $data = Cart_Model::create([
            "prod_name" => $request->prod_name,
            "price_per_item" => $request->price_per_item,
            "main_img" => $request->main_img
        ]);

        if ($data) {
            return response()->json([
                'status' => 200,
                'message' => 'Added to cart successfully!',
                'data' => $data
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Failed to add!'
            ]);
        }
    }
    public function destroy($id){
        $Data_fr_db = Cart_Model::find($id);
        $Data_fr_db->delete();
        if($Data_fr_db){
            return response()->json([
                'status' => 200,
                'message'=> 'Deleted successfully'
                ]);
        }else{
            return response()->json([
                'status' => 404,
                'message'=> 'Error'
                ]);
        }
    }
}
