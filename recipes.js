// Recipe data
const recipes = [
    {
      id: 1,
      title: "Flan Clásico",
      description: "Un postre tradicional con un delicioso caramelo y textura suave.",
      image: "https://www.eldiariodecarlospaz.com.ar/u/fotografias/m/2024/5/10/f685x385-311185_348878_5050.jpg",
      prepTime: "1 hora + 4 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "Para el caramelo",
          ingredients: [
            "1 taza de azúcar",
            "1/4 taza de agua"
          ]
        },
        {
          title: "Para el flan",
          ingredients: [
            "4 huevos",
            "1 lata de leche condensada (390 g)",
            "1 lata de leche evaporada (360 ml)",
            "1 cucharadita de esencia de vainilla"
          ]
        }
      ],
      instructions: [
        {
          title: "Prepara el caramelo",
          steps: [
            "En una sartén, mezcla el azúcar y el agua.",
            "Calienta a fuego medio sin revolver hasta que el azúcar se derrita y tome un color dorado.",
            "Vierte el caramelo en un molde para flan y gira el molde para cubrir el fondo y los lados. Reserva."
          ]
        },
        {
          title: "Prepara la mezcla del flan",
          steps: [
            "En una licuadora, mezcla los huevos, la leche condensada, la leche evaporada y la vainilla hasta obtener una mezcla homogénea.",
            "Vierte la mezcla en el molde con el caramelo."
          ]
        },
        {
          title: "Hornea el flan",
          steps: [
            "Precalienta el horno a 180°C (350°F).",
            "Coloca el molde en una bandeja para horno y añade agua caliente hasta la mitad del molde (baño María).",
            "Hornea durante 45-50 minutos o hasta que al insertar un cuchillo, este salga limpio."
          ]
        },
        {
          title: "Enfría y desmolda",
          steps: [
            "Deja enfriar el flan a temperatura ambiente y luego refrigera por al menos 4 horas.",
            "Para desmoldar, pasa un cuchillo por los bordes y voltea el flan sobre un plato."
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Flan de Chocolate",
      description: "Una deliciosa variante del flan clásico con un rico sabor a chocolate.",
      image: "https://images.aws.nestle.recipes/resized/2020_04_29T14_58_46_mrs_ImageRecipes_145026lrg_1080_850.jpg",
      prepTime: "1 hora + 4 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "Para el caramelo",
          ingredients: [
            "1/2 taza de azúcar",
            "2 cucharadas de agua"
          ]
        },
        {
          title: "Para el flan",
          ingredients: [
            "4 huevos",
            "1 lata de leche condensada (390 g)",
            "1 lata de leche evaporada (360 ml)",
            "1/2 taza de cacao en polvo sin azúcar",
            "1 cucharadita de esencia de vainilla"
          ]
        }
      ],
      instructions: [
        {
          title: "Prepara el caramelo",
          steps: [
            "En una sartén, mezcla el azúcar y el agua.",
            "Calienta a fuego medio sin revolver hasta que el azúcar se derrita y tome un color dorado.",
            "Vierte el caramelo en un molde para flan y gira el molde para cubrir el fondo y los lados. Reserva."
          ]
        },
        {
          title: "Prepara la mezcla del flan",
          steps: [
            "En una licuadora, mezcla los huevos, la leche condensada, la leche evaporada, el cacao en polvo y la vainilla hasta que esté bien integrado.",
            "Vierte la mezcla en el molde con el caramelo."
          ]
        },
        {
          title: "Hornea el flan",
          steps: [
            "Hornea en baño María a 180°C (350°F) durante 50-55 minutos.",
            "Verifica la cocción con un cuchillo."
          ]
        },
        {
          title: "Enfría y desmolda",
          steps: [
            "Deja enfriar el flan a temperatura ambiente y luego refrigera por al menos 4 horas.",
            "Para desmoldar, pasa un cuchillo por los bordes y voltea el flan sobre un plato."
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Arroz con Dulce",
      description: "Un postre tradicional a base de arroz con un delicioso sabor a canela.",
      image: "https://bakeitwithlove.com/wp-content/uploads/2022/04/Arroz-con-Dulce-Puerto-Rican-rice-pudding-sq.jpg.webp",
      prepTime: "40 minutos",
      difficulty: "Fácil",
      sections: [
        {
          title: "",
          ingredients: [
            "1 taza de arroz de grano corto",
            "4 tazas de agua",
            "1 lata de leche condensada (390 g)",
            "1 lata de leche evaporada (360 ml)",
            "1 rama de canela",
            "1/2 cucharadita de sal",
            "1/2 taza de azúcar (opcional, dependiendo de tu gusto)",
            "Canela en polvo para decorar"
          ]
        }
      ],
      instructions: [
        {
          title: "Cocina el arroz",
          steps: [
            "Lava el arroz hasta que el agua salga clara.",
            "En una olla, hierve el arroz con el agua, la rama de canela y la sal a fuego medio. Cocina hasta que el arroz esté tierno y el agua se haya absorbido."
          ]
        },
        {
          title: "Añade los lácteos",
          steps: [
            "Agrega la leche condensada, la leche evaporada y el azúcar (si lo usas).",
            "Cocina a fuego lento, revolviendo constantemente, hasta que la mezcla espese (unos 15-20 minutos)."
          ]
        },
        {
          title: "Sirve y decora",
          steps: [
            "Retira la rama de canela.",
            "Vierte el arroz con dulce en moldes individuales o en un recipiente grande.",
            "Espolvorea canela en polvo por encima antes de servir."
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Tres Leches",
      description: "Un bizcocho esponjoso empapado en una mezcla de tres tipos de leche.",
      image: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      prepTime: "1 hora + 4 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "Para el bizcocho",
          ingredients: [
            "1 taza de harina",
            "1 1/2 cucharaditas de polvo para hornear",
            "1/4 cucharadita de sal",
            "5 huevos (separadas claras y yemas)",
            "1 taza de azúcar",
            "1/3 taza de leche",
            "1 cucharadita de esencia de vainilla"
          ]
        },
        {
          title: "Para la mezcla de tres leches",
          ingredients: [
            "1 lata de leche evaporada (360 ml)",
            "1 lata de leche condensada (390 g)",
            "1/2 taza de crema para batir (nata)"
          ]
        },
        {
          title: "Para decorar",
          ingredients: [
            "Crema batida",
            "Frutas frescas (opcional)"
          ]
        }
      ],
      instructions: [
        {
          title: "Prepara el bizcocho",
          steps: [
            "Precalienta el horno a 180°C (350°F).",
            "En un tazón, mezcla la harina, el polvo para hornear y la sal.",
            "En otro tazón, bate las yemas con el azúcar hasta que estén claras y esponjosas. Añade la leche y la vainilla.",
            "Incorpora la mezcla de harina a las yemas.",
            "Bate las claras a punto de nieve y dóblalas suavemente en la mezcla.",
            "Vierte la mezcla en un molde engrasado y hornea por 25-30 minutos."
          ]
        },
        {
          title: "Prepara la mezcla de tres leches",
          steps: [
            "En un tazón, mezcla la leche evaporada, la leche condensada y la crema."
          ]
        },
        {
          title: "Empapa el bizcocho",
          steps: [
            "Una vez frío, perfora el bizcocho con un tenedor y vierte la mezcla de tres leches lentamente, asegurándote de que se absorba bien."
          ]
        },
        {
          title: "Decora",
          steps: [
            "Cubre con crema batida y frutas frescas antes de servir."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Cheesecake",
      description: "Un postre cremoso con base de galleta y relleno de queso.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      prepTime: "1 hora + 4 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "Para la base",
          ingredients: [
            "2 tazas de galletas trituradas (tipo digestive o graham)",
            "1/2 taza de mantequilla derretida"
          ]
        },
        {
          title: "Para el relleno",
          ingredients: [
            "500 g de queso crema (a temperatura ambiente)",
            "1 taza de azúcar",
            "3 huevos",
            "1 cucharadita de esencia de vainilla",
            "1/2 taza de crema agria (opcional)"
          ]
        }
      ],
      instructions: [
        {
          title: "Prepara la base",
          steps: [
            "Mezcla las galletas trituradas con la mantequilla derretida.",
            "Presiona la mezcla en el fondo de un molde desmontable y refrigera."
          ]
        },
        {
          title: "Prepara el relleno",
          steps: [
            "Bate el queso crema con el azúcar hasta que esté suave.",
            "Añade los huevos uno a uno, luego la vainilla y la crema agria (si usas).",
            "Vierte la mezcla sobre la base."
          ]
        },
        {
          title: "Hornea",
          steps: [
            "Hornea a 160°C (325°F) durante 45-50 minutos o hasta que el centro esté casi firme.",
            "Deja enfriar en el horno con la puerta entreabierta, luego refrigera por al menos 4 horas."
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Brownies",
      description: "Un postre de chocolate denso y húmedo, perfecto para los amantes del chocolate.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      prepTime: "45 minutos",
      difficulty: "Fácil",
      sections: [
        {
          title: "",
          ingredients: [
            "200 g de chocolate negro",
            "150 g de mantequilla",
            "1 taza de azúcar",
            "3 huevos",
            "1 taza de harina",
            "1/2 cucharadita de polvo para hornear",
            "1/4 cucharadita de sal",
            "1 cucharadita de esencia de vainilla"
          ]
        }
      ],
      instructions: [
        {
          title: "",
          steps: [
            "Derrite el chocolate y la mantequilla a baño María.",
            "Mezcla el azúcar y los huevos, luego añade el chocolate derretido y la vainilla.",
            "Incorpora la harina, el polvo para hornear y la sal.",
            "Vierte la mezcla en un molde engrasado y hornea a 180°C (350°F) por 20-25 minutos."
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Tiramisú",
      description: "Un postre italiano clásico con capas de bizcochos empapados en café y crema de mascarpone.",
      image: "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-jumbo-v2.jpg",
      prepTime: "30 minutos + 4 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "",
          ingredients: [
            "200 g de queso mascarpone",
            "3 huevos (separadas claras y yemas)",
            "1/2 taza de azúcar",
            "1 taza de café fuerte frío",
            "1 paquete de bizcochos tipo ladyfingers",
            "Cacao en polvo para decorar"
          ]
        }
      ],
      instructions: [
        {
          title: "",
          steps: [
            "Bate las yemas con el azúcar hasta que estén cremosas. Añade el mascarpone.",
            "Bate las claras a punto de nieve y dóblalas en la mezcla de mascarpone.",
            "Moja los bizcochos en el café y colócalos en un molde.",
            "Alterna capas de bizcochos y crema de mascarpone.",
            "Refrigera por al menos 4 horas y espolvorea cacao antes de servir."
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Mousse de Chocolate",
      description: "Un postre ligero y aireado con un intenso sabor a chocolate.",
      image: "https://media.gettyimages.com/id/1189235789/photo/chocolate-mousse-desserts-concept.jpg?s=612x612&w=0&k=20&c=sbXqLr8TP0if1RGbu2ymZcNkZjpt_Ox50tQnddhJW6c=",
      prepTime: "30 minutos + 2 horas de refrigeración",
      difficulty: "Media",
      sections: [
        {
          title: "",
          ingredients: [
            "200 g de chocolate negro",
            "3 huevos (separadas claras y yemas)",
            "1/4 taza de azúcar",
            "1 taza de crema para batir"
          ]
        }
      ],
      instructions: [
        {
          title: "",
          steps: [
            "Derrite el chocolate a baño María.",
            "Bate las yemas con el azúcar y mézclalas con el chocolate derretido.",
            "Bate las claras a punto de nieve y la crema hasta formar picos.",
            "Incorpora las claras y la crema batida al chocolate suavemente.",
            "Vierte en copas y refrigera por 2 horas."
          ]
        }
      ]
    }
  ];