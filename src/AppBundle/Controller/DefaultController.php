<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Swift_Mailer;
use Swift_SmtpTransport;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    /**
     * @Route("/", name="home")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $form = $this->createFormBuilder()
            ->add('name', TextType::class, array('label' => false))
            ->add('email', TextType::class, array('label' => false))
            ->add('message', TextType::class, array('label' => false))
            ->add('save', SubmitType::class, array('label' => 'Отправить'))
            ->getForm();
        $form->handleRequest($request);

        $name = '';
        if ($request->request->get('name')) {
            $transport = (new Swift_SmtpTransport('smtp.gmail.com', 587))
                ->setUsername('olafan92@gmail.com')
                ->setPassword('fanola92');

            $mailer = new Swift_Mailer($transport);

            $name = $request->query->get('name');

            $message = (new \Swift_Message('Hello Email'))
                ->setFrom(['olafan92@gmail.com' => 'Личный сайт'])
                ->setTo('olafan92@gmail.com')
                ->setBody(
                    $this->renderView(
                        'emails/email.html.twig',
                        array('name' => 'name')
                    ),
                    'text/html'
                );

//            $this->get('mailer')->send($message);

            $mailer->send($message);
        }

        return $this->render('index.html.twig', array(
            'form' => $form->createView(),
            'name' => $name
        ));
    }

//    /**
//     * @Route("/send", name="send")
//     */
//    public function sendAction()
//    {
//        $message = (new \Swift_Message('Hello Email'))
//            ->setFrom(['olafan92@gmail.com' => 'Личный сайт'])
//            ->setTo('olafan92@gmail.com')
//            ->setBody(
//                $this->renderView(
//                    'emails/email.html.twig',
//                    array('name' => $_POST['name'])
//                ),
//                'text/html'
//            );
//
//        $this->get('mailer')->send($message);
//
////        return $this->redirectToRoute('home');
//    }

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
