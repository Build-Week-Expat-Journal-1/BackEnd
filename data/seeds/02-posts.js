exports.seed = function (knex) {
  return knex("posts")
    .truncate()
    .then(function () {
      return knex("posts").insert([
        {
          id: 1,
          category: "Europe",
          story:
            "I went there, it was pretty good. Velit laoreet id donec ultrices tincidunt arcu non. Tincidunt arcu non sodales neque. ",
          posted_date: "2020-06-21 20:01:20",
          photo:
            "https://www.nationalgeographic.com/content/dam/travel/2017-digital/destination-hubs/01_Europe.adapt.1900.1.jpg",
        },
        {
          id: 2,
          category: "North America",
          story:
            "they had nice burgers and the people were only kinda loud. Velit laoreet id donec ultrices tincidunt arcu non. Tincidunt arcu non sodales neque. ",
          posted_date: "2020-08-21 20:01:20",
          photo:
            "https://www.nps.gov/grca/planyourvisit/images/powell-pt-640.jpg?maxwidth=650&autorotate=false",
        },
        {
          id: 3,
          category: "Asia",
          story:
            "the great wall is great. Velit laoreet id donec ultrices tincidunt arcu non. Tincidunt arcu non sodales neque. ",
          posted_date: "2020-09-21 20:01:20",
          photo:
            "https://image.cnbcfm.com/api/v1/image/106246652-1573788271264gettyimages-1051651510.jpeg?v=1573788570",
        },
        {
          id: 4,
          category: "Africa",
          story:
            "I bless the rains down in Africa. Velit laoreet id donec ultrices tincidunt arcu non. Tincidunt arcu non sodales neque. ",
          posted_date: "2020-09-21 20:01:20",
          photo:
            "https://www.azamara.com/sites/default/files/heros/south-africa-hero-1800x1000.jpg",
        },
      ]);
    });
};
