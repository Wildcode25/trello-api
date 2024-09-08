CREATE TABLE board (
    id SERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    workspace_id INT REFERENCES workspace(id) ON DELETE CASCADE
);
