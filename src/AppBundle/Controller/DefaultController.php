<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

class DefaultController extends Controller
{
    /**
     * @Route("/{_locale}", name="home", defaults={"_locale" = "ru"})
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
     * @Route("/{_locale}/portfolio/arctic", name="arctic", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioArcticAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/arctic.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/lunacharsky", name="lunacharsky", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioLunacharskyAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/lunacharsky.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/mircar", name="mircar", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioMircarAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/mircar.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/prava70", name="prava70", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioPrava70Action(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/prava70.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/chemistry", name="chemistry", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioСhemistryAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/chemistry.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/b2bmircar", name="b2bmircar", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioB2bmircarAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/b2bmircar.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/evakuator", name="evakuator", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioEvakuatorAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/evakuator.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/avtosteklo", name="avtosteklo", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioAvtostekloAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/avtosteklo.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/bicyclecss", name="bicyclecss", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioBicyclecssAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/bicyclecss.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/trushnikova", name="trushnikova", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioTrushnikovaAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/trushnikova.html.twig', array(
            'locale' => $locale
        ));
    }

    /**
     * @Route("/{_locale}/portfolio/smovzhi", name="smovzhi", defaults={"_locale" = "ru"})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function portfolioSmovzhiAction(Request $request)
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/smovzhi.html.twig', array(
            'locale' => $locale
        ));
    }
}
