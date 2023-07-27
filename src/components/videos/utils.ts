export const prettyPrintNumbers = (views: string) => {
  const viewsParsedToNumbers = parseInt(views);
  if (viewsParsedToNumbers < 1000) {
    return views;
  } else if (viewsParsedToNumbers < 1e6) {
    return `${views.toString().slice(0, -3)}k`;
  } else if (viewsParsedToNumbers < 1e9) {
    return `${views.toString().slice(0, -6)}M`;
  } else {
    return `${views.toString().slice(0, -9)}B`;
  }
};
