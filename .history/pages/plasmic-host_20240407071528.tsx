import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';

// Define the handleScroll function
function handleScroll() {
    var topNav = document.querySelector('.top-nav');
    if (window.scrollY > 100) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
}

// Register the handleScroll function
PLASMIC.registerFunction(handleScroll, {
    name: 'handleScroll',
    description: 'Function to handle scrolling and update top navigation appearance.'
});

export default function PlasmicHost() {
    return PLASMIC && <PlasmicCanvasHost />;
}
