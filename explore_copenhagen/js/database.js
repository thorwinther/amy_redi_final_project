const database = [
  [
    {
      image: "img/Nyhavn.webp",
      location: "Nyhavn",
      type: "Historical Landmark",
      description: `Created between 1670 and 1675 as a gateway from the sea to the
      inner city, Nyhavn was notorious for beer, sailors and
      prostitution, gaining a reputation as the city’s entertainment
      district. Now a popular tourist area, it has transformed into
      a lively space full of restaurants and shops. If you are
      looking for somewhere to sit back and people-watch during the
      summer, this is the place. Stop by Bo-Bi Bar just around the
      corner for a classic bodega vibe, where sailors, politicians
      and journalists would all rub shoulders in this smoky (and
      infamous) joint.`,
    },
  ],
  [
    {
      image: "img/Museum.webp",
      location: "National Museum of Denmark",
      type: "Museum, School",
      description: `Want an all-encompassing view of the rich history of one of
      the leading Nordic countries? Make a beeline for the National
      Museum of Denmark and learn about everything from the
      2,000-year-old bog woman to Viking lore. Perfect for those
      travelling with kids, the museum is equipped with interactive
      activities giving an insightful view into Denmark’s past.
      Through informative exhibitions, you’ll discover the city’s
      past while learning about the events that shaped the country.`,
    },
  ],
  [
    {
      image: "img/Børsen.webp",
      location: "Børsen",
      type: "Historical Landmark",
      description: `The 17th-century stock exchange building, Børsen, is located
      in Christiansborg Palace on the island of Slotsholmen. With
      its majestic Dutch Renaissance architecture, it’s a
      recommended stop for architecture and history buffs looking to
      soak up Danish design. Now the home of the Danish Chamber of
      Commerce, the building is a prime example of the celebration
      of Danish design within the commercial and economical Danish
      landscape.`,
    },
  ],
  [
    {
      image: "img/Amalienborg-Palace.webp",
      location: "Amalienborg Palace",
      type: "Historical Landmark",
      description: `A visit to Amalienborg Palace will captivate visitors’
      interest not only because it is the royal family’s winter
      residence but also because 150 years of Danish history unfold
      through the diverse rooms and exhibitions.`,
    },
  ],
  [
    {
      image: "img/Round-tower.webp",
      location: "The Round Tower",
      type: "Historical Landmark",
      description: `Designed to continue the pioneering research of the astronomer
      Tycho Brahe, the Round Tower offers stunning views of
      Copenhagen. If your knees are in good shape, walk up its
      notable 200 metres spiral ramp that takes you to the top. The
      17th-century observation tower was completed in 1642 and has
      become one of Copenhagen’s most popular attractions.`,
    },
  ],
  [
    {
      image: "img/Tivoli-Gardens.webp",
      location: "Tivoli Gardens",
      type: "Amusement Park, Park",
      description: `The Tivoli Gardens, located next to the Vesterbro district, is
      a famous amusement park in Copenhagen. The second oldest
      amusement park in the world, Tivoli Gardens opened in 1843 and
      has been thrilling amusement-hunters ever since. Take a ride
      on Rutschebanen, one of the oldest wooden roller coasters in
      the world, or see the stunning view of Copenhagen from the
      80-metre-tall (260-foot-tall) carousel Star Flyer. Tivoli also
      offers a relaxing spot among their beautiful Japanese gardens.`,
    },
  ],
  [
    {
      image: "img/The-Black-Diamond.webp",
      location: "The Black Dimond",
      type: "Library",
      description: `Situated in central Copenhagen, the Black Diamond is the
      extension of the Royal Danish Library. With its imposing
      exterior that reflects its surrounding landscape, it’s hard to
      miss this cultural gem designed by the Danish architects
      Schmidt Hammer Lassen. The Black Diamond has its finger on the
      pulse as the cultural platform for local and international
      leaders in their creative fields.`,
    },
  ],
];

database.forEach((item, index) => {
  createNewAttraction(item, index);
});

function createNewAttraction(item, index) {
  let image = item[0].image;
  let location = item[0].location;
  let type = item[0].type;
  let description = item[0].description;
  console.log(item[0]);

  var div1 = document.createElement("div");
  div1.className = "flex items-start justify-end mb-6 tm-menu-item-2";

  var img1 = document.createElement("img");
  img1.setAttribute("src", image);
  img1.setAttribute("alt", "Image");
  img1.setAttribute("class", "rounded-md");
  div1.appendChild(img1);

  var div2 = document.createElement("div");
  div2.className = "text-right mr-6";
  div1.appendChild(div2);

  var h3 = document.createElement("h3");
  h3.className = "text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow";
  h3.innerHTML = location;
  div2.appendChild(h3);

  var small = document.createElement("small");
  small.innerHTML = type;
  div2.appendChild(small);

  var div3 = document.createElement("div");
  div3.innerHTML = description;
  div3.className = "text-white text-md sm:text-lg font-light mb-1";
  div2.appendChild(div3);

  if (index % 2 == 0) {
    document.getElementById("div_container1").appendChild(div1);
  } else {
    document.getElementById("div_container2").appendChild(div1);
  }
}
