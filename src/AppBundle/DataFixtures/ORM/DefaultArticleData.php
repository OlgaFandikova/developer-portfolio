<?php

namespace AppBundle\DataFixtures\ORM;

use AppBundle\Entity\Blog;
use AppBundle\Entity\Comment;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class DefaultArticleData extends AbstractFixture implements OrderedFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $blog = new Blog();
        $blog->setTitle('This is second title');
        $blog->setDescription('<p>Это очень интересная статья</p>');
        $blog->setBody('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at excepturi</p>');
        $blog->setCreated(new \DateTime());

        $comment = new Comment();
        $comment->setComment("Прекрасный комментарий!");
        $blog->addComment($comment);

        $manager->persist($blog);
        $manager->flush();

        $this->addReference('blog-1', $blog);
    }

    public function getOrder()
    {
        return 1;
    }
}