import clsx from 'clsx';
import Link from 'next/link';

import { DocumentIcon } from '../Icons';

import type { ReactNode } from 'react';

export type NavLinkProps = {
    title: string;
    icon?: ReactNode;
};

function ResumeLink({ title, icon = null }: NavLinkProps) {
    return (
        <div className={clsx('px-2')}>
            <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://www.figma.com/community/file/1176377524040948926"
                className={clsx('px-0 flex flex-row items-center gap-1', 'md:px-0')}
            >
                <DocumentIcon className={clsx('h-4 w-4')} />
                <span className={clsx('text-xs font-bold')}>RESUME</span>
            </a>
        </div>
    );
}

export default ResumeLink;
