
import React, { useEffect } from 'react';

const TallyForm = () => {
  useEffect(() => {
    // This function initializes Tally forms by either using the Tally API
    // or by manually setting the src attribute on iframes
    const initializeTallyForms = () => {
      // Check if Tally is already loaded
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        // Manually set src attributes on iframes if Tally isn't loaded
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.setAttribute('src', iframe.getAttribute('data-tally-src') || '');
        });
      }
    };

    // Load the Tally script if it's not already loaded
    const tallyWidgetUrl = "https://tally.so/widgets/embed.js";
    if (!document.querySelector(`script[src="${tallyWidgetUrl}"]`)) {
      const script = document.createElement("script");
      script.src = tallyWidgetUrl;
      script.onload = initializeTallyForms;
      script.onerror = initializeTallyForms;
      document.body.appendChild(script);
    } else {
      initializeTallyForms();
    }

    // Cleanup function
    return () => {
      // Optional: Remove the script when component unmounts
      // However, this might cause issues if multiple components use Tally
      // So we'll leave it for now
    };
  }, []);

  return (
    <iframe 
      data-tally-src="https://tally.so/embed/mZyOJz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
      loading="lazy" 
      width="100%" 
      height="319" 
      frameBorder="0" 
      title="StellarVote Waitlist Signup"
      className="bg-transparent"
    ></iframe>
  );
};

export default TallyForm;
