/* // Create an array of portfolio items
const portfolioItems = [
    {
      name: "Project Name 1",
      description: "Project description 1.",
      image: "path/to/image1.jpg",
      url: "https://example.com/project1",
    },
    {
      name: "Project Name 2",
      description: "Project description 2.",
      image: "path/to/image2.jpg",
      url: "https://example.com/project2",
    },
    {
      name: "Project Name 3",
      description: "Project description 3.",
      image: "path/to/image3.jpg",
      url: "https://example.com/project3",
    },
  ];
  
  // Loop through the portfolio items and create HTML for each item
  const portfolioHTML = portfolioItems.map((item) => {
    return `
      <div class="col-md-4 portfolio-item">
        <img src="${item.image}" alt="${item.name}" class="img-fluid">
        <h3 class="portfolio-title">${item.name}</h3>
        <p class="
   */