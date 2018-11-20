<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class DefaultController extends Controller
{
    /**
     * @Route("/{_locale}", name="home", defaults = {"_locale" = "en"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('index.html.twig', array(
            'locale' => $locale
        ));
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

    /**
     * @Route("/portfolio/b2bmircar", name="b2bmircar")
     */
    public function portfolioB2bmircarAction()
    {
        return $this->render('homepage/portfolio/b2bmircar.html.twig');
    }

    /**
     * @Route("/portfolio/evakuator", name="evakuator")
     */
    public function portfolioEvakuatorAction()
    {
        return $this->render('homepage/portfolio/evakuator.html.twig');
    }
}
