-- CREATE TABLE actors (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	age DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL,
--  is_active BOOLEAN
-- );

-- INSERT INTO actors
-- 	(first_name, last_name, age, number_oscars)
-- VALUES
-- 	('Barry2', 'Triscia5', '01-01-2024', 2),
-- 	('Barry2', 'Triscia5', '01-01-2024', 6),
-- 	('Barry2', 'Triscia5', '01-01-2024', 4),
-- 	('Barry2', 'Triscia5', '01-01-2024', 7),
-- 	('Barry2', 'Triscia5', '01-01-2024', 8),
-- 	('Barry2', 'Triscia5', '01-01-2024', 3),
-- 	('Barry2', 'Triscia5', '01-01-2024', 5),
-- 	('Barry2', 'Triscia5', '01-01-2024', 8),
-- 	('Barry2', 'Triscia5', '01-01-2024', 1),
-- 	('Barry2', 'Triscia5', '01-01-2024', 0);

SELECT * FROM actors;
-- SELECT actor_id AS "Index", first_name FROM actors;

sEleCT * FROM actors WHERE actor_id = 14;
sEleCT * FROM actors WHERE first_name = 'Barry2';
sEleCT * FROM actors
	WHERE first_name = 'Barry2'
	AND last_name = 'Triscia5';
sEleCT * FROM actors
	WHERE first_name = 'Barry2'
	AND last_name = 'Triscia5'
	OR last_name='Vincent';
SELECT * FROM actors
	WHERE number_oscars = 20;
SELECT * FROM actors
	WHERE number_oscars <= 20;
SELECT first_name, last_name FROM actors
	WHERE actor_id > 5;
SELECT first_name, last_name FROM actors
	WHERE last_name LIKE '%Ia%';
SELECT first_name, last_name FROM actors
	WHERE last_name ILIKE '%Ia%';
SELECT * FROM actors
	WHERE last_name != 'Vincent';
SELECT * FROM actors
	WHERE last_name <> 'Vincent';
SELECT * FROM actors
	WHERE is_active != FALSE;
SELECT * FROM actors
	WHERE is_active IS NOT NULL;
	
SELECT * FROM actors
ORDER BY actor_id ASC
LIMIT 30
OFFSET 20;

-- UPDATE actors
-- SET first_name = 'Maty'
-- WHERE actor_id = 1;
-- UPDATE actors
-- SET
--     number_oscars = 4
-- WHERE
--     actor_id = 1 RETURNING *;

-- ALTER TABLE actors RENAME COLUMN age TO birthdate
SELECT * FROM actors;
-- DELETE FROM actors WHERE actor_id = 10;
