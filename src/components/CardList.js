import React from 'react'
import CardShow from './CardShow';

export default function CardList({lists}) {

let listt =[]
listt= Object.values(lists);

const sourceLabels = ['Amazon', 'Flipkart', 'Reliance']; // Adjust as needed

  // Create an array to hold the CardShow components
  let renderedComponents = [];

  // Iterate over the data
  listt.forEach(([contentArray, imageArray], outerIndex) => {
    // Map over the contentArray and create post objects
    const posts = contentArray.map((content, innerIndex) => {
      const post = {
        content: content,
        image: imageArray[innerIndex]
      };

      // Return a CardShow component with post data as props
      return <CardShow key={`post_${outerIndex}_${innerIndex}`} {...post} />;
    });

    // Create a container with a label based on the source and push it to the array
    const sourceLabel = sourceLabels[outerIndex % sourceLabels.length]; // Rotate through sourceLabels
    const sourceContainer = (
      <div key={`source_${outerIndex}`} className="source-container">
        <h2 className='label'>{sourceLabel}</h2>
        <div className="card-container">{posts}</div>
      </div>
    );

    renderedComponents.push(sourceContainer);
  });

  // Render the array of CardShow components
  return <div>{renderedComponents}</div>;
}
