DROP DATABASE IF EXISTS Adidas;

CREATE DATABASE Adidas;

USE Adidas;

CREATE TABLE Shoes (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(255) NOT NULL,
  color varchar(255) NOT NULL,
  PRIMARY KEY(ID)
);

-- GREY SHOES
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/e1b02183615f4f559c6cab65011a4ea0_9366/NMD_R1_Shoes_Grey_FV1733_01_standard.jpg', 'grey');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/ae137586e7414ce29c3dab88014f8291_9366/NMD_R1_Shoes_Grey_FV1733_010_hover_standard.jpg', 'grey');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/03c1ae23712643d58115ab65011a5cdf_9366/NMD_R1_Shoes_Grey_FV1733_02_standard.jpg', 'grey');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/9ce44ab246c44d799274ab65011a6413_9366/NMD_R1_Shoes_Grey_FV1733_03_standard.jpg', 'grey');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/20f4fd77c651428bafaeab65011a6b2b_9366/NMD_R1_Shoes_Grey_FV1733_04_standard.jpg', 'grey');

-- RED SHOES
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/73101ab9d9ee445db281ab57011a0229_9366/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg', 'red');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/93a4bcc32f2e4be889dfab6700ec361a_9366/NMD_R1_Shoes_Blue_FV1734_010_hover_standard.jpg', 'red');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/784ad9f9a7cc420f9e42ab57011a0490_9366/NMD_R1_Shoes_Blue_FV1734_02_standard.jpg', 'red');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cc0d2945469644809ea0ab57011a0624_9366/NMD_R1_Shoes_Blue_FV1734_03_standard.jpg', 'red');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/9f7710819c5741f9a21cab57011a0738_9366/NMD_R1_Shoes_Blue_FV1734_04_standard.jpg', 'red');

-- BLACK SHOE
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/7967fa1a9cb742d8a437ab6501290681_9366/NMD_R1_Shoes_Black_FV8732_01_standard.jpg', 'black');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/cbc46e26b72348de96b9ab6700ec7151_9366/NMD_R1_Shoes_Black_FV8732_010_hover_standard.jpg', 'black');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/159c3a98d97c4450befaab6501291547_9366/NMD_R1_Shoes_Black_FV8732_02_standard.jpg', 'black');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/a34cea7a8a2a428c866aab6501291b52_9366/NMD_R1_Shoes_Black_FV8732_03_standard.jpg', 'black');
Insert into Shoes (url, color) VALUE ('https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/efaca33fa4c64993af53ab65012921db_9366/NMD_R1_Shoes_Black_FV8732_04_standard.jpg', 'black');