-- Active: 1692177352814@@localhost@5432@users
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO "user" (name, email, password)
VALUES
('Alice', 'alice@gmail.com', 'alice123'),
('Bob', 'bob@gmail.com', 'bob456'),
('Clark', 'clark@gmail.com', 'clark789');