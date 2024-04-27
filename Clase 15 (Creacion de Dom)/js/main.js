const blogEntries = [
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "Los Secretos de la Cocina Italiana",
      content:
        "Explorar la cocina italiana va más allá de la pizza y la pasta. En este artículo, descubrimos los ingredientes autóctonos, las técnicas de cocción y los platos menos conocidos que definen la verdadera esencia de la cocina italiana.",
      abstract:
        "Explorar la cocina italiana va más allá de la pizza y la pasta...",
      rating: 8.75,
      fechaCreacion: "2024-04-18",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      image: "https://picsum.photos/id/102/200/300",
      title: "Avances en la Energía Solar",
      content:
        "La energía solar ha alcanzado nuevos hitos en la última década, con avances en la eficiencia de los paneles y la reducción de costos. Analizamos cómo estos cambios están configurando el futuro de las energías renovables.",
      abstract:
        "La energía solar ha alcanzado nuevos hitos en la última década...",
      rating: 9.3,
      fechaCreacion: "2024-04-17",
      autor: "Laura Martínez",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image: "https://picsum.photos/id/401/200/300",
      title: "La Revolución de la Inteligencia Artificial",
      content:
        "La inteligencia artificial está transformando industrias enteras, desde la automotriz hasta la financiera. Este artículo explora los desarrollos más recientes y cómo están influyendo en nuestras vidas cotidianas.",
      abstract:
        "La inteligencia artificial está transformando industrias enteras...",
      rating: 7.9,
      fechaCreacion: "2024-04-16",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      image: "https://picsum.photos/id/200/200/300",
      title: "El Futuro del Trabajo Remoto",
      content:
        "El trabajo remoto se ha convertido en una parte fundamental de muchas industrias. Este artículo analiza las herramientas, técnicas y culturas que están moldeando esta nueva forma de trabajar.",
      abstract: "El trabajo remoto se ha convertido en una parte fundamental...",
      rating: 8.65,
      fechaCreacion: "2024-04-15",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      image: "https://picsum.photos/id/305/200/300",
      title: "Secretos para un Jardín Sostenible",
      content:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente, sino también relajante y gratificante. Descubre técnicas y consejos para mantener tu jardín verde y próspero con un impacto mínimo en la naturaleza.",
      abstract:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente...",
      rating: 9.5,
      fechaCreacion: "2024-04-14",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      image: "https://picsum.photos/id/180/200/300",
      title: "Explorando la Historia del Jazz",
      content:
        "El jazz es un género musical que ha influido en muchas otras formas de música a lo largo del tiempo. Este artículo explora la historia del jazz, sus figuras clave y su impacto en la música moderna.",
      abstract:
        "El jazz es un género musical que ha influido en muchas otras formas...",
      rating: 8.2,
      fechaCreacion: "2024-04-13",
      autor: "Miguel Ángel García",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];
  
  console.log(blogEntries);
  
 
  
  /* Cards Authors*/

  const createAutorCard = (entryAutor) =>{
    let {image, autor} = entryAutor

    let card = document.createElement("li")
    card.classList.add("card", "blog-card", "mb-3")

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let imageAutor = document.createElement("img")
    imageAutor.classList.add("img-autors")
    imageAutor.setAttribute("src", image)
    
    let nameAutor = document.createElement("h6")
    let cardNameAutor = document.createTextNode(autor)
    nameAutor.append(cardNameAutor)
    
    cardBody.append(imageAutor, nameAutor)
    card.append(cardBody)

    return card

  }

  const printCardsAutor = (blogData, wrapperId) =>{
    let idElement = document.getElementById(wrapperId)
    blogData.reduce((acumm, current) =>{
       
      if(!acumm.includes(current.autor)){   
      acumm = [...acumm, current.autor]
      idElement.append(createAutorCard(current))
      }
      
      return acumm
    }, [])
    return idElement
  }


  /* Cards Blogs*/

  const createBlogCard = (entryObject) => {
    let { fechaCreacion, image, title, abstract, autor } = entryObject;
  
    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");
  
    let cardImage = document.createElement("img");
    cardImage.classList.add("img-blog")
    cardImage.setAttribute("src", image);
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextContent = document.createTextNode(abstract);
    cardText.append(cardTextContent);


    let cardAutor = document.createElement("li")
    cardAutor.classList.add("card")

    let cardBodyAutor = document.createElement("div")
    cardBodyAutor.classList.add("autor")

    let imageAutor = document.createElement("img")
    imageAutor.classList.add("img-autors")
    imageAutor.setAttribute("src", image)
    
    let nameAutor = document.createElement("h6")
    let cardNameAutor = document.createTextNode(autor)
    nameAutor.append(cardNameAutor)
    
    let conteinerInfo = document.createElement("div")
    conteinerInfo.classList.add("info")

    let dateCreation = document.createElement("h6")
    let date = document.createTextNode(fechaCreacion)
    dateCreation.append(date)

    let dateBtn = document.createElement("button")
    dateBtn.classList.add("btn")
    let btnTex = document.createTextNode("Ver más")
    dateBtn.append(btnTex)

    conteinerInfo.append(dateCreation, dateBtn)
    cardBodyAutor.append(imageAutor, nameAutor)
    cardAutor.append(cardBodyAutor)
  
    cardBody.append(cardTitle, cardText);
    card.append(cardImage, cardBody, cardAutor, conteinerInfo);

    
  
    return card;
  };
  
  const printBlogCards = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = createBlogCard(entry);
      wrapper.append(blogCard);
    });
  };
  

   /* Popular Post*/
  const createPopularItem = (entryObject) => {
    let { title } = entryObject;
  
    let entryItem = document.createElement("li");
    entryItem.classList.add("list-group-item");
  
    let itemAnchor = document.createElement("a");
    itemAnchor.setAttribute("href", "#");
  
    let entryHeading = document.createElement("h6");
    let entryTitle = document.createTextNode(title);
  
    entryHeading.append(entryTitle);
    itemAnchor.append(entryHeading);
    entryItem.append(itemAnchor);
  
    return entryItem;
  };
  
  const printPopularEntries = (popularArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    popularArray.forEach((entry) => {
      let popularEntry = createPopularItem(entry);
      wrapper.append(popularEntry);
    });
  };
  
  printBlogCards(blogEntries, "main-posts");
  
  printPopularEntries(
    blogEntries.filter((entry) => entry.rating > 9),
    "popular-entries"
  );

  printCardsAutor(blogEntries, "author-cards")
  