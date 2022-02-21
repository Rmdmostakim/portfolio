<?php

namespace App\Http\Controllers;

use App\Models\Mails;
use App\Models\Products;
use App\Models\Services;
use App\Models\SocialMedia;
use App\Models\Utility;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Boolean;
use function PHPUnit\Framework\isEmpty;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getBrandName(){
        return Utility::where([['status','=',1],['UtilityName','=','Brandname']])->pluck('value');
    }

    public function getAllBrandName(){
        return Utility::where('UtilityName', 'BrandName')->get();
    }

    public function addBrandName(Request $request){
        $brandName = $request->input('brandName');

        $result= Utility::updateOrInsert(
            ['UtilityName' => 'Brandname','status' => 1],
            ['value' => $brandName]
        );
        if($result){
            return true;
        }
        return false;
    }

    public function getAllServices(){
        return Services::get();
    }

    public function addService(Request $request){
        $title = $request->input('title');
        $desc  = $request->input('description');
        $img = $request->file('image');

        $imgName = Str::random(30).'.'.$img->extension();
        $imgPath = $img->move('images',$imgName);
        $imgPath = Str::replace('\\', '/', $imgPath);
        $imgLocation = 'http://'.$_SERVER['HTTP_HOST'].'/'.$imgPath;

        $result = Services::insert([
            'title' => $title,
            'description' => $desc,
            'image' => $imgLocation
        ]);

        if($result===true){
            return true;
        }
        return false;
    }

    public function editService(Request $request){
        $id         = $request->input('id');
        $title = $request->input('title');
        $desc  = $request->input('description');

        if ($request->hasFile('image')) {
            $img = $request->file('img');
            $imgName = Str::random(30).'.'.$img->extension();
            $imgPath = $img->move('images',$imgName);
            $imgPath = Str::replace('\\', '/', $imgPath);
            $imgLocation = 'http://'.$_SERVER['HTTP_HOST'].'/'.$imgPath;

            $result = Services::where('id', $id)
                ->update([
                    'title' => $title,
                    'description' => $desc,
                    'image' => $imgLocation
                ]);
            if($result){
                return true;
            }
        }else{
            $result = Services::where('id', $id)
                ->update([
                    'title' => $title,
                    'description' => $desc,
                ]);
            if($result){
                return true;
            }
        }
    }

    public function deleteService(Request $request){
        $id = $request->input('id');

        $result = Services::where('id', '=', $id)->delete();
        if($result){
            return true;
        }
        return false;
    }

    public function getAllProducts(){
        return Products::get();
    }
	
	public function recentProducts(){
		return Products::take(5)->get();
	}

    public function addProduct(Request $request){
        $name = $request->input('name');
        $features  = $request->input('features');
        $link  = $request->input('link');
        $img = $request->file('image');

        $imgName = Str::random(30).'.'.$img->extension();
        $imgPath = $img->move('images',$imgName);
        $imgPath = Str::replace('\\', '/', $imgPath);
        $imgLocation = 'http://'.$_SERVER['HTTP_HOST'].'/'.$imgPath;

        $result = Products::insert([
            'name' => $name,
            'features' => $features,
            'link'=> $link,
            'image' => $imgLocation,
        ]);

        if($result===true){
            return true;
        }
        return false;
    }

    public function editProduct(Request $request){
        $id         = $request->input('id');
        $name       = $request->input('name');
        $features   = $request->input('features');
        $link       = $request->input('link');

        if ($request->hasFile('image')) {
            $img = $request->file('image');
            $imgName = Str::random(30).'.'.$img->extension();
            $imgPath = $img->move('images',$imgName);
            $imgPath = Str::replace('\\', '/', $imgPath);
            $imgLocation = 'http://'.$_SERVER['HTTP_HOST'].'/'.$imgPath;

            $result = Products::where('id', $id)
                ->update([
                    'name' => $name,
                    'features' => $features,
                    'link'=> $link,
                    'image' => $imgLocation
                ]);
            if($result){
                return true;
            }
        }else{
            $result = Products::where('id', $id)
                ->update([
                    'name' => $name,
                    'features' => $features,
                    'link'=> $link
                ]);
            if($result){
                return true;
            }
        }
        return false;
    }

    public function deleteProduct(Request $request){
        $id = $request->input('id');

        $result = Products::where('id', '=', $id)->delete();
        if($result){
            return true;
        }
        return false;
    }

    public function getAllSocialMedia(){
        return SocialMedia::get();
    }

    public function addOrUpdateSocailMedia(Request $request){
        $media = $request->input('medianame');
        $link = $request->input('link');
        $result= SocialMedia::updateOrInsert(
            ['medianame'=>$media],
            ['link' => $link,'medianame'=>$media]
        );
        if($result){
            return true;
        }
        return false;
    }

    public function Dashboard(){
        $servicesNumber = Services::count();
        $productsNumber = Products::count();
        $clientNumber   = Mails::distinct('email')->count();
        $msgNumbers     = Mails::count();

        $responseData = [
            array("title" => "Services", "count" => $servicesNumber),
            array("title" => "Products", "count" => $productsNumber),
            array("title" => "Clients", "count" => $clientNumber),
            array("title" => "Mail", "count" => $msgNumbers),
        ];
        return response($responseData);
    }

    public function getAllMails(){
        return Mails::get();
    }

    public function sendMail(Request $request){
        $email = $request->input('email');
        $message  = $request->input('message');
        $date ='';

        $result = Mails::insert([
            'email' => $email,
            'message' => $message,
            'date'=> $date
        ]);

        if($result===true){
            return true;
        }
        return false;
    }

    public function readMail(Request $request){
        $id = $request->input('id');
        $result = Mails::where('id', $id)
            ->update([
                'status' => 1
            ]);
        if($result){
            return true;
        }
        return false;
    }

}
