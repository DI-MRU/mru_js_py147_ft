-- An example of using SQL to create a database table and tables for analytics and tracing events.

create database analytics;

-- Language: sql

CREATE TABLE analytics.events (
    id serial PRIMARY KEY,
    event_type varchar(255) NOT NULL,
    event_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

CREATE INDEX events_event_type_idx ON analytics.events USING btree (event_type);

-- create trace table for tracing events

CREATE TABLE analytics.trace (
    id serial PRIMARY KEY,
    event_id integer NOT NULL,
    trace_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);

-- create if not exists
CREATE TABLE IF NOT EXISTS analytics.events (
    id serial PRIMARY KEY,
    event_type varchar(255) NOT NULL,
    event_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);