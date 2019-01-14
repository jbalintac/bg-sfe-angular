import {trigger, animate, style, transition} from '@angular/animations';


export const itemTransition = trigger('items', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 }))  // final
  ]),
]);
