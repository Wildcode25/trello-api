CREATE TABLE card (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    created_by INT REFERENCES collaborator(id) ON DELETE SET NULL,
    list_id INT REFERENCES list(id) ON DELETE CASCADE
);
