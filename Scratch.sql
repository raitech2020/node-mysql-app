DROP TABLE IF EXISTS posts;
-- primary key can be defined in two ways
-- primary key with the field
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255)
);

-- primary key separately at the end
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT,
    title VARCHAR(255),
    body VARCHAR(255),
    PRIMARY KEY(id)
);

