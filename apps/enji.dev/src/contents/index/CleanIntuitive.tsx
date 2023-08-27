import clsx from 'clsx';
import { useState } from 'react';

import { QuoteIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
    state: TodoItemState;
    shows: Array<TodoItemState>;
    title: string;
    description: string;
};

const content: Array<Content> = [
    {
        state: 'typography',
        shows: ['typography'],
        title: 'Email me at',
        description: 'buddhi.vikasitha@gmail.com',
    },
    {
        state: 'spacing',
        shows: ['typography', 'spacing'],
        title: 'See my professional portfolio at',
        description: 'https://www.linkedin.com/in/buddhiv/',
    },
    {
        state: 'colors',
        shows: ['typography', 'spacing', 'colors'],
        title: 'Read my writings at',
        description: 'https://buddhiv.medium.com/',
    },
    {
        state: 'effects',
        shows: ['typography', 'spacing', 'colors', 'effects'],
        title: 'See my contributions at',
        description: 'https://github.com/buddhiv & https://gitlab.com/buddhiv',
    },
];

function CleanIntuitive() {
    const [currentState, setCurrentState] = useState<Content | null>(null);

    return (
        <>
            {/* <header className={clsx('mb-8')}>
                <SectionTitle
                    title="Eye Catching, Modern & Minimalist Design."
                    caption="Clean & Intuitive"
                    description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
                />
            </header> */}
            <SectionContent>
                <div className={clsx('flex', 'lg:gap-12')}>
                    <div
                        className={clsx('relative flex flex-1 items-center justify-center')}
                    >
                        <blockquote
                            className={clsx(
                                'flex gap-2 pt-2 text-3xl text-slate-500',
                                'md:text-4xl lg:pt-0 lg:text-5xl',
                                'dark:text-slate-400'
                            )}
                        >
                            <QuoteIcon
                                className={clsx(
                                    '-mt-1 h-10 text-slate-300',
                                    'md:-mt-3 md:h-16 lg:h-24',
                                    'dark:text-slate-800'
                                )}
                            />
                            <span className={clsx('flex flex-col')}>
                                <span>
                                    Get to
                                </span>
                                <span
                                    className={clsx('flex items-center gap-2 pl-16 leading-[1.15]', 'lg:gap-4')}
                                >
                                    <strong
                                        className={clsx(
                                            'relative font-extrabold text-slate-600',
                                            'dark:text-slate-300'
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-slate-100 px-1',
                                                'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
                                                'dark:bg-slate-800'
                                            )}
                                        />
                                        Know
                                    </strong>
                                    <span>
                                        me
                                    </span>
                                </span>
                            </span>
                        </blockquote>
                    </div>

                    <div
                        className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
                    >
                        {content.map((item, i) => (
                            <SectionButton
                                key={item.state}
                                title={item.title}
                                description={item.description}
                                icon={i + 1}
                                active={currentState?.state === item.state}
                                onClick={() => setCurrentState(item)}
                            />
                        ))}
                    </div>
                </div>
            </SectionContent>
        </>
    );
}

export default CleanIntuitive;
