import {
  animate, animateChild, animation, group, query, sequence, stagger, state, style, transition, trigger,
  useAnimation
} from '@angular/animations';

export const appAnimations = [
  trigger('collapseInOut', [
    state('0', style({
      height: '0px',
      display: 'none',
      opacity: 0
    })),
    state('1', style({
      height: '*',
      display: 'block',
      opacity: 1
    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
  trigger('collapseAppSidebar', [
    state('0', style({
      display: 'none',
      opacity: 0
    })),
    state('1', style({
      display: 'block',
      opacity: 1
    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
  trigger('toggleWidth', [
    state('0', style({
      width: 1
    })),
    state('1', style({
      width: '{{newWidth}}%'
    }), {params: {newWidth: 0}}),
    transition('0 => 1', animate('300ms ease-in')),
    transition('1 => 0', animate('300ms ease-out'))
  ]),
  trigger('fadeInOut', [
    state('0', style({
      display: 'none',
      opacity: 0
    })),
    state('1', style({
      display: 'block',
      opacity: 1
    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in'))
  ]),
  trigger('visibleInOut', [
    state('0', style({
      opacity: 0
    })),
    state('1', style({
      opacity: 1
    })),
    transition('1 => 0', animate('1000ms ease-out')),
    transition('0 => 1', animate('1000ms ease-in'))
  ])
];
