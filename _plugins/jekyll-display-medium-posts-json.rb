require 'net/http'
require 'json'

module Jekyll
  class MediumPostsGenerator < Generator
    safe true
    priority :high

    def generate(site)
      puts "Fetching Medium posts..."
      url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mittyu_0527"
      resp = Net::HTTP.get(URI(url))
      data = JSON.parse(resp)
      site.data['medium_posts'] = data['items']
      puts "Medium posts fetched successfully!"
    end
  end
end
