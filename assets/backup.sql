PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
-- INSERT INTO Transactions VALUES(1,1,100.49999999999999999,1709814000,'Weekly groceries','Expense');
-- INSERT INTO Transactions VALUES(2,1,75.25,1709900400,'More groceries','Expense');
-- INSERT INTO Transactions VALUES(3,2,1200.0,1707740400,'Monthly rent','Expense');
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
CREATE TABLE Productos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
	actual TEXT,
	categoria TEXT,
	cod TEXT,
	compuesto_variable TEXT,
	estado TEXT,
	familia TEXT,
	garantia TEXT,
	id_categoria TEXT,
	id_familia TEXT,
	id_marca TEXT,
	imagen TEXT,
	marca TEXT,
	nombre TEXT,
	precio_venta TEXT,
	variable_id TEXT,
	ver TEXT
);
