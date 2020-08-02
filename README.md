# Youtube Rating Extension

## The idea
The like/dislike ratio on youtube content is an accurate but underutilized heuristic when deciding what content to watch.
The extension will display a small window or graphic next to video descriptions in both the search results page and the main content view page.

This extension will perform the following:
On the 'search results' youtube page:
- scan document and look for youtube video preview containers
- if found, find like/dislike data for each video (may require youtube api call?)
- once found, display UI element which contains ratio

On the 'main content view' youtube page:
- scan document and look for youtube main content container
- if found, scrape/find like/dislike data and display the ratio in the UI