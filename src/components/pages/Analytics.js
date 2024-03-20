// Analytics.js
import React from 'react';

const AnalyticsPage = () => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <script
        type="module"
        src="https://prod-apnortheast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
      ></script>
      <tableau-viz
        id="tableau-viz"
        src="https://prod-apnortheast-a.online.tableau.com/t/sunilsilva20334af80bb86/views/Insightz/AccountEngagement"
        width="100%"
        height="660"
        hide-tabs
        toolbar="bottom"
      ></tableau-viz>
    </div>
  );
};

export default AnalyticsPage;
