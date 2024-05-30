PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Expense', 'Income'))
);
CREATE TABLE Transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER,
  amount REAL NOT NULL,
  date INTEGER NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('Expense', 'Income')),
  FOREIGN KEY (category_id) REFERENCES Categories (id)
 );
INSERT INTO Transactions VALUES(1,1,100.49999999999999999,1709814000,'Weekly groceries','Expense');
INSERT INTO Transactions VALUES(2,1,75.25,1709900400,'More groceries','Expense');
INSERT INTO Transactions VALUES(3,2,1200.0,1707740400,'Monthly rent','Expense');
CREATE TABLE Mesas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
	cambio TEXT,
	created_at TEXT,
	estado INTEGER,
	id_forma_pago INTEGER,
	id_tercero INTEGER,
	libre INTEGER,
	nombre TEXT,
	recibido INTEGER,
	subtotal INTEGER,
	total INTEGER
);
