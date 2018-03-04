<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Comment;
use AppBundle\Entity\Blog;

class CommentFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $comment = new Comment();
        $comment->setComment('To make a long story short. You can\'t go wrong by choosing Symfony! And no one has ever been fired for using Symfony.');
        $comment->setBlog($manager->merge($this->getReference('blog-1')));
        $manager->persist($comment);

        $manager->flush();
    }

    public function getOrder()
    {
        return 2;
    }
}