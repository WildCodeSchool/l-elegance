
create table
    user(
        id int unsigned primary key auto_increment not null,
        firstname varchar(255) not null,
        lastname VARCHAR(255) not null,
        email varchar(255) not null UNIQUE,
        birthday VARCHAR(255) not null,
        password VARCHAR(255) not null,
        city varchar(255) not null,
        profession varchar(255) not null default ""
    );