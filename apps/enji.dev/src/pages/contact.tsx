import clsx from 'clsx';

import { GitHubIcon, GitLabIcon, GmailIcon, LinkedinIcon, MailIcon, MediumIcon, PhoneIcon } from '@/components/Icons';

import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = {
    posts: BlogContentsProps['posts'];
};

function Blog({ posts }: BlogProps) {
    return (
        <Page
            frontMatter={{
                title: 'Contact',
                description: 'Get in touch with me anytime, through any of the following.',
            }}
        >
            <div className={clsx('content-wrapper')}>
                <div
                    className={clsx(
                        'mb-8 flex flex-col items-center gap-4',
                        'md:mb-4 md:gap-6'
                    )}
                >
                    <div className={clsx('flex flex-row justify-between w-4/5')}>
                        <div className={clsx('flex flex-row items-center gap-5')}>
                            <div
                                className={clsx(
                                    'border-divider-light hidden w-8 border-b',
                                    'md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                            />
                            <span>
                                Email me at
                            </span>
                            <span className={clsx(
                                'text-lg font-bold text-slate-700',
                                'dark:text-slate-300'
                            )}>
                                buddhi.vikasitha@gmail.com
                            </span>
                        </div>

                        <div>
                            <GmailIcon className={clsx('h-6 w-6')} />
                        </div>
                    </div>

                    <div className={clsx('flex flex-row justify-between w-4/5')}>
                        <div className={clsx('flex flex-row items-center gap-5')}>
                            <div
                                className={clsx(
                                    'border-divider-light hidden w-8 border-b',
                                    'md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                            />
                            <span>
                                Call me on
                            </span>
                            <span className={clsx(
                                'text-lg font-bold text-slate-700',
                                'dark:text-slate-300'
                            )}>
                                +94 71 2489 789
                            </span>
                        </div>

                        <div>
                            <PhoneIcon className={clsx('h-6 w-6')} />
                        </div>
                    </div>

                    <div className={clsx('flex flex-row justify-between w-4/5')}>
                        <div className={clsx('flex flex-row items-center gap-5')}>
                            <div
                                className={clsx(
                                    'border-divider-light hidden w-8 border-b',
                                    'md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                            />
                            <span>
                                See my professional portfolio at
                            </span>
                            <span className={clsx(
                                'text-lg font-bold text-slate-700',
                                'dark:text-slate-300'
                            )}>
                                https://www.linkedin.com/in/buddhiv
                            </span>
                        </div>

                        <div>
                            <LinkedinIcon className={clsx('h-6 w-6')} />
                        </div>
                    </div>

                    <div className={clsx('flex flex-row justify-between w-4/5')}>
                        <div className={clsx('flex flex-row items-center gap-5')}>
                            <div
                                className={clsx(
                                    'border-divider-light hidden w-8 border-b',
                                    'md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                            />
                            <span>
                                Read my writings at
                            </span>
                            <span className={clsx(
                                'text-lg font-bold text-slate-700',
                                'dark:text-slate-300'
                            )}>
                                https://buddhiv.medium.com/
                            </span>
                        </div>

                        <div>
                            <MediumIcon className={clsx('h-6 w-6')} />
                        </div>
                    </div>

                    <div className={clsx('flex flex-row justify-between w-4/5')}>
                        <div className={clsx('flex flex-row items-center gap-5')}>
                            <div
                                className={clsx(
                                    'border-divider-light hidden w-8 border-b',
                                    'md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                            />
                            <span>
                                See my contributions at
                            </span>
                            <div className={clsx('flex flex-col')}>
                                <span className={clsx(
                                    'text-lg font-bold text-slate-700',
                                    'dark:text-slate-300'
                                )}>
                                    https://github.com/buddhiv
                                </span>
                                <span className={clsx(
                                    'text-lg font-bold text-slate-700',
                                    'dark:text-slate-300'
                                )}>
                                    https://gitlab.com/buddhiv
                                </span>
                            </div>
                        </div>

                        <div className={clsx('flex flex-row gap-2 items-center')}>
                            <GitHubIcon className={clsx('h-6 w-6')} />
                            <GitLabIcon className={clsx('h-6 w-6')} />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const allPostsData = getSortedPosts();

    return {
        props: {
            posts: allPostsData,
        },
    };
};

export default Blog;
