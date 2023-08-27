import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
    hide: { pathLength: 0.3 },
    show: (i) => {
        const delay = 0.6 + i * 0.1;
        return {
            pathLength: 1,
            transition: {
                pathLength: { delay, duration: 1 },
            },
        };
    },
};

interface HeaderImageAnimationProps {
    onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
    onAnimationComplete = () => { },
}: HeaderImageAnimationProps) {
    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 457 526"
            fill="none"
            initial="hide"
            animate="show"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx(
                'stroke-accent-500 h-[526px] w-[457px] opacity-60',
                'dark:opacity-40'
            )}
            onAnimationComplete={onAnimationComplete}
        >
            <m.rect
                x="254.558"
                y="1.41421"
                width="122"
                height="358"
                rx="61"
                transform="rotate(45 254.558 1.41421)"
                variants={animation}
                custom={1}
            />
            <m.rect
                x="341.105"
                y="421.087"
                width="122"
                height="358"
                rx="61"
                transform="rotate(135 341.105 421.087)"
                variants={animation}
                custom={2}
            />
            <m.rect
                y="1.41421"
                width="122"
                height="358"
                rx="61"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 374.96 111.414)"
                variants={animation}
                custom={3}
            />
            <m.rect
                x="1.41421"
                y="-1.19209e-07"
                width="122"
                height="358"
                rx="61"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 288.414 531.087)"
                variants={animation}
                custom={4}
            />
        </m.svg>
    );
}

export default HeaderImageAnimation;
