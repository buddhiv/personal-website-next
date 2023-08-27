import clsx from 'clsx';

import { GitHubIcon, LinkedinIcon, TwitterIcon } from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';

import BlogLink from './navigations/BlogLink';
import ResumeLink from './navigations/ResumeLink';


const workLinks = [
    // { title: 'Skills & Tools', href: '/work/skills-and-tools' },
    // { title: 'Experience', href: '/work/experience' },
    // { title: 'Studio', href: '/work/studio' },
    // { title: 'Contact', href: '/work/contact' },
    { title: 'Experience', href: '/work/experience' },
    { title: 'Skills & Tools', href: '/work/skills-and-tools' },
    { title: 'Projects', href: '/work/projects' },
    { title: 'Education', href: '/work/education' },
];

function Navbar() {
    const isScrolled = useOnScroll(0);

    return (
        <header
            className={clsx('fixed top-0 right-0 left-0 z-[1000]', 'fm:absolute')}
        >
            <div
                className={clsx(
                    'fixed inset-0 h-16',
                    [
                        isScrolled === true && [
                            'border-divider-light border-b bg-white/70 backdrop-blur',
                            'dark:border-divider-dark dark:bg-slate-900/80',
                        ],
                    ],
                    'fm:hidden'
                )}
            />
            <div className={clsx('content-wrapper-max')}>
                <div
                    className={clsx(
                        'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
                        'md:px-4'
                    )}
                >
                    <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
                        <NavLogo href="/" title="Home" />
                        <ul className={clsx('flex items-center', 'md:gap-1')}>
                            <li>
                                <NavLink title="Contact" href="/contact" />
                            </li>
                            <li>
                                <ResumeLink title="RESUME" />
                            </li>
                            {/* <li>
                                <NavLink title="T.I.L" href="/today-i-learned" />
                            </li> */}
                            <li className={clsx('lg:hidden')} data-accent="blue">
                                <NavLinkDropdown title="About" items={workLinks} />
                            </li>
                            <li className={clsx('hidden lg:block')} data-accent="blue">
                                <NavLinkExpanded title="About" items={workLinks} />
                            </li>
                        </ul>
                    </nav>
                    <ul className={clsx('flex items-center')}>
                        <li className={clsx('mr-2')}>
                            <BlogLink />
                        </li>
                        <li className={clsx('hidden', 'sm:block')}>
                            <NavIcon
                                href="https://twitter.com/enjidev"
                                icon={<LinkedinIcon className={clsx('h-5 w-5')} />}
                                title="Linkedin"
                            />
                        </li>
                        <li className={clsx('hidden', 'sm:block')}>
                            <NavIcon
                                href="https://github.com/enjidev"
                                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                                title="GitHub"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
