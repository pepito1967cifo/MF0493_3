<?php
namespace App\Controllers;
// use: va unido a los namespaces. Funciona como un require, include...
use Core\Controller;
use Core\View;
use App\Models\HomeModel;

class HomeController extends Controller{

    public function indexAction(){
        View::renderTwig('Home/home.html');
    }

    public function obsAction(){
        View::renderTwig('Obs/observatorio.html');
    }

    public function htkAction(){
        View::renderTwig('Htk/hemeroteca.html');
    }

}
