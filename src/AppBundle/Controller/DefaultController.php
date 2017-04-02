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

    /**
     * @Route("/portfolio/lunacharsky", name="lunacharsky")
     */
    public function portfolioLunacharskyAction()
    {
        return $this->render('homepage/portfolio/lunacharsky.html.twig');
    }

    /**
     * @Route("/portfolio/mircar", name="mircar")
     */
    public function portfolioMircarAction()
    {
        return $this->render('homepage/portfolio/mircar.html.twig');
    }

    /**
     * @Route("/portfolio/prava70", name="prava70")
     */
    public function portfolioPrava70Action()
    {
        return $this->render('homepage/portfolio/prava70.html.twig');
    }

    /**
     * @Route("/portfolio/chemistry", name="chemistry")
     */
    public function portfolioСhemistryAction()
    {
        return $this->render('homepage/portfolio/chemistry.html.twig');
    }
}
