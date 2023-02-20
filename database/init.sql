
CREATE TABLE IF NOT EXISTS public.users (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	age int4 NOT NULL,
	address jsonb NULL,
	additional_info jsonb NULL
);