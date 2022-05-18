<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
  public function init_frontend()
  {

    $basename = env('BASENAME', '/');
    $app_url = env('APP_URL', '/');
    $app_name = env('APP_NAME', 'Your Appname');

    $settings = [
      'basename' => $basename,
      'app_url' => $app_url,
      'app_name' => $app_name,      
  ];

    return view('frontend.app', compact('settings'));
  }
}
