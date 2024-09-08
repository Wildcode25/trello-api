CREATE TABLE collaborator (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
    board_id INT REFERENCES board(id) ON DELETE CASCADE,
    admin BOOLEAN NOT NULL
);
