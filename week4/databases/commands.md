```sql
CREATE TABLE movies (
  movie_id SERIAL,
  movie_title VARCHAR(45) NOT NULL,
  released_date date NOT NULL,
  fk_director_id INTEGER NOT NULL,
  PRIMARY KEY (movie_id),
  FOREIGN KEY (fk_director_id) REFERENCES directors(director_id) ON DELETE CASCADE
);
```

How to drop Movies?

```sql
DROP TABLE movies;
```

How to delete a Movie?

```sql
DELETE FROM movies WHERE movie_id = 1;
```

Create table if not exists:

```sql
CREATE TABLE IF NOT EXISTS movies (
  movie_id SERIAL,
  movie_title VARCHAR(45) NOT NULL,
  released_date date NOT NULL,
  fk_director_id INTEGER NOT NULL,
  PRIMARY KEY (movie_id),
  FOREIGN KEY (fk_director_id) REFERENCES directors(director_id) ON DELETE CASCADE
);
```

Create an actor table from this:

```sql
CREATE TABLE actors (
  actor_id SERIAL,
  actor_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (actor_id)
);
```

INSERT INTO actors:

```sql
INSERT INTO actors (actor_name) VALUES ('Actor1');
```

Create a new table for books:

```sql
CREATE TABLE books (
  book_id SERIAL,
  book_title VARCHAR(45) NOT NULL,
  author VARCHAR(45) NOT NULL,
  PRIMARY KEY (book_id)
);
```

Create a CSV file for table books:

```sql
COPY books (book_title, author) FROM 'books.csv' DELIMITER ',' CSV HEADER;
```
