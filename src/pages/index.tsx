// import AccessibleComponentsPage from '../components/AccessibleComponentsPage';

// export default function Home() {
//   return <AccessibleComponentsPage />;
// }

import Head from 'next/head';
import { useEffect } from 'react';
import AccessibleComponentsPage from '../components/AccessibleComponentsPage';

export default function Home() {
  // Add mobile menu functionality
  useEffect(() => {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu');
    
    if (mobileMenuButton && mobileMenu && closeMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
      });
      
      closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
      
      // Close menu when clicking outside
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
      
      // Close menu when clicking on a navigation link
      const mobileNavLinks = mobileMenu.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
    
    // Clean up event listeners on unmount
    return () => {
      if (mobileMenuButton && mobileMenu && closeMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {});
        closeMenuButton.removeEventListener('click', () => {});
        mobileMenu.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Accessible Components | Diksha Krishnan Portfolio</title>
        <meta name="description" content="Accessibility analysis of UI components by Diksha Krishnan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <AccessibleComponentsPage />
    </>
  );
}