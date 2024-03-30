
'use client';

import { Footer } from 'flowbite-react';

export default function Component() {
    return (
        <Footer container>
            <Footer.Copyright href="https://folkjibix.netlify.app/" by="By FolkJiBi Official" year={2022} />
            <Footer.LinkGroup>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/blogs">Blogs</Footer.Link>
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/contact">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}
