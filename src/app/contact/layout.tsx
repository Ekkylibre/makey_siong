import { ReactNode } from 'react';

export const metadata = {
    title: 'Makey Siong | Contact',
    description: 'Generated by Next.js',
};

type ContactLayoutProps = {
    children: ReactNode;
};

export default function ContactLayout({ children }: ContactLayoutProps) {
    return (
        <div>
            {children}
        </div>
    );
}
