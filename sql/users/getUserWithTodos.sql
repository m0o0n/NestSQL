SELECT
    users.name,
    users.email,
    COALESCE(
        json_agg(
            json_build_object(
                'id',
                todos.id,
                'title',
                todos.title,
                'description',
                todos.description,
                'created_at',
                todos.created_at
            )
        ) FILTER (
            WHERE
                todos.id IS NOT NULL
        ),
        '[]'
    ) AS todos
FROM
    users
    LEFT JOIN todos ON users.id = todos.user_id
WHERE
    users.id = $1
GROUP BY
    users.id