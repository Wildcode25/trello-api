CREATE TABLE workspace (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    owner INT REFERENCES user(id) ON DELETE CASCADE
);
