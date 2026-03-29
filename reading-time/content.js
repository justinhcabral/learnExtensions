function renderReadingTime(article) {
  // If we weren't provided an article, we don't need to render anything.

  if (!article) return;

  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; //regex
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert ot array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same stylign as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  //support for api reference docs
  const heading = article.querySelector("h1");
  // support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}

renderReadingTime(document.querySelector("article"));
