CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE social_links (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL,
    icon TEXT NOT NULL,
    url TEXT NOT NULL,
    sort_order INTEGER NOT NULL
);

CREATE TABLE skill_groups (
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL,
    icon TEXT NOT NULL,
    sort_order INTEGER NOT NULL
);

CREATE TABLE skill_items (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES skill_groups(id),
    name TEXT NOT NULL,
    level INTEGER NOT NULL,
    sort_order INTEGER NOT NULL
);

CREATE TABLE timeline (
    id SERIAL PRIMARY KEY,
    icon TEXT NOT NULL,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    description TEXT NOT NULL,
    sort_order INTEGER NOT NULL
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER NOT NULL
);