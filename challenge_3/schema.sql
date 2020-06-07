USE multiformcheckout;

DROP TABLE users;

CREATE TABLE users
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  shippingAddress1 VARCHAR(50),
  shippingAddress2 VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  zipcode INT,
  phoneNumber INT,
  creditCardNumber INT,
  expirationDate VARCHAR(50),
  cvv INT,
  billingZipCode INT,
  PRIMARY KEY (id)
);