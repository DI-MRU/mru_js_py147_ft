-- SELECT * FROM actors
-- SELECT COUNT(*) AS Total_actors FROM actors; 
-- SELECT avg(number_oscars) AS average_number_oscars FROM actors;  
-- SELECT sum(number_oscars) AS total_oscars FROM actors; 
-- SELECT DISTINCT first_name FROM actors ORDER BY first_name ASC;
-- SELECT * FROM actors WHERE first_name not in ('Matt','Lea','Davis');
-- SELECT AVG(number_oscars) AS Average_of_oscars FROM actors;
-- SELECT DISTINCT number_oscars FROM actors ORDER BY number_oscars ASC;
-- SELECT age FROM actors WHERE age='1970-01-01';
-- SELECT first_name FROM actors WHERE first_name ='David' OR first_name='Morgan' OR first_name='Will';
-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );
-- SELECT * FROM actors;
-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     1
--     ),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     2);
-- SELECT * FROM movies;
-- SELECT
--     actors.first_name,
--     actors.last_name,
--     actors.actor_id,
--     movies.movie_title,
--     movies.actor_playing_id
-- FROM
--     actors
--     LEFT JOIN movies ON actors.actor_id = movies.actor_playing_id

-- CREATE TABLE producers(
--     producer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR (50) NOT NULL,
--     last_name VARCHAR (100) NOT NULL,
--     movie_id INTEGER,
--     FOREIGN KEY (movie_id) REFERENCES movies (movie_id)
-- );

-- INSERT INTO producers (first_name, last_name, movie_id) VALUES
--     ('Barry', 'Triscia', 1),
--     ('Barry', 'Triscia', 2);

-- SELECT * FROM producers;

SELECT movies.movie_title, producers.first_name, producers.last_name
FROM movies
INNER JOIN producers ON movies.movie_id = producers.movie_id;
