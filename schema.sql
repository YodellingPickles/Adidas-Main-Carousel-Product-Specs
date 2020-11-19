DROP DATABASE IF EXISTS Adidas;

CREATE DATABASE Adidas;

USE Adidas;

CREATE TABLE Shoes (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  color varchar(255) NOT NULL,
  productId varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE Shirts (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  productId varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE Pants (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  productId varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE Socks (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  productId varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

CREATE TABLE Accessories (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  productId varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

-- GREY SHOES
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/e1b02183615f4f559c6cab65011a4ea0_9366/NMD_R1_Shoes_Grey_FV1733_01_standard.jpg', 'grey', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/ae137586e7414ce29c3dab88014f8291_9366/NMD_R1_Shoes_Grey_FV1733_010_hover_standard.jpg', 'grey', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/03c1ae23712643d58115ab65011a5cdf_9366/NMD_R1_Shoes_Grey_FV1733_02_standard.jpg', 'grey', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/9ce44ab246c44d799274ab65011a6413_9366/NMD_R1_Shoes_Grey_FV1733_03_standard.jpg', 'grey', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/20f4fd77c651428bafaeab65011a6b2b_9366/NMD_R1_Shoes_Grey_FV1733_04_standard.jpg', 'grey', 'FV1733', 'NMD_R1 SHOES', '$140');

-- RED SHOES
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/73101ab9d9ee445db281ab57011a0229_9366/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg', 'red', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/93a4bcc32f2e4be889dfab6700ec361a_9366/NMD_R1_Shoes_Blue_FV1734_010_hover_standard.jpg', 'red', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/784ad9f9a7cc420f9e42ab57011a0490_9366/NMD_R1_Shoes_Blue_FV1734_02_standard.jpg', 'red', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cc0d2945469644809ea0ab57011a0624_9366/NMD_R1_Shoes_Blue_FV1734_03_standard.jpg', 'red', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/9f7710819c5741f9a21cab57011a0738_9366/NMD_R1_Shoes_Blue_FV1734_04_standard.jpg', 'red', 'FV1733', 'NMD_R1 SHOES', '$140');

-- BLACK SHOE
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/7967fa1a9cb742d8a437ab6501290681_9366/NMD_R1_Shoes_Black_FV8732_01_standard.jpg', 'black', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cbc46e26b72348de96b9ab6700ec7151_9366/NMD_R1_Shoes_Black_FV8732_010_hover_standard.jpg', 'black', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/159c3a98d97c4450befaab6501291547_9366/NMD_R1_Shoes_Black_FV8732_02_standard.jpg', 'black', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/a34cea7a8a2a428c866aab6501291b52_9366/NMD_R1_Shoes_Black_FV8732_03_standard.jpg', 'black', 'FV1733', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/efaca33fa4c64993af53ab65012921db_9366/NMD_R1_Shoes_Black_FV8732_04_standard.jpg', 'black', 'FV1733', 'NMD_R1 SHOES', '$140');

-- RandomShoes
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/ac94b726893644aebfb9aaf001138d0f_9366/FV9015_00_plp_standard.jpg', 'black', 'shoe1', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/de7d57ddae474f139736a8ba00fcbfb8_9366/B42200_00_plp_standard.jpg', 'black', 'shoe2', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/8171ca50b72c487f9289abd601371d4c_9366/FV9153_00_plp_standard.jpg', 'red', 'shoe3', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/9113aac9752b4da6ab79ab65013fb8c5_9366/FV8732_00_plp_standard.jpg', 'red', 'shoe4', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/801e88f5897a411a9e77a8ba0101c79a_9366/D96635_00_plp_standard.jpg', 'white', 'shoe5', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/b15e40665c434221be6cab090128b086_9366/FV9017_00_plp_standard.jpg', 'red', 'shoe6', 'NMD_R1 SHOES', '$140');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/06d42ae3ea464c5d8ccaabd60136cd42_9366/FV9152_00_plp_standard.jpg', 'grey', 'shoe7', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/019ff327ccf3414caa5dabd100fd695a_9366/FV1737_00_plp_standard.jpg', 'grey', 'shoe8', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/cc436225af89462091c0ab65014037b3_9366/FW4365_00_plp_standard.jpg', 'black', 'shoe9', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/a51f626a3c194ed88a5dabd100fd7d21_9366/FV1738_00_plp_standard.jpg', 'black', 'shoe10', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/8b534fd471e1466289a3abd60117e45f_9366/FV1740_00_plp_standard.jpg', 'red', 'shoe11', 'NMD_R1 SHOES', '$112');
Insert into Shoes (url, color, productId, name, price) VALUE ('https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/cd6540b804ab491ca66cabeb00827881_9366/FY5922_00_plp_standard.jpg', 'black', 'shoe12', 'NMD_R1 SHOES', '$112');

-- Shirts
Insert into Shirts (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/b1755add2634427883c0aac400c928d2_9366/FM3311_000_plp_model.jpg', 'TREFOIL TEE', '$30', '2XS,XS,S,M', 'shirt1');
Insert into Shirts (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/3b03a3047ea54740867bac0800f5ea6a_9366/FU3830_01_laydown.jpg', 'TEE', '$35', '2XS,XS,S,M,L,XL', 'shirt2');
Insert into Shirts (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/6ac9e92073074c3e9972abf30150dcb0_9366/FU3835_01_laydown.jpg', 'TRACK TOP', '$85', 'S,M,L', 'shirt3');

-- Pants
Insert into Pants (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/7e3e32cc890c4fc18621aabf0109d713_9366/FM2574_21_model.jpg', 'BIKER SHORTS', '$35', '2XS,XS,S', 'pants1');
Insert into Pants (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/20f9bcd6b08f4de890a0abf800c9b845_9366/FU3827_01_laydown.jpg', 'CUFFED PANTS', '$75', '2XS,XS,S,M,X,XL', 'pants2');
Insert into Pants (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/02ff4bf5b64142c9b37cabba00b1805b_9366/GM6673_01_laydown.jpg', 'BIKER SHORTS (PLUS SIZE)', '$28', '2X', 'pants3');

-- Socks
Insert into Socks (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/b442310cabd947bebda5aa330177533f_9366/BH6423_00_plp_standard.jpg', 'CUSHIONED CREW SOCKS', '$20', 'L', 'sock1');
Insert into Socks (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/bbb8087c1533496bb5f2a8f600fce845_9366/CJ7666_00_plp_standard.jpg', 'TREFOIL NO-SHOW SOCKS', '$20', 'M', 'sock2');
Insert into Socks (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/4710ea0dc0134988b2ddabaa009c432c_9366/GD3559_00_plp_standard.jpg', 'TREFOIL CUFF CREW SOCKS', '$14', 'M', 'sock3');

-- Accessories
Insert into Accessories (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/f30f8d83671a49c39fc7ac07000459af_9366/EW8887_00_plp_standard.jpg', 'TRI-COLOR STRAP-BACK HAT', '$26', 'ONE SIZE', 'hat1');
Insert into Accessories (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/852c5fa8fa5d43fc8fe6ac2500e75102_9366/CI7717_00_plp_standard.jpg', 'RELAXED STRAP-BACK HAT', '$25', 'ONE SIZE', 'hat2');
Insert into Accessories (url, name, price, size, productId) VALUE ('https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/d2a9216908a74255aa50ab1801529ac3_9366/FP8433_00_plp_standard.jpg', 'FASHION BAG', '$150', 'ONE SIZE', 'bag1');