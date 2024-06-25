<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{
    #[Route('/')]
    public function index(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('index.html.twig', [
            'locale' => $locale,
        ]);
    }

    #[Route('/{_locale}/portfolio/sewing-pattern', name: 'sewing-pattern', defaults: {"_locale" = "ru"})]
    public function portfolioSewingPatternAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/sewing-pattern.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/bicyclecss', name: 'bicyclecss', defaults: {"_locale" = "ru"})]
    public function portfolioBicyclecssAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/bicyclecss.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/smovzhi', name: 'smovzhi', defaults: {"_locale" = "ru"})]
    public function portfolioSmovzhiAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/smovzhi.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/trushnikova', name: 'trushnikova', defaults: {"_locale" = "ru"})]
    public function portfolioTrushnikovaAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/trushnikova.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/prava70', name: 'prava70', defaults: {"_locale" = "ru"})]
    public function portfolioPrava70Action(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/prava70.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/avtosteklo', name: 'avtosteklo', defaults: {"_locale" = "ru"})]
    public function portfolioAvtostekloAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/avtosteklo.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/arctic', name: 'arctic', defaults: {"_locale" = "ru"})]
    public function portfolioArcticAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/arctic.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/evakuator', name: 'evakuator', defaults: {"_locale" = "ru"})]
    public function portfolioEvakuatorAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/evakuator.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/chemistry', name: 'chemistry', defaults: {"_locale" = "ru"})]
    public function portfolioChemistryAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/chemistry.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/lunacharsky', name: 'lunacharsky', defaults: {"_locale" = "ru"})]
    public function portfolioLunacharskyAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/lunacharsky.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/mircar', name: 'mircar', defaults: {"_locale" = "ru"})]
    public function portfolioMircarAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/mircar.html.twig', array(
            'locale' => $locale
        ));
    }

    #[Route('/{_locale}/portfolio/b2bmircar', name: 'b2bmircar', defaults: {"_locale" = "ru"})]
    public function portfolioB2bmircarAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render('homepage/portfolio/b2bmircar.html.twig', array(
            'locale' => $locale
        ));
    }
}
