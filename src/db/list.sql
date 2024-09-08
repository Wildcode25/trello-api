CREATE TABLE list (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    created_by INT REFERENCES collaborator(id) ON DELETE SET NULL,
    board_id INT REFERENCES board(id) ON DELETE CASCADE
);
