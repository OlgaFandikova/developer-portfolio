<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="home")
     */
    public function indexAction()
    {
        return $this->render('index.html.twig');
    }

    /**
     * @Route("/portfolio/arctic", name="arctic")
     */
    public function portfolioArcticAction()
    {
        return $this->render('homepage/portfolio/arctic.html.twig');
    }
}
