//  Scrolling js
 (function(){
      // Ticker: ensure continuous scroll by cloning items to fill 2x viewport
      const tickerViewport = document.querySelector('.promo-ticker .ticker__viewport');
      const tickerTrack = document.querySelector('.promo-ticker .ticker__track');
      let baseCount = 0;
      function fillTicker() {
      if (!tickerViewport || !tickerTrack) return;
      if (baseCount === 0) baseCount = tickerTrack.children.length;
      const targetWidth = tickerViewport.offsetWidth * 2;

      // Append clones of the base items until the track is wide enough
      while (tickerTrack.scrollWidth < targetWidth) {
      for (let i = 0; i < baseCount; i++) {
        tickerTrack.appendChild(tickerTrack.children[i].cloneNode(true));
      }
      }
      }
      window.addEventListener('load', fillTicker);
      window.addEventListener('resize', fillTicker);
      })();