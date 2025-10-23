import * as React from 'react';
import { cn } from '@/libs/utils';
import { Badge } from '../Badge';

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('group relative pb-8 pl-8 sm:pl-44', className)}
    {...props}
  />
));
TimelineItem.displayName = 'TimelineItem';

const TimelineHero = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
TimelineHero.displayName = 'TimelineHero';

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-gray-200 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-gray-200 after:bg-secondary group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-40 sm:after:left-0 sm:after:ml-40',
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineTime = ({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        'text-white left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0',
        className
      )}
      variant={variant}
      {...props}
    >
      {props.children}
    </Badge>
  );
};
TimelineTime.displayName = 'TimelineTime';

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
TimelineDescription.displayName = 'TimelineDescription';

export {
  Timeline,
  TimelineItem,
  TimelineHero,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
};
