import React from "react";
import PostComponent from "../postComponent/PostComponent";

function ContainerComponent() {
    const postsData = [
        {
          title: "Serenity at Sunset: Reflecting on the Ocean's Endless Beauty",
          paragraph: "Across the vast expanse of the deep blue sea, the golden sun sets, casting a brilliant sheen over the waves. Each crest breaks with a gentle whisper, a serene reminder of the ocean's timeless rhythm. This tranquil scene inspires a deep sense of peace, prompting reflections on the vastness of nature and the beauty that unfolds when we take a moment to pause and observe."
        },
        {
          title: "The Quiet Whisper of the Forest at Dawn",
          paragraph: "As dawn breaks, the quiet whispers of the forest come alive with the chirping of birds and the rustle of leaves. The soft glow of the morning sun filters through the dense canopy, illuminating paths less trodden. It's a moment that captures the essence of new beginnings and nature's subtle invitations to explore."
        },
        {
          title: "Mountain Majesty: The Call of the Peaks",
          paragraph: "The majesty of the mountains is undeniable. From their towering peaks shrouded in clouds to their rugged slopes etched in snow, they call to those seeking adventure and solace. Each mountain tells a story of geological time and the resilience of nature against the elements."
        }
      ];
      return (
    <div>
      <PostComponent postsData={postsData} />
    </div>
  );
}

export default ContainerComponent;
