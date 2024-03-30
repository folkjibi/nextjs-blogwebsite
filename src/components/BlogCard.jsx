'use client';

import { Card } from 'flowbite-react';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    const { id, title, description, image } = blog;

    return (
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    {title}
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <span>
                    {description}
                </span>
            </p>

            <Link href={`/blogs/${id}`}>
                <button className="btn hover:bg-red-700 hover:text-white">Read Now</button>
            </Link>
        </Card>
    )
}

export default BlogCard;