-- Active: 1680418353011@@localhost@5432@users
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    dob DATE
);

INSERT INTO "user" (name, email, dob)
VALUES
('Alice', 'alice@gmail.com', '1997-01-11'),
('Bob', 'bob@gmail.com', '2000-02-22'),
('Clark', 'clark@gmail.com', '2003-03-03');