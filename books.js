const books = [
    {
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling",
      year: "2003",
      imageUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/J-K-Rowling-Harry-Potter-and-the-Order-of-the-Phoenix-Harry-Potter-Book-5-Paperback-9781338878967/1312016315?classType=REGULAR&athbdg=L1600&from=/search"
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
      year: "2007",
      imageUrl: "https://m.media-amazon.com/images/I/81c58+3lHkL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/J-K-Rowling-Harry-Potter-and-the-Deathly-Hallows-Harry-Potter-Book-7-Paperback-9781338878981/1100050366?classType=REGULAR&from=/search"
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      year: "2000",
      imageUrl: "https://m.media-amazon.com/images/I/81FDOxGJSbL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/J-K-Rowling-Harry-Potter-and-the-Goblet-of-Fire-Harry-Potter-Book-4-Paperback-9781338878950/1726856265?classType=REGULAR&from=/search"
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K. Rowling",
      year: "2005",
      imageUrl: "https://m.media-amazon.com/images/I/81RxB9a0DQL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/J-K-Rowling-Harry-Potter-and-the-Half-Blood-Prince-Harry-Potter-Book-6-Paperback-9781338878974/1601161038?classType=REGULAR&from=/search"
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
      year: "1999",
      imageUrl: "https://m.media-amazon.com/images/I/91k4bF7R9jL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/J-K-Rowling-Harry-Potter-and-the-Prisoner-of-Azkaban-Harry-Potter-Book-3-Paperback-9781338878943/1133723818?athcpid=1133723818&athpgid=AthenaItempage&athcgid=null&athznid=cc&athieid=v0&athstid=CS020&athguid=2fOuRDn6cUZtasNCS8JwOA04WPyHSCYDjEam&athancid=1601161038&athena=true"
    },
    {
      title: "Harry Potter Spell and Potion Book",
      author: "J.K. Rowling",
      year: "2020",
      imageUrl: "https://m.media-amazon.com/images/I/81Xl5kHz3bL._AC_UL320_.jpg",
      link: "http://walmart.com/ip/Harry-Potter-Spell-and-Potion-Book-Official-Book-of-Spells-Potions-and-Creatures-Hardcover-9781339044866/5016567901?classType=REGULAR&from=/search"
    },
    {
      title: "Official Harry Potter Cookbook",
      author: "Joanna Farrow",
      year: "2020",
      imageUrl: "https://m.media-amazon.com/images/I/81N8z6-91vL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/Joanna-Farrow-Official-Harry-Potter-Cookbook-40-Recipes-Inspired-by-the-Films-Hardcover-9781338893076/2519933514?athcpid=2519933514&athpgid=AthenaItempage&athcgid=null&athznid=cc&athieid=v0&athstid=CS020&athguid=-o1AQ8lQi9zyGYwDHeBe0JjFZZff1FiXg7aj&athancid=5016567901&athena=true"
    },
    {
      title: "Harry Potter Baking and Cookbook Collection",
      author: "Various",
      year: "2021",
      imageUrl: "https://m.media-amazon.com/images/I/91nHOlgkqvL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/The-Official-Harry-Potter-Baking-and-Cookbook-Collection-Other-9781546111757/5194293936?athcpid=5194293936&athpgid=AthenaItempage&athcgid=null&athznid=cc&athieid=v0&athstid=CS020&athguid=wPQbGHjasNeyEUp5hoISB4Zop4bJSNVvuxDR&athancid=2519933514&athena=true"
    },
    {
      title: "Unofficial Harry Potter Cookbook",
      author: "Various",
      year: "2011",
      imageUrl: "https://m.media-amazon.com/images/I/71kzKn6L4yL._AC_UL320_.jpg",
      link: "https://www.walmart.com/ip/Unofficial-Harry-Potter-Cookbook-Cauldron-Cakes-Knickerbocker-Glory-More-150-Magical-Recipes-Wizards-Non-Wizards-Alike-Hardcover-9781440503252/14014148?athcpid=14014148&athpgid=AthenaItempage&athcgid=null&athznid=cc&athieid=v0&athstid=CS020&athguid=Bjk7EM3TPhYRogVW5wDEi369s8uk7ZVMXE9e&athancid=5194293936&athena=true"
    },
    {
      title: "Unofficial Jokes for Fans of Harry Potter",
      author: "Various",
      year: "2019",
      imageUrl: "https://m.media-amazon.com/images/I/81PONKbTHQL._AC_UL320_.jpg",