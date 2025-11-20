document.addEventListener('DOMContentLoaded', function () {
    const mediumUsername = 'mittyu_0527';
    const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const postsContainer = document.querySelector('.blog-posts-container');

    if (!postsContainer) return;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                data.items.forEach(item => {
                    // Filter out comments if necessary, though usually feed has posts
                    // Create article element
                    const article = document.createElement('article');
                    article.className = 'blog-post-card';

                    // Extract thumbnail
                    // Medium feed items often have a thumbnail in the description or content
                    // rss2json tries to extract it to 'thumbnail' property
                    let thumbnail = item.thumbnail;

                    // If no thumbnail, try to find first image in content
                    if (!thumbnail) {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(item.content, 'text/html');
                        const img = doc.querySelector('img');
                        if (img) thumbnail = img.src;
                    }

                    // Format date
                    const pubDate = new Date(item.pubDate);
                    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = pubDate.toLocaleDateString('en-US', dateOptions);

                    // Create excerpt (strip html)
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = item.description;
                    const plainText = tempDiv.textContent || tempDiv.innerText || '';
                    const excerpt = plainText.split(' ').slice(0, 60).join(' ') + '...';

                    let html = '';

                    if (thumbnail) {
                        html += `<img src="${thumbnail}" alt="${item.title}" class="blog-post-img">`;
                    }

                    html += `
                        <h3 class="blog-post-title"><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p class="blog-post-meta">
                            <i class="uil uil-calendar-alt"></i> ${formattedDate}
                        </p>
                        <p class="blog-post-excerpt">${excerpt}</p>
                        <a href="${item.link}" target="_blank" class="button button--flex button--small blog-post-button">
                            Read More <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    `;

                    article.innerHTML = html;
                    postsContainer.appendChild(article);
                });
            }
        })
        .catch(error => console.error('Error fetching Medium posts:', error));
});
