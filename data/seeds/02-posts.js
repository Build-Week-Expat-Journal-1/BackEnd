exports.seed = function (knex) {
  return knex("posts")
    .truncate()
    .then(function () {
      return knex("posts").insert([
        {
          id: 1,
          category: "Europe",
          story: "I went there",
          posted_date: "2020-06-21 20:01:20",
          photo:
            "https://www.nationalgeographic.com/content/dam/travel/2017-digital/destination-hubs/01_Europe.adapt.1900.1.jpg",
        },
        {
          id: 2,
          category: "North America",
          story: "they had nice burgers",
          posted_date: "2020-08-21 20:01:20",
          photo:
            "https://www.nps.gov/grca/planyourvisit/images/powell-pt-640.jpg?maxwidth=650&autorotate=false",
        },
        {
          id: 3,
          category: "Asia",
          story: "the great wall is great",
          posted_date: "2020-09-21 20:01:20",
          photo:
            "https://image.cnbcfm.com/api/v1/image/106246652-1573788271264gettyimages-1051651510.jpeg?v=1573788570",
        },
        {
          id: 4,
          category: "Africa",
          story: "the great",
          posted_date: "2020-09-21 20:01:20",
          photo:
            "https://www.azamara.com/sites/default/files/heros/south-africa-hero-1800x1000.jpg",
        },
      ]);
    });
};
