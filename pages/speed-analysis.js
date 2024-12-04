import { SpeedInsights } from "@vercel/speed-insights/next";

const SpeedAnalysisPage = () => {
  return (
    <div>
      <h1>Performance Analysis</h1>
      <SpeedInsights />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.si('track', 'page_view', {
              url: window.location.href,
              title: document.title,
            });
          `,
        }}
      />
    </div>
  );
};

export default SpeedAnalysisPage;
