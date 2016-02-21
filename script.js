  $(document).ready(function() {

    $('.chosen-category-news').on('click',function(){
      $('#feed-news').show();
      $('#feed-technology').hide();
    });

    $('.chosen-category-business').on('click',function(){
      $('#feed-business').show();
      $('#feed-news').hide();
    });

    $('.chosen-category-health').on('click',function(){
      $('#feed-health').show();
      $('#feed-business').hide();
    });
    
    $('.chosen-category-technology').on('click',function(){
      $('#feed-technology').show();
      $('#feed-health').hide();
    });

    function initialize() {
      var feedNews = new google.feeds.Feed("http://feeds.bbci.co.uk/news/rss.xml");
      var feedBusiness = new google.feeds.Feed("http://feeds.bbci.co.uk/news/business/rss.xml");
      var feedHealth = new google.feeds.Feed("http://feeds.bbci.co.uk/news/health/rss.xml");
      var feedTechnology = new google.feeds.Feed("http://feeds.bbci.co.uk/news/technology/rss.xml");

      feedNews.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed-news");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.innerHTML = '<h3><a href="' + entry.link + '">' + entry.title + '</a></h3>';
            div.innerHTML += '<i>' + entry.publishedDate + '</i>';
            div.innerHTML += '<p>' + entry.contentSnippet + '</p>';
            container.appendChild(div);
          }
        }
      });

     feedBusiness.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed-business");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.innerHTML = '<h3><a href="' + entry.link + '">' + entry.title + '</a></h3>';
            div.innerHTML += '<i>' + entry.publishedDate + '</i>';
            div.innerHTML += '<p>' + entry.contentSnippet + '</p>';
            container.appendChild(div);
          }
        }
      });

      feedHealth.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed-health");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.innerHTML = '<h3><a href="' + entry.link + '">' + entry.title + '</a></h3>';
            div.innerHTML += '<i>' + entry.publishedDate + '</i>';
            div.innerHTML += '<p>' + entry.contentSnippet + '</p>';
            container.appendChild(div);
          }
        }
      });

      feedTechnology.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed-technology");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.innerHTML = '<h3><a href="' + entry.link + '">' + entry.title + '</a></h3>';
            div.innerHTML += '<i>' + entry.publishedDate + '</i>';
            div.innerHTML += '<p>' + entry.contentSnippet + '</p>';
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);
  });


 
  